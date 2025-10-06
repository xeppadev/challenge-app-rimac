// This file is deprecated. Use the new clean architecture instead:
// - For User operations: use features/onboarding/presentation/hooks/useUser
// - For Plan operations: use features/onboarding/presentation/hooks/usePlans
// - For API client: use shared/infrastructure/api/client

// Re-export for backward compatibility (will be removed in future versions)
export { ApiError } from './api/ApiError';
export { ApiClient } from './api/client';

