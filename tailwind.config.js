/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.tsx',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  theme: {
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
        },
        hide: {
          from: {
            opacity: 1
          },
          to: {
            opacity: 0
          }
        },
        slideInRight: {
          from: {
            transform: 'translateX(calc(100% + 24px))'
          },
          to: {
            transform: 'translateX(0)'
          }
        },
        slideInLeft: {
          from: {
            transform: 'translateX(-24px)'
          },
          to: {
            transform: 'translateX(0)'
          }
        },
        slideOutRight: {
          from: {
            transform: 'translateX(var(--radix-toast-swipe-end-x))'
          },
          to: {
            transform: 'translateX(calc(100% + 24px))'
          }
        },
        slideOutLeft: {
          from: {
            transform: 'translateX(var(--radix-toast-swipe-end-x))'
          },
          to: {
            transform: 'translateX(-24px)'
          }
        },
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' }
        },
        scale: {
          to: {
            transform: 'scale(3)',
            opacity: '0.6'
          }
        }
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideIn: 'slideIn 200ms ease-out',
        slideOut: 'slideOut 200ms ease-out',
        hide: 'hide 100ms ease-in',
        slideInLeft: 'slideInLeft 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideInRight: 'slideInRight 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideOutLeft: 'slideOutLeft 100ms ease-out',
        slideOutRight: 'slideOutRight 100ms ease-out',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        scale: 'scale 0.8s infinite alternate'
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
      addVariant('datachecked', '&[data-state="checked"]')
      addVariant('datadisabled', '&[data-disabled]')
      addVariant('loading', '&[data-loading=true]')
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            }
          }
        },
        {
          values: theme('transitionDelay')
        }
      )
    })
  ]
}
