import { useQuery } from '@tanstack/react-query';

const usePostCount = (userId) => {
  return useQuery({
    queryKey: ['usersPostCount', userId],
    queryFn: async () => {
      const response = await fetch(`/api/users/${userId}/posts/count`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });
};

export default usePostCount;
