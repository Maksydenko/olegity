import axiosInstance from "./axiosInstance";

export const VideosService = {
  getMusicVideos: async () => {
    const response = await axiosInstance.get(`/music_videos/list/0`);
    const { data: result } = response;

    return result;
  },
  getAnimatedVideos: async () => {
    const response = await axiosInstance.get(`/animated_videos/list/0`);
    const { data: result } = response;

    return result;
  },
};
