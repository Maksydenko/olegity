import axiosInstance from "./axiosInstance";

export const ConcertsService = {
  getConcerts: async () => {
    const response = await axiosInstance.get(`/concerts/list/0`);
    const { data: result } = response;

    return result;
  },
};
