import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CameraApp, IosApp, MessageApp, MusicApp } from "./apps";

const router = createBrowserRouter([
  {
    path: "/iphone",
    element: <IosApp />,
  },
  {
    path: "/iphone/camera",
    element: <CameraApp />,
  },
  {
    path: "/iphone/message",
    element: <MessageApp />,
  },
  {
    path: "/iphone/music",
    element: <MusicApp />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
