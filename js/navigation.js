/* ====================================
   导航系统
   ==================================== */

class NavigationManager {
    constructor() {
        this.navLinks = [];
        this.sections = [];
        this.currentActiveLink = null;
        this.scrollOffset = 80; // 导航栏高度偏移
        this.init();
    }

    /**
     * 初始化导航系统
     */
    init() {
        this.bindEvents();
        this.updateNavLinks();
        this.handleInitialHash();
    }

    /**
     * 更新导航链接缓存
     */
    updateNavLinks() {
        this.navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
        this.sections = this.navLinks.map(link => {
            const href = link.getAttribute('href');
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            return {
                link,
                element: targetElement,
                id: targetId
            };
        }).filter(item => item.element);
    }

    /**
     * 处理初始页面加载时的哈希
     */
    handleInitialHash() {
        const hash = window.location.hash;
        if (hash) {
            // 延迟执行，确保页面完全加载
            setTimeout(() => {
                this.scrollToSection(hash.substring(1));
            }, 100);
        }
    }

    /**
     * 平滑滚动到指定节
     */
    scrollToSection(sectionId, updateHistory = true) {
        const targetElement = document.getElementById(sectionId);
        if (!targetElement) {
            console.warn(`Section with id "${sectionId}" not found`);
            return false;
        }

        // 计算滚动位置
        const elementTop = targetElement.offsetTop;
        const scrollTop = elementTop - this.scrollOffset;

        // 平滑滚动
        window.scrollTo({
            top: Math.max(0, scrollTop),
            behavior: 'smooth'
        });

        // 更新活动链接状态
        this.setActiveLink(sectionId);

        // 更新URL历史
        if (updateHistory) {
            const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}#${sectionId}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
        }

        return true;
    }

    /**
     * 设置活动导航链接
     */
    setActiveLink(sectionId) {
        // 移除所有活动状态
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // 添加当前活动状态
        const activeLink = this.navLinks.find(link => {
            const href = link.getAttribute('href');
            return href === `#${sectionId}`;
        });

        if (activeLink) {
            activeLink.classList.add('active');
            this.currentActiveLink = activeLink;
        }
    }

    /**
     * 根据滚动位置自动更新活动链接
     */
    updateActiveOnScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // 如果滚动到页面底部，激活最后一个链接
        if (scrollTop + windowHeight >= documentHeight - 10) {
            const lastSection = this.sections[this.sections.length - 1];
            if (lastSection) {
                this.setActiveLink(lastSection.id);
            }
            return;
        }

        // 找到当前视口中的节
        let activeSection = null;

        for (let i = this.sections.length - 1; i >= 0; i--) {
            const section = this.sections[i];
            if (section.element) {
                const sectionTop = section.element.offsetTop - this.scrollOffset - 50;
                if (scrollTop >= sectionTop) {
                    activeSection = section;
                    break;
                }
            }
        }

        if (activeSection) {
            this.setActiveLink(activeSection.id);
        }
    }

    /**
     * 绑定事件监听器
     */
    bindEvents() {
        // 导航链接点击事件
        document.addEventListener('click', (e) => {
            const link = e.target.closest('nav a[href^="#"]');
            if (link) {
                e.preventDefault();
                const href = link.getAttribute('href');
                const sectionId = href.substring(1);
                this.scrollToSection(sectionId);
            }
        });

        // 滚动事件监听
        let scrollTimer = null;
        window.addEventListener('scroll', () => {
            if (scrollTimer) {
                cancelAnimationFrame(scrollTimer);
            }
            scrollTimer = requestAnimationFrame(() => {
                this.updateActiveOnScroll();
            });
        });

        // 浏览器前进后退事件
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash;
            if (hash) {
                this.scrollToSection(hash.substring(1), false);
            }
        });

        // 窗口大小变化时重新计算
        window.addEventListener('resize', () => {
            this.updateNavLinks();
        });

        // 键盘导航支持
        document.addEventListener('keydown', (e) => {
            // Alt + 数字键快速导航
            if (e.altKey && e.key >= '1' && e.key <= '9') {
                e.preventDefault();
                const index = parseInt(e.key) - 1;
                if (this.sections[index]) {
                    this.scrollToSection(this.sections[index].id);
                }
            }
        });
    }

    /**
     * 获取当前活动节
     */
    getCurrentSection() {
        const activeLink = document.querySelector('nav a.active');
        if (activeLink) {
            const href = activeLink.getAttribute('href');
            return href.substring(1);
        }
        return null;
    }

    /**
     * 导航到下一个节
     */
    goToNextSection() {
        const currentSection = this.getCurrentSection();
        const currentIndex = this.sections.findIndex(s => s.id === currentSection);

        if (currentIndex !== -1 && currentIndex < this.sections.length - 1) {
            const nextSection = this.sections[currentIndex + 1];
            this.scrollToSection(nextSection.id);
            return true;
        }
        return false;
    }

    /**
     * 导航到上一个节
     */
    goToPreviousSection() {
        const currentSection = this.getCurrentSection();
        const currentIndex = this.sections.findIndex(s => s.id === currentSection);

        if (currentIndex > 0) {
            const previousSection = this.sections[currentIndex - 1];
            this.scrollToSection(previousSection.id);
            return true;
        }
        return false;
    }

    /**
     * 设置滚动偏移量
     */
    setScrollOffset(offset) {
        this.scrollOffset = offset;
    }

    /**
     * 刷新导航系统
     */
    refresh() {
        this.updateNavLinks();
        this.updateActiveOnScroll();
    }
}

/**
 * 创建返回顶部按钮
 */
function createBackToTopButton() {
    const button = document.createElement('button');
    button.className = 'neuro-button back-to-top';
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.setAttribute('aria-label', '返回顶部');
    button.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
  `;

    // 显示/隐藏逻辑
    function toggleVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    }

    // 点击事件
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 滚动监听
    window.addEventListener('scroll', toggleVisibility);

    document.body.appendChild(button);
    return button;
}

/**
 * 初始化导航管理器
 */
function initNavigationManager() {
    return new NavigationManager();
}

// 导出到全局作用域
window.NavigationManager = NavigationManager;
window.initNavigationManager = initNavigationManager;
window.createBackToTopButton = createBackToTopButton;