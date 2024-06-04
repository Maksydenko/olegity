import { create } from "zustand";

import { IMusicVideo } from "@/interfaces/musicVideo.interface";

interface IUseVideosStore {
  musicVideos: IMusicVideo[];
  setMusicVideos: (albums: IMusicVideo[]) => void;
  animatedVideos: IMusicVideo[];
  setAnimatedVideos: (ep: IMusicVideo[]) => void;
}

const useVideosStore = create<IUseVideosStore>((set) => ({
  musicVideos: [],
  setMusicVideos: (musicVideos) => set({ musicVideos }),
  animatedVideos: [],
  setAnimatedVideos: (animatedVideos) => set({ animatedVideos }),
}));

export default useVideosStore;
