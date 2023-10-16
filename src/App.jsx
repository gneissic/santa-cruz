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
import CruzBicyclesPage from "./pages/CruzBicyclesPage";
import { loader as cruzBicyclesLoader } from "./pages/cruz-bicycles-actions";
import ReserveWheelsPage from "./pages/ReserveWheelsPage";
import {loader as reserveWheelsLoader  } from "./pages/resereve-wheels-actions";
import JulianaHomePage from "./pages/JulianaHomePage";
import { loader as julianaHomeLoader } from "./pages/juliana-home-actions";
import OneUpPage from "./pages/OneUpPage";
import { loader as oneUpLoader } from "./pages/oneUp-actions";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage />, loader: homePageActions },
    { path: "pages/bike-model", element: <BikeModelsPage />, loader: bikeLoader},
    { path: "pages/juliana-bike-models", element: <JulianaModelsPage />, loader: julianabikeLoader},
    { path: "collections/casual-apparel", element: <ShopCasualPage />, loader:apprelActions},
    { path: "collections/riding-apparel", element: <SHopRidingPage />, loader:ridingLoader},
    { path: "collections/santa-cruz-bicycles", element: <CruzBicyclesPage />, loader:cruzBicyclesLoader},
    { path: "collections/reserve-wheels", element: <ReserveWheelsPage />, loader:reserveWheelsLoader},
    { path: "pages/juliana-homepage", element: <JulianaHomePage />, loader:julianaHomeLoader},
    { path: "collections/oneup-components", element: <OneUpPage />, loader:oneUpLoader},
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
