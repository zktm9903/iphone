import { atom } from "recoil";

export const flashlightState = atom({
  key: "flashlightState",
  default: false,
});

export const albumState = atom<string[]>({
  key: "albumState",
  default: [],
});

export const needCarrierState = atom({
  key: "needCarrierState",
  default: true,
});

export const needPwState = atom({
  key: "needPwState",
  default: true,
});

export const onPasswordScreenState = atom({
  key: "onPasswordScreenState",
  default: false,
});

export const hideTimeFlashCameraState = atom({
  key: "hideTimeFlashCameraState",
  default: false,
});
