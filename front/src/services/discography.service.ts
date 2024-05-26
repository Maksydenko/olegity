import axiosInstance from "./axiosInstance";

export const DiscographyService = {
  getAlbums: async () => {
    const response = await axiosInstance.get(`/album/list/0`);
    const { data: result } = response;

    return result;
  },
  getEP: async () => {
    const response = await axiosInstance.get(`/ep/list/0`);
    const { data: result } = response;

    return result;
  },
  getSingles: async (page = 0) => {
    const response = await axiosInstance.get(`/singles/list/${page}`);
    const { data: result } = response;

    return result;
  },
};
