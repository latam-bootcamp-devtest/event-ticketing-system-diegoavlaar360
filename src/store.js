import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useEventStore = create(persist((set) => ({
    idEvent: 0,
    verifyIdEvent: (id) => {
        console.log(id)
        set(() => ({
            idEvent: id
        }))
    },
}), {
    name: 'event-storage'
}))