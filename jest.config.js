module.exports = {
	preset: 'jest-expo',
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.d.ts',
		'!src/**/__tests__/**',
		'!src/**/*.test.{ts,tsx}',
		'!src/**/*.spec.{ts,tsx}',
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov', 'html'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.expo/'],
	transformIgnorePatterns: [
		'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|react-native-svg)'
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	testMatch: [
		'<rootDir>/__tests__/**/*.(test|spec).(ts|tsx|js)',
		'<rootDir>/src/**/__tests__/**/*.(test|spec).(ts|tsx|js)',
	],
};


