export default {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/tests'],
  //preset: 'ts-jest/presets/default-esm',
  testMatch: ['**/__tests__/**/*.(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).(ts|tsx|js|jsx)'],
  transform: {
    //'^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '(.+)\\.(ts|tsx|js|jsx)$': '$1',
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
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'cobertura'],
};
