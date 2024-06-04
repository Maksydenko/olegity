import { create } from "zustand";

import { IAbout } from "@/interfaces/about.interface";

interface IUseAboutStore {
  about: IAbout[];
  setAbout: (about: IAbout[]) => void;
}

const useAboutStore = create<IUseAboutStore>((set) => ({
  about: [],
  setAbout: (about) => set({ about }),
}));

export default useAboutStore;
