export default {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  //preset: 'ts-jest/presets/default-esm',
  transform: {
    //'^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '(.+)\\.js$': '$1',
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports/jest',
        outputName: 'junit-test-results.xml',
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'cobertura'],
};
