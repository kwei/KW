import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#efefef",
          "200": "#cbcbcb",
          "300": "#bdbdbd",
          "400": "#9b9b9b",
          "500": "#818181",
          "600": "#646464",
          "700": "#4b4b4b",
          "800": "#2d2d2d",
          "900": "#181818",
        },
        primary: {
          "100": "#bdbcc5",
          "200": "#aca8be",
          "300": "#897fb2",
          "400": "#7062a8",
          "500": "#5a4a9c",
          "600": "#413479",
          "700": "#2c2254",
          "800": "#1d163a",
          "900": "#17122a",
        },
        red: {
          "100": "#fcdbdb",
          "200": "#fab2b2",
          "300": "#fd9797",
          "400": "#fc7777",
          "500": "#ff5a5a",
          "600": "#dc4040",
          "700": "#b02e2e",
          "800": "#7c1f1f",
          "900": "#561414",
        },
        green: {
          "100": "#d2efeb",
          "200": "#b2f3ea",
          "300": "#99e8dd",
          "400": "#80dccf",
          "500": "#5acdbd",
          "600": "#399488",
          "700": "#308176",
          "800": "#2e796c",
          "900": "#153a34",
        },
        yellow: {
          "100": "#fce9b7",
          "200": "#f8db8d",
          "300": "#fad46a",
          "400": "#fccc49",
          "500": "#f6bd20",
          "600": "#d3a013",
          "700": "#b2870e",
          "800": "#8c690a",
          "900": "#574206",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
