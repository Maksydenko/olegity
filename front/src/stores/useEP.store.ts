import { create } from "zustand";

import { IAlbum } from "@/interfaces/music.interface";

interface IUseEPStore {
  ep: IAlbum[];
  setEP: (ep: IAlbum[]) => void;
}

const useEPStore = create<IUseEPStore>((set) => ({
  ep: [],
  setEP: (ep) => set({ ep }),
}));

export default useEPStore;
