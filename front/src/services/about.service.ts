import axiosInstance from "./axiosInstance";

export const AboutService = {
  getAbout: async () => {
    const response = await axiosInstance.get(`/about/list/0`);
    const { data: result } = response;

    return result;
  },
};
