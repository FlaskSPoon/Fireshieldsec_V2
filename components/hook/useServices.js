import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../utils';

export const useServices = (categoryId = null) => {
  // Tous les services
  const {
    data: services = [],
    isLoading,
    error: servicesError,
  } = useQuery({
    queryKey: categoryId ? ['services', categoryId] : ['services'],
    queryFn: () =>
      categoryId
        ? apiClient.getAll(`/services/by-category/${categoryId}`)
        : apiClient.getAll('/services'),
    enabled: true,
  });

  // Toutes les catégories
  const {
    data: Categoryservice = [],
    isLoading: isLoadingCategories,
    error: categoryError,
  } = useQuery({
    queryKey: ['cateservice'],
    queryFn: () => apiClient.getAll('/cateservice'),
  });

  return {
    services,
    Categoryservice,
    isLoading,
    isLoadingCategories,
    servicesError,
    categoryError,
  };
};
