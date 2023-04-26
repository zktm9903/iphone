import { atom } from "recoil";

export const flashlightState = atom({
  key: "flashlightState",
  default: false,
});

export const albumState = atom<string[]>({
  key: "albumState",
  default: [],
});

export const isCarrierState = atom({
  key: "isCarrierState",
  default: true,
});

export const onPasswordScreenState = atom({
  key: "onPasswordScreenState",
  default: false,
});
