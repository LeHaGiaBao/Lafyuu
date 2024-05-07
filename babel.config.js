module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@constants': './src/constants',
                    '@containers': './src/containers',
                    '@context': './src/context',
                    '@database': './src/database',
                    '@hooks': './src/hooks',
                    '@layouts': './src/layouts',
                    '@routes': './src/routes',
                    '@screens': './src/screens',
                    '@translation': './src/translation',
                    '@types': './src/types',
                    '@utils': './src/utils',
                },
            },
        ],
    ],
};
