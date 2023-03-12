/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  coverageDirectory: '<rootDir>/coverage/',

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    //     '!*d.ts',
  ],
  coveragePathIgnorePatterns: ['/node_modules/',
  //  '*.d.ts'
  ],
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],

};
