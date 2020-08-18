module.exports = {
  testEnvironment: 'jest-environment-jsdom-fourteen',
  displayName: {
    name: 'SpaceXplorerClient',
    color: 'yellow',
  },
  roots: ['<rootDir>/src'],
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,ts,tsx,jsx,mjs}',
    '<rootDir>/?(*.)(spec|test).{js,jsx,ts,tsx,mjs}',
    '<rootDir>/src/**/__tests__/**/*.{js,ts,tsx,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,ts,tsx,jsx,mjs}',
  ],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!**/node_modules/**'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/app.ts',
    '<rootDir>/src/types',
    '<rootDir>/src/config.ts',
    '<rootDir>/src/core/logger.ts',
    '<rootDir>/src/utils/',
    '<rootDir>/src/api/gql/schema.ts',
  ],
  // TODO: setup coverageThreshold once bug on testing has been fixed
  // coverageThreshold: {
  //   global: {
  //     lines: 90,
  //     statements: 90,
  //   },
  // },
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@storage/(.*)$': '<rootDir>/src/storage/*',
    '^@cache': '<rootDir>/src/storage/cache/cache.ts',
    '^@localStorage': '<rootDir>/src/storage/local/local.ts',
    '^@gqlClient': '<rootDir>/api/gql/GqlClient.ts',
    '^@gqlOps/(.*)$': '<rootDir>/api/gql/__generated__/*',
    '^@restClient': '<rootDir>/api/rest/RestClient.ts',
    '^@schemas': '<rootDir>/api/gql/schemas.ts',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@containers/(.*)$': '<rootDir>/containers/$1',
    '^@assets/(.*)$': '<rootDir>/assets/$1',
    '^@styles': '<rootDir>/styles.ts',
    '^@logger': '<rootDir>/src/core/logger.ts',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
