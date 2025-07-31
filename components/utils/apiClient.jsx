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


  post:async(endpoint, payload)=>{
    const isFormData=payload instanceof FormData;
    const response=await axiosInstance.post(endpoint, payload,{
      headers:isFormData ? { 'Content-Type': 'multipart/form-data' } : undefined,
    });
    return response.data;
  },


toggleVisibility: async (id) => {
  try {
    const response = await axiosInstance.patch(`/comment/${id}/toggle-visibility`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors du changement de statut :", error);
    throw error;
  }
},

subscribeToNewsletter: async (payload) => {
  try {
    const response = await axiosInstance.post("/newlettre", payload);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de l'inscription à la newsletter :", error);
    throw error;
  }
}





















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
