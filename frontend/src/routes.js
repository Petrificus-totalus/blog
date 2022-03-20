import Home from "./Home";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Detail = lazy(() => import("./views"));
const Cube = lazy(() => import("./views/Cube/cube"));
const NeonText = lazy(() => import("./views/NeonText/neontext"));
const GlassyCard = lazy(() => import("./views/GlassyCard/glassycard"));
const EmojiRate = lazy(() => import("./views/EmojiRate/emojirate"));
const FlexibleSearch = lazy(() =>
  import("./views/FlexibleSearch/flexiblesearch")
);
const Moonlight = lazy(() => import("./views/Moonlight/moonlight"));
const Shadows = lazy(() => import("./views/Shadows/shadows"));
const SmokeText = lazy(() => import("./views/SmokeText/smoketext"));

export default function App() {
  return useRoutes([
    { path: "/home", element: <Home /> },
    {
      path: "/detail",
      element: <Detail />,
      children: [
        {
          path: "Cube",
          element: <Cube />,
        },
        { path: "NeonText", element: <NeonText /> },
        { path: "GlassyCard", element: <GlassyCard /> },
        { path: "EmojiRate", element: <EmojiRate /> },
        { path: "FlexibleSearch", element: <FlexibleSearch /> },
        { path: "Moonlight", element: <Moonlight /> },
        { path: "Shadows", element: <Shadows /> },
        { path: "SmokeText", element: <SmokeText /> },
      ],
    },

    { path: "/", element: <Navigate to="/home" /> },
  ]);
}
