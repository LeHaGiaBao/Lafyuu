module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': ['./src/assets'],
          '@components': ['./src/components'],
          '@constants': ['./src/constants'],
          '@database': ['./src/database'],
          '@hooks': ['./src/hooks'],
          '@routes': ['./src/routes'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@translations': ['./src/translations'],
          '@utils': ['./src/utils'],
        },
      },
      'react-native-reanimated/plugin',
    ],
  ],
};
