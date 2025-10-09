import React from 'react';
import { PlansScreen } from '@/features/onboarding/presentation/screens/PlansScreen';
import { fireEvent, renderWithProviders, screen, waitFor } from '../utils/test-utils';

// Mock hooks to control data
jest.mock('@/features/onboarding/presentation/hooks/useUser', () => ({
	useUser: () => ({ data: { id: '1', name: 'Juan', birthDay: '1990-01-01' }, isLoading: false }),
}));

jest.mock('@/features/onboarding/presentation/hooks/usePlans', () => ({
	usePlansByAge: () => ({
		data: [
			{ id: 'p1', name: 'Plan Básico', age: 60, price: 100, description: ['Cobertura A'] },
			{ id: 'p2', name: 'Plan Premium', age: 60, price: 200, description: ['Cobertura B'] },
		],
		isLoading: false,
		error: null,
	}),
}));

describe('PlansScreen', () => {
	it('muestra planes y permite seleccionar uno', async () => {
		renderWithProviders(<PlansScreen />);

		// Verifica títulos
		expect(await screen.findByText('Elige tu plan ideal')).toBeTruthy();
		expect(screen.getByText('Plan Básico')).toBeTruthy();
		expect(screen.getByText('Plan Premium')).toBeTruthy();

		// Cambiar a "Para alguien más" para activar descuento
		fireEvent.press(screen.getByText('Para alguien más'));

		// Seleccionar plan
		fireEvent.press(screen.getByText('Plan Básico'));

		// No hay navegación real, pero al menos no debe crashear
		await waitFor(() => {
			expect(screen.getByText('Elige tu plan ideal')).toBeTruthy();
		});
	});
});


