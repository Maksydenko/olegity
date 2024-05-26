import { create } from "zustand";

import { IAlbum } from "@/interfaces/music.interface";

interface IUseSinglesStore {
  singles: IAlbum[];
  setSingles: (singles: IAlbum[]) => void;
}

const useSinglesStore = create<IUseSinglesStore>((set) => ({
  singles: [],
  setSingles: (singles) => set({ singles }),
}));

export default useSinglesStore;
