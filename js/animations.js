/* ====================================
   动画效果和微交互系统
   ==================================== */

class AnimationManager {
    constructor() {
        this.observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        };
        this.init();
    }

    /**
     * 初始化动画系统
     */
    init() {
        this.initScrollAnimations();
        this.initHoverEffects();
        this.initClickRipples();
        this.initParallaxEffects();
        this.initTypewriterEffect();
        this.initCounterAnimation();
    }

    /**
     * 滚动动画
     */
    initScrollAnimations() {
        // 创建Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // 添加延迟动画
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('animate-visible');
                    }, delay);
                }
            });
        }, this.observerOptions);

        // 观察所有需要动画的元素
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => observer.observe(el));

        // 为没有动画类的元素添加默认动画
        const sections = document.querySelectorAll('.category-section');
        sections.forEach((section, index) => {
            section.classList.add('animate-on-scroll');
            section.dataset.delay = index * 100;
            observer.observe(section);
        });
    }

    /**
     * 悬停效果增强
     */
    initHoverEffects() {
        // 卡片悬停效果
        const cards = document.querySelectorAll('.neuro-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', this.cardHoverIn.bind(this));
            card.addEventListener('mouseleave', this.cardHoverOut.bind(this));
            card.addEventListener('mousemove', this.cardMouseMove.bind(this));
        });

        // 按钮悬停效果
        const buttons = document.querySelectorAll('.neuro-button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', this.buttonHoverIn.bind(this));
            button.addEventListener('mouseleave', this.buttonHoverOut.bind(this));
        });
    }

    /**
     * 卡片悬停进入效果
     */
    cardHoverIn(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(-4px) scale(1.02)';

        // 添加光晕效果
        const glow = document.createElement('div');
        glow.className = 'card-glow';
        glow.style.cssText = `
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(45deg, var(--primary-color), var(--primary-light));
      border-radius: inherit;
      opacity: 0;
      z-index: -1;
      filter: blur(8px);
      transition: opacity 0.3s ease;
    `;
        card.style.position = 'relative';
        card.appendChild(glow);

        setTimeout(() => {
            glow.style.opacity = '0.2';
        }, 50);
    }

    /**
     * 卡片悬停退出效果
     */
    cardHoverOut(e) {
        const card = e.currentTarget;
        card.style.transform = '';

        // 移除光晕效果
        const glow = card.querySelector('.card-glow');
        if (glow) {
            glow.style.opacity = '0';
            setTimeout(() => {
                if (glow.parentNode) {
                    glow.parentNode.removeChild(glow);
                }
            }, 300);
        }
    }

    /**
     * 卡片鼠标跟随效果
     */
    cardMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `translateY(-4px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    /**
     * 按钮悬停效果
     */
    buttonHoverIn(e) {
        const button = e.currentTarget;
        button.style.transform = 'translateY(-1px) scale(1.05)';
    }

    buttonHoverOut(e) {
        const button = e.currentTarget;
        button.style.transform = '';
    }

    /**
     * 点击涟漪效果
     */
    initClickRipples() {
        const rippleElements = document.querySelectorAll('.neuro-button, .neuro-nav-item');

        rippleElements.forEach(element => {
            element.addEventListener('click', this.createRipple.bind(this));
        });
    }

    /**
     * 创建涟漪效果
     */
    createRipple(e) {
        const element = e.currentTarget;
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('div');
        ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      opacity: 0.6;
      pointer-events: none;
      left: ${x}px;
      top: ${y}px;
      z-index: 100;
    `;

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        // 动画
        ripple.animate([
            { transform: 'scale(0)', opacity: 0.6 },
            { transform: 'scale(1)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        };
    }

    /**
     * 视差效果
     */
    initParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax');

        if (parallaxElements.length === 0) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    /**
     * 打字机效果
     */
    initTypewriterEffect() {
        const typewriterElements = document.querySelectorAll('.typewriter');

        typewriterElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid var(--primary-color)';

            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    // 移除光标
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                    }, 1000);
                }
            }, 100);
        });
    }

    /**
     * 数字计数动画
     */
    initCounterAnimation() {
        const counters = document.querySelectorAll('.counter');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }

    /**
     * 数字计数动画实现
     */
    animateCounter(element) {
        const target = parseInt(element.dataset.target) || parseInt(element.textContent);
        const duration = parseInt(element.dataset.duration) || 2000;
        const start = 0;
        const increment = target / (duration / 16);

        let current = start;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    /**
     * 页面加载动画
     */
    static initPageLoadAnimation() {
        // 添加页面加载完成的动画效果
        window.addEventListener('load', () => {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';

                    // 触发页面内容动画
                    document.body.classList.add('page-loaded');

                    // 添加欢迎动画
                    const header = document.querySelector('header h1');
                    if (header) {
                        header.style.animation = 'bounceIn 1s ease-out';
                    }
                }, 500);
            }
        });
    }

    /**
     * 滚动进度条
     */
    static initScrollProgress() {
        // 创建滚动进度条
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
      z-index: 1000;
      transition: width 0.1s ease;
    `;
        document.body.appendChild(progressBar);

        // 更新进度
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
        });
    }

    /**
     * 平滑滚动增强
     */
    static enhanceScrolling() {
        // 为所有内部链接添加平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

/**
 * 添加CSS动画样式
 */
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
    /* 滚动动画 */
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    
    .animate-on-scroll.animate-visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* 悬停动画 */
    .neuro-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .neuro-button {
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* 加载动画 */
    @keyframes bounceIn {
      0% { transform: scale(0.3); opacity: 0; }
      50% { transform: scale(1.05); }
      70% { transform: scale(0.9); }
      100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translate3d(0, 40px, 0); }
      to { opacity: 1; transform: translate3d(0, 0, 0); }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    /* 页面加载状态 */
    .page-loaded .category-section {
      animation: fadeInUp 0.6s ease forwards;
    }
    
    .page-loaded .category-section:nth-child(1) { animation-delay: 0.1s; }
    .page-loaded .category-section:nth-child(2) { animation-delay: 0.2s; }
    .page-loaded .category-section:nth-child(3) { animation-delay: 0.3s; }
    .page-loaded .category-section:nth-child(4) { animation-delay: 0.4s; }
    .page-loaded .category-section:nth-child(5) { animation-delay: 0.5s; }
    .page-loaded .category-section:nth-child(6) { animation-delay: 0.6s; }
    
    /* 主题切换动画 */
    * {
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    /* 减少动画偏好 */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
      
      .animate-on-scroll {
        opacity: 1;
        transform: none;
      }
    }
  `;
    document.head.appendChild(style);
}

/**
 * 初始化动画系统
 */
function initAnimationManager() {
    // 添加动画样式
    addAnimationStyles();

    // 创建动画管理器
    const animationManager = new AnimationManager();

    // 初始化页面加载动画
    AnimationManager.initPageLoadAnimation();

    // 初始化滚动进度条
    AnimationManager.initScrollProgress();

    // 增强滚动效果
    AnimationManager.enhanceScrolling();

    return animationManager;
}

// 导出到全局作用域
window.AnimationManager = AnimationManager;
window.initAnimationManager = initAnimationManager;