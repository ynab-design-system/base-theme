import { toTheme } from '@theme-ui/typography'
import moragaTheme from 'typography-theme-moraga'

const typographyTheme = toTheme(moragaTheme);


export default {
  typographyTheme,
  colors: {
    main: {
      white: '#FFFFFF',
      lightest: '#e5f5f9',
      light: 'rgba(0,156,194,.1)',
      default: '#2c97ad',
      dark: '#00596f',
      darker: '#003540',
      darkest: '',
      gray: '#e9eced',
      black: '#000000'
    },
    primary: {
      100: '#ebf7ff',
      200: '#d2eaf9',
      300: '#9acfef',
      400: '#84c2e8',
      500: '#5ab3ea',
      600: '#4495d7',
      800: '#2f5276',
      900: '#25384f'
    },
    neutral: {
      white: '#fff',
      100: '#f4f6f6',
      200: '#e9eced',
      300: '#dde2e4',
      400: '#ced5d8',
      500: '#adb7bb',
      600: '#88979d',
      700: '#5c6a70',
      800: '#383e41',
      900: '#272b2d'
    },
    success: {
      100: '#f1f9e1',
      200: '#cdea9f',
      300: '#92bf5a',
      400: '#6b9934',
      500: '#588326',
      600: '#4a711c',
      700: '#3b5815',
      800: '#324412',
      900: '#26320b'
    },
    warning: {
      100: '#fef6e1',
      200: '#f9e1a9',
      300: '#f9d06e',
      400: '#fac548',
      500: '#fdbe2a',
      600: '#e5ab25',
      700: '#a8741a',
      800: '#70460b',
      900: '#472606'
    }
  },
  fonts: {
    body: "Source Sans Pro, sans-serif",
    heading: "Source Sans Pro, sans-serif"
  },
};