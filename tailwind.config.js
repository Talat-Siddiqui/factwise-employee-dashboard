/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#4f46e5',
          light:   '#ede9fe',
          border:  '#ddd6fe',
          text:    '#5b21b6',
        },
        surface: {
          page:   '#f5f6fa',
          card:   '#ffffff',
          input:  '#f9fafb',
          muted:  '#f3f4f6',
        },
        border: {
          DEFAULT: '#e4e7f0',
        },
        content: {
          primary:   '#111827',
          secondary: '#374151',
          muted:     '#6b7280',
          faint:     '#9ca3af',
        },
        dept: {
          engineering: '#4f46e5',
          marketing:   '#7c3aed',
          sales:       '#0891b2',
          hr:          '#d97706',
          finance:     '#059669',
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04)',
        'card-md': '0 1px 3px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
