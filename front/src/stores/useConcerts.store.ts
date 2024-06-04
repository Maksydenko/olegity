import { create } from "zustand";

import { IConcert } from "@/interfaces/concert.interface";

interface IUseConcertsStore {
  concerts: IConcert[];
  setConcerts: (concerts: IConcert[]) => void;
}

const useConcertsStore = create<IUseConcertsStore>((set) => ({
  concerts: [],
  setConcerts: (concerts) => set({ concerts }),
}));

export default useConcertsStore;
