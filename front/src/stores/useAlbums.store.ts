import { create } from "zustand";

import { IAlbum } from "@/interfaces/music.interface";

interface IUseAlbumsStore {
  albums: IAlbum[];
  setAlbums: (albums: IAlbum[]) => void;
}

const useAlbumsStore = create<IUseAlbumsStore>((set) => ({
  albums: [],
  setAlbums: (albums) => set({ albums }),
}));

export default useAlbumsStore;
