
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
import { loader as blurLoader } from "./pages/blur-actions";
import BronsonPage from "./pages/BronsonPage";
import {  loader as bronsonLoader } from "./pages/bronson-actions";
import BullitPage from "./pages/BullitPage";
import { loader as bullitLoader } from "./pages/bullit-actions";
import { loader as  chameleonLoader} from "./pages/chameleon-actions";
import ChameleonPage from "./pages/ChameleonPage";
import Driver8Page from "./pages/Driver8Page";
import {loader as driver8Loader} from "./pages/driver8-actions";
import HecklerPage from "./pages/HecklerPage";
import {loader as heckerLoader} from "./pages/heckler-actions";
import BucherPage from "./pages/BucherPage";
import {loader as butcherLoader} from "./pages/bucher-actions";
import FirstDetailPage from "./pages/FirstDetailPage";
import {loader as firstDetailLoader} from "./pages/first-detail-actions";
import BantamDetailPage from "./pages/BantamDetailPage";
import {loader as bantamDetailLoader} from "./pages/bantamDetail";
import BlurDetailsPage from "./pages/BlurDetailsPage";
import {loader as blurDetailLoader} from "./pages/blurDetail";
import BronsonDetailPage from "./pages/BronsonDetailPage";
import {loader as bronsonDetailLoader} from "./pages/BronsonDetail";
import BullitDetailPage from "./pages/BullitDetailPage";
import {loader as bullitDetailLoader} from "./pages/bullitDetail";
import ButcherDetailPage from "./pages/ButcherDetailPage";
import {loader as butcherDetailLoader} from "./pages/ButcherDetail";
import ChameleonDetailPage from "./pages/ChameleonDetailPage";
import {loader as chameleonDetailLoader} from "./pages/chameleonDetail";
import DriverDetailPage from "./pages/DriverDetailPage";
import {loader as driverDetailLoader} from "./pages/driverDetail";
import HecklerDetailPage from "./pages/HecklerDetailPage";
import {loader as hecklerDetailLoader} from "./pages/hecklerDetail";
import ShopCasualDetailPage from "./pages/ShopCasualDetailPage";
import {loader as shopCasualDetailLoader} from "./pages/shopCasualDetail";
import ShopRidingDetailPage from "./pages/ShopRidingDetailPage";
import {loader as shopRidingDetailLoader} from "./pages/shopRidingDetail";
import CruzBicyclesDetailPage from "./pages/CruzBicyclesDetailPage";
import {loader as cruzBicycleDetailLoader} from "./pages/cruzBicycleDetail";
import ReserveDetailsPage from "./pages/ReserveDetailsPage";
import {loader as reserveDetailLoader} from "./pages/reserveDetail";
import OneupDetailPage from "./pages/OneupDetailPage";
import {loader as oneUpDetailLoader} from "./pages/oneUpDetail";
import Cart from "./components/cart/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Root from "./components/root";
import NotFound from "./Error";

function App() {
 
  const router = createBrowserRouter([
    {path: "/", element: <Root  />,errorElement:<NotFound/>, children:[{ path: "/", element: <HomePage />, loader: homePageActions }, { path: "pages/bike-model", element: <BikeModelsPage />, loader: bikeLoader},
    { path: "pages/juliana-bike-models", element: <JulianaModelsPage />, loader: julianabikeLoader},
    { path: "collections/casual-apparel", element: <ShopCasualPage />, loader:apprelActions},
    { path: "collections/casual-apparel/:casualDetail", element: <ShopCasualDetailPage />, loader:shopCasualDetailLoader},
    { path: "collections/riding-apparel", element: <SHopRidingPage />, loader:ridingLoader},   { path: "collections/riding-apparel/:rideDetail", element: <ShopRidingDetailPage />, loader:shopRidingDetailLoader},
    { path: "collections/santa-cruz-bicycles", element: <CruzBicyclesPage />, loader:cruzBicyclesLoader},
    { path: "collections/santa-cruz-bicycles/:cruzDetail", element: <CruzBicyclesDetailPage />, loader:cruzBicycleDetailLoader},
    { path: "collections/reserve-wheels", element: <ReserveWheelsPage />, loader:reserveWheelsLoader},
    { path: "collections/reserve-wheels/:reserveDetail", element: <ReserveDetailsPage />, loader:reserveDetailLoader},
    { path: "pages/juliana-homepage", element: <JulianaHomePage />, loader:julianaHomeLoader},
    { path: "collections/oneup-components", element: <OneUpPage />, loader:oneUpLoader},
    { path: "collections/oneup-components/:oneUpDetail", element: <OneupDetailPage />, loader:oneUpDetailLoader},
    { path: "collections/first", element: <FirstPartPage />, loader:firstLoader},
    { path: "collections/first/:productDetail", element: <FirstDetailPage />, loader:firstDetailLoader},
    { path: "collections/bantamItems", element: <BantamPage />, loader:bantamLoader},
    { path: "collections/bantamItems/:bantamDetail", element: <BantamDetailPage />, loader:bantamDetailLoader},
    { path: "collections/blur-items", element: <BlurPage />, loader:blurLoader},
    { path: "collections/blur-items/:blurDetail", element: <BlurDetailsPage />, loader:blurDetailLoader},
    { path: "collections/bronson-items", element: <BronsonPage />, loader:bronsonLoader},
    { path: "collections/bronson-items/:bronsonDetail", element: <BronsonDetailPage />, loader:bronsonDetailLoader},
    { path: "collections/bullit-items", element: <BullitPage />, loader:bullitLoader},
    { path: "collections/bullit-items/:bullitDetail", element: <BullitDetailPage />, loader:bullitDetailLoader},
    { path: "collections/chameleon-items", element: <ChameleonPage />, loader:chameleonLoader},
    { path: "collections/chameleon-items/:chameleonDetail", element: <ChameleonDetailPage />, loader:chameleonDetailLoader},
    { path: "collections/driver", element: <Driver8Page />, loader:driver8Loader},
    { path: "collections/driver/:driverDetail", element: <DriverDetailPage />, loader:driverDetailLoader},
    { path: "collections/heckler-items", element: <HecklerPage />, loader:heckerLoader},
    { path: "collections/heckler-items/:hecklerDetail", element: <HecklerDetailPage />, loader:hecklerDetailLoader},
    { path: "collections/butcher-items", element: <BucherPage />, loader:butcherLoader},
    { path: "collections/butcher-items/:butcherDetail", element: <ButcherDetailPage />, loader:butcherDetailLoader},
    { path: "cart", element: <Cart />},]},
    { path: "checkout", element: <CheckoutPage />},
  ]);

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
