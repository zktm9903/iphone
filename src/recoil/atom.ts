import { atom } from "recoil";

export const flashlightState = atom({
  key: "flashlightState",
  default: false,
});

export const albumState = atom<string[]>({
  key: "albumState",
  default: [],
});
