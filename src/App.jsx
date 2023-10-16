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
import { loader as firstLoader } from "./pages/first-actions";
import FirstPartPage from "./pages/FirstPartPage";
import BantamPage from "./pages/BantamPage";
import {loader as bantamLoader  } from "./pages/bantam-actions";
import BlurPage from "./pages/BlurPage";
import { loader as blurActions } from "./pages/blur-actions";
import BronsonPage from "./pages/BronsonPage";
import {  loader as loaderActions } from "./pages/bronson-actions";
import BullitPage from "./pages/BullitPage";
import { loader as bullitLoader } from "./pages/bullit-actions";
import { loader as  chameleonLoader} from "./pages/chameleon-actions";
import ChameleonPage from "./pages/ChameleonPage";

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
    { path: "collections/oneup-components", element: <FirstPartPage />, loader:firstLoader},
    { path: "collections/oneup-components", element: <BantamPage />, loader:bantamLoader},
    { path: "collections/oneup-components", element: <BlurPage />, loader:blurActions},
    { path: "collections/oneup-components", element: <BronsonPage />, loader:loaderActions},
    { path: "collections/oneup-components", element: <BullitPage />, loader:bullitLoader},
    { path: "collections/oneup-components", element: <ChameleonPage />, loader:chameleonLoader},
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
