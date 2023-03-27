import { createBrowserRouter } from "react-router-dom";
import { CameraApp, IosApp, MessageApp, MusicApp } from "./apps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IosApp />,
  },
  {
    path: "/camera",
    element: <CameraApp />,
  },
  {
    path: "/message",
    element: <MessageApp />,
  },
  {
    path: "/music",
    element: <MusicApp />,
  },
]);

export default router;
