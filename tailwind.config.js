/**
 * Tailwind 构建配置
 * 与原先 cdn.tailwindcss.com 内联的 theme 配置保持一致，保证视觉零变化。
 * 生成命令：npm run build:css
 */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '360px'
      },
      colors: {
        primary: '#ff9000',
        'primary-hover': '#e67e22',
        'primary-light': '#ffb84d',
        'primary-dark': '#cc7400'
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif']
      },
      spacing: {
        18: '4.5rem',
        88: '22rem'
      },
      maxWidth: {
        '8xl': '88rem'
      }
    }
  }
};
