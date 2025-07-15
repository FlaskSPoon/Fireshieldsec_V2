import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient } from '../utils';


export const useAticle = (categoryId = null) => {
  const createArticle=useMutation({
    mutationFn:(newArticle)=>apiClient.post('/article',newArticle),
    onSuccess:()=>{
        queryClient.invalidateQueries(['article'])
    },
  });

const createCatArticle=useMutation({
    mutationFn:(newsCategory)=>apiClient.post('/catarticle',newsCategory),
    onSuccess:()=>{
        queryClient.invalidateQueries(['catarticle']);
    }
})

  const {
    data: article = [],
    isLoading,
    error: articleError,
  } = useQuery({
    queryKey: categoryId ? ['article', categoryId] : ['article'],
    queryFn: () =>
      categoryId
        ? apiClient.getAll(`/article/by-category/${categoryId}`)
        : apiClient.getAll('/article'),
    enabled: true,
  });

  // Toutes les catégories
  const {
    data: CategoryArticle = [],
    isLoading: isLoadingCategories,
    error: categoryError,
  } = useQuery({
    queryKey: ['catarticle'],
    queryFn: () => apiClient.getAll('/catarticle'),
  });

  return {
    createArticle,
    createCatArticle,
    article,
    CategoryArticle,
    isLoading,
    isLoadingCategories,
    articleError,
    categoryError,
  };
};
