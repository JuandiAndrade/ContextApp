import { create } from "zustand";

export interface ProfileState {
    name: string,
    email: string,

    changeProfile: (name: string, email: string) => void;

}

// se ve extraño pero en react native se hace asi, esta en la documentación
export const useProfileStore = create<ProfileState>()((set, get) => ({

    name: 'John Doe',
    email: 'john.doe@google.com',
    changeProfile: (name: string, email: string) => {
        // set({ name: name, email: email })
        console.log("este es el get", get())
        set({ name, email });
    }

}));