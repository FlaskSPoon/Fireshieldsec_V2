import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../utils';

export const useServicesByCategory = (categoryName) => {
  return useQuery({
    queryKey: ['services', categoryName],
    queryFn: () => apiClient.getAll(`/services/by-category/${categoryName}`),
    enabled: !!categoryName,
  });
};
