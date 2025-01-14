module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '.*\\.e2e\\.spec\\.ts$',
    '.*\\.functional\\.spec\\.ts$',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/app/$1',
    '^@env/(.*)$': '<rootDir>/src/environments/$1',
  },
  globalSetup: 'jest-preset-angular/global-setup'
}
