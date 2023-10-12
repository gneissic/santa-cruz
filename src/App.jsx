import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { loader as homePageActions } from "./pages/home-actions";
import BikeModelsPage from "./pages/BikeModelsPage";
import { loader as bikeLoader} from "./pages/bike-actions";
import JulianaModelsPage from "./pages/JulianaModelsPage";
import { loader as julianabikeLoader } from "./pages/juliana-bike-model";
import ShopCasualPage from "./pages/ShopCasualPage";
import { loader as apprelActions } from "./pages/apparel-actions";
import { loader as ridingLoader } from "./pages/shop-riding-actions";
import SHopRidingPage from "./pages/SHopRidingPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage />, loader: homePageActions },
    { path: "pages/bike-model", element: <BikeModelsPage />, loader: bikeLoader},
    { path: "pages/juliana-bike-models", element: <JulianaModelsPage />, loader: julianabikeLoader},
    { path: "collections/casual-apparel", element: <ShopCasualPage />, loader:apprelActions},
    { path: "collections/riding-apparel", element: <SHopRidingPage />, loader:ridingLoader},
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
