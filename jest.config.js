/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src'],
  collectCoverageFrom : ["**/*.{js,jsx}", "!**/node_modules/**", "!**/vendor/**", '!*.d.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['!*.d.ts'],
};
