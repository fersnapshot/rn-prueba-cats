module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.json',
          '.native.js',
        ],
        alias: {
          '^#(.+)': './src/\\1',
        },
      },
    ],
    ['module:react-native-dotenv'],
  ],
};
