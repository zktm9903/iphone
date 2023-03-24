import { createBrowserRouter } from "react-router-dom";
import { IosApp, MessageApp, MusicApp } from "./Apps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IosApp />,
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
