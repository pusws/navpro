/* ====================================
   主题切换系统
   ==================================== */

class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
        this.initializeTheme();
        this.bindEvents();
    }

    /**
     * 获取系统主题偏好
     */
    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    /**
     * 获取本地存储的主题设置
     */
    getStoredTheme() {
        return localStorage.getItem('webnav-theme');
    }

    /**
     * 保存主题设置到本地存储
     */
    setStoredTheme(theme) {
        localStorage.setItem('webnav-theme', theme);
    }

    /**
     * 初始化主题
     */
    initializeTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeToggle();
    }

    /**
     * 切换主题
     */
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    /**
     * 设置指定主题
     */
    setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') {
            console.warn(`Invalid theme: ${theme}. Using system theme.`);
            theme = this.getSystemTheme();
        }

        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        this.setStoredTheme(theme);
        this.updateThemeToggle();
        this.dispatchThemeChange();
    }

    /**
     * 更新主题切换按钮状态
     */
    updateThemeToggle() {
        const toggles = document.querySelectorAll('.theme-toggle');
        const icons = document.querySelectorAll('.theme-icon');

        toggles.forEach(toggle => {
            toggle.classList.toggle('active', this.currentTheme === 'dark');
            toggle.setAttribute('aria-label',
                this.currentTheme === 'dark' ? '切换到浅色主题' : '切换到深色主题'
            );
        });

        icons.forEach(icon => {
            if (this.currentTheme === 'dark') {
                icon.className = 'fas fa-sun theme-icon';
                icon.title = '切换到浅色主题';
            } else {
                icon.className = 'fas fa-moon theme-icon';
                icon.title = '切换到深色主题';
            }
        });
    }

    /**
     * 分发主题变更事件
     */
    dispatchThemeChange() {
        const event = new CustomEvent('themechange', {
            detail: { theme: this.currentTheme }
        });
        document.dispatchEvent(event);
    }

    /**
     * 绑定事件监听器
     */
    bindEvents() {
        // 监听系统主题变化
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });

        // 绑定主题切换按钮
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-toggle')) {
                e.preventDefault();
                this.toggleTheme();
            }
        });

        // 键盘快捷键支持 (Ctrl/Cmd + Shift + T)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                this.toggleTheme();
            }
        });

        // 监听主题变更事件，用于其他组件响应
        document.addEventListener('themechange', (e) => {
            console.log(`Theme changed to: ${e.detail.theme}`);
        });
    }

    /**
     * 获取当前主题
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * 重置主题为系统默认
     */
    resetToSystemTheme() {
        localStorage.removeItem('webnav-theme');
        this.setTheme(this.getSystemTheme());
    }
}

/**
 * 创建主题切换按钮
 */
function createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'neuro-button theme-toggle';
    toggle.setAttribute('aria-label', '切换主题');
    toggle.innerHTML = `
    <i class="fas fa-moon theme-icon"></i>
  `;
    return toggle;
}

/**
 * 初始化主题管理器
 */
function initThemeManager() {
    return new ThemeManager();
}

// 导出到全局作用域
window.ThemeManager = ThemeManager;
window.initThemeManager = initThemeManager;
window.createThemeToggle = createThemeToggle;