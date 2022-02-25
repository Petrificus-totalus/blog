import Home from "./Home";
import Detail from "./views";

import Cube from "./views/Cube/cube";
import NeonText from "./views/NeonText/neontext";
import GlassyCard from "./views/GlassyCard/glassycard";
import EmojiRate from "./views/EmojiRate/emojirate";
import FlexibleSearch from "./views/FlexibleSearch/flexiblesearch";
import Moonlight from "./views/Moonlight/moonlight";
import Shadows from "./views/Shadows/shadows";
import SmokeText from "./views/SmokeText/smoketext";

import { Navigate, useRoutes } from "react-router-dom";

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
