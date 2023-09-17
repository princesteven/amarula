import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            'transform' : 'translateY(50px)',
            'opacity' : '0.25'
          },
          '25%': {
            'transform' : 'translateY(40px)',
            'opacity' : '0.5'
          },
          '50%': {
            'transform' : 'translateY(20px)',
            'opacity' : '0.75'
          },
          '100%': {
            'transform' : 'translateY(0)',
            'opacity' : '1'
          },
        },
        fadeInDown: {
          '0%': {
            'transform' : 'translateY(-50px)',
            'opacity' : '0.25'
          },
          '25%': {
            'transform' : 'translateY(-40px)',
            'opacity' : '0.5'
          },
          '50%': {
            'transform' : 'translateY(-20px)',
            'opacity' : '0.75'
          },
          '100%': {
            'transform' : 'translateY(0)',
            'opacity' : '1'
          },
        },
        fadeInRight: {
          '0%': {
            'transform' : 'translateX(-50px)',
            'opacity' : '0.25'
          },
          '25%': {
            'transform' : 'translateX(-40px)',
            'opacity' : '0.5'
          },
          '50%': {
            'transform' : 'translateX(-20px)',
            'opacity' : '0.75'
          },
          '100%': {
            'transform' : 'translateX(0)',
            'opacity' : '1'
          },
        },
        fadeInLeft: {
          '0%': {
            'transform' : 'translateX(50px)',
            'opacity' : '0.25'
          },
          '25%': {
            'transform' : 'translateX(40px)',
            'opacity' : '0.5'
          },
          '50%': {
            'transform' : 'translateX(20px)',
            'opacity' : '0.75'
          },
          '100%': {
            'transform' : 'translateX(0)',
            'opacity' : '1'
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.2s linear',
        fadeInDown: 'fadeInDown 3s linear',
        fadeInRight: 'fadeInRight 0.2s linear',
        fadeInLeft: 'fadeInLeft 0.2s linear',
      },
    },
  },
  plugins: [],
}
export default config
