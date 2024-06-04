import { create } from "zustand";

import { IAlbum, ISingles } from "@/interfaces/music.interface";

interface IUseMusicStore {
  albums: IAlbum[];
  setAlbums: (albums: IAlbum[]) => void;
  ep: IAlbum[];
  setEP: (ep: IAlbum[]) => void;
  singles: ISingles;
  setSingles: (singles: ISingles) => void;
}

const useMusicStore = create<IUseMusicStore>((set) => ({
  albums: [],
  setAlbums: (albums) => set({ albums }),
  ep: [],
  setEP: (ep) => set({ ep }),
  singles: {
    singles: [],
    maxPageID: Infinity,
  },
  setSingles: (singles) => set({ singles }),
}));

export default useMusicStore;
