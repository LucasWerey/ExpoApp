import { atom, createStore } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = createJSONStorage(() => AsyncStorage);

export const store = createStore();

export const countAtom = atom(0);

export const themeModeAtom = atomWithStorage("themeMode", "light", storage);
