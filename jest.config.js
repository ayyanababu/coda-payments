module.exports = {
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.ts$': 'babel-jest',
      '^.+\\.js$': 'babel-jest',
      '.*\\.(png|jpg|jpeg|gif)$': 'jest-transform-stub'
    },
    testMatch: ['**/tests/unit/**/*.spec.(js|ts)|**/__tests__/*.(js|ts)'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    }
  };