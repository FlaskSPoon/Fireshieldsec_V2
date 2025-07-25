import axiosInstance from './axiosInstance';


const apiClient = {
  getAll: async (endpoint) => {
    try {
      const response = await axiosInstance.get(endpoint);
      return response.data;
    } catch (error){
      console.error("Erreur lors de l'appel à", endpoint, error);
      throw error;
    }
  },
  getOne: async (endpoint, id) => {
    try {
      const response = await axios.get(`${baseURL}${endpoint}/${id}`);
      return response;
    } catch (error) {
      console.error(`Erreur lors de l'appel à ${endpoint}:`, error);
      throw error;
    }
  },

  getById: async (endpoint, id) => {
    const controller = new AbortController();

    try {
      const response = await axiosInstance.get(`${endpoint}/${id}`, {
        signal: controller.signal,
      });
      return response.data;
    } catch (error) {
      throw error;
    } 
  },

  // create: async (endpoint, payload) => {
  //   const isFormData = payload instanceof FormData;

  //   const response = await axiosInstance.post(endpoint, payload, {
  //     headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : undefined,
  //   });

  //   return response.data;
  // },

  // deleteById: async (endpoint) => {
  //   const controller = new AbortController();

  //   try {
  //     const response = await axiosInstance.delete(endpoint, {
  //       signal: controller.signal,
  //     });

  //     return response.data;
  //   } catch (error) {
  //     throw error;
  //   } finally {
  //     controller.abort();
  //   }
  // },

  // post: async (endpoint, payload) => {
  //   const isFormData = payload instanceof FormData;

  //   const response = await axiosInstance.post(endpoint, payload, {
  //     headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : undefined,
  //   });

  //   return response.data;
  // },

  // update: async (endpoint, payload) => {
  //   const isFormData = payload instanceof FormData;

  //   const response = await axiosInstance.put(endpoint, payload, {
  //     headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : undefined,
  //   });

  //   return response.data;
  // },

  // patch: async (endpoint, payload) => {
  //   const isFormData = payload instanceof FormData;

  //   const response = await axiosInstance.patch(endpoint, payload, {
  //     headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : undefined,
  //   });

  //   return response.data;
  // },
};

export default apiClient;
