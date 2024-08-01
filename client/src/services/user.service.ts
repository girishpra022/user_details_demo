const baseUrl = import.meta.env.VITE_API_URL;

export const userAPI = {
  getAll: {
    url: `${baseUrl}/users`,
  },
  createUser: {
    url: `${baseUrl}/users`,
  },
};
