module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['Azeret\\ Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#1E244E',
        purple: '#865CE8',
        navy: '#1A1250',
        cyan: '#A6FAFF',
      },
      boxShadow: {
        tab: '0 5px 15px rgba(111, 63, 220, 0.5)',
        'glow-lg': '0px 0px 12px #FFFFFF',
        'glow-sm': '0px 0px 6px #FFFFFF',
        lessons: '0 25px 25px rgba(52, 93, 154, 0.3)',
      },
      dropShadow: {
        onion: '0 10px 15px rgba(98, 49, 36, 0.5)',
      },
      zIndex: {
        '-1': '-1',
      },
      width: {
        90: '360px',
      },
      borderRadius: {
        '4xl': '40px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      backgroundOpacity: ['disabled'],
      boxShadow: ['disabled'],
      borderWidth: ['disabled'],
    },
  },
  plugins: [],
}
