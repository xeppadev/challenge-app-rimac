import '@testing-library/jest-native/extend-expect';

// Mock React Navigation minimal
jest.mock('@react-navigation/native', () => ({
	useNavigation: () => ({
		navigate: jest.fn(),
		goBack: jest.fn(),
		setOptions: jest.fn(),
	}),
	NavigationContainer: ({ children }) => children,
}));

// Mock react-native-svg
jest.mock('react-native-svg', () => ({
	Svg: 'Svg',
	Circle: 'Circle',
	Path: 'Path',
	G: 'G',
}));

// Mock expo-asset y @expo/vector-icons
jest.mock('expo-asset', () => ({}), { virtual: true });
jest.mock('@expo/vector-icons', () => ({
	Ionicons: 'Ionicons',
	AntDesign: 'AntDesign',
	MaterialIcons: 'MaterialIcons',
}));

// Silence console noise in tests
global.console = {
	...console,
	warn: jest.fn(),
	error: jest.fn(),
};


