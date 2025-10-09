import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RenderOptions, render } from '@testing-library/react-native';
import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

const createTestQueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: { retry: false },
		},
	});

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const client = createTestQueryClient();
	return (
		<QueryClientProvider client={client}>
			<SafeAreaProvider initialMetrics={initialWindowMetrics || { frame: { x: 0, y: 0, width: 0, height: 0 }, insets: { top: 0, left: 0, right: 0, bottom: 0 } }}>
				<NavigationContainer>{children}</NavigationContainer>
			</SafeAreaProvider>
		</QueryClientProvider>
	);
};

export const renderWithProviders = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react-native';

