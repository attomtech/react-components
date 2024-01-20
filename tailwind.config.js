/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    screens: {
      tablet: { max: '640px' },
      desktop: '641px'
    },
    extend: {
      keyframes: {
        overlayShow: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 0.5
          }
        },
        contentShow: {
          from: {
            opacity: 0,
            transform: 'translate(-50%, -48%) scale(.96)'
          },
          to: {
            opacity: 1,
            transform: 'translate(-50%, -50%) scale(1)'
          }
        },
        slideIn: {
          from: {
            transform: 'translateY(-100%)'
          },
          to: {
            transform: 'translateY(0)'
          }
        },
        slideOut: {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(-100%)'
          }
        }
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideIn: 'slideIn 200ms ease-out',
        slideOut: 'slideOut 200ms ease-out'
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('primary', '&[data-variant=primary]')
      addVariant('success', '&[data-variant=success]')
      addVariant('warning', '&[data-variant=warning]')
      addVariant('danger', '&[data-variant=danger]')
      addVariant('default', '&[data-variant="default"]')
    })
  ]
}
