import {
  HashRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

import Layout from "./pages/Layout";
import Loading from "./pages/Loading";
import HomePage from "./pages/Home";
import WalletPage from "./pages/WalletPage";
import BonusPage from "./pages/Bonus";
import StoreLayout from "./pages/Store";
import StorePlayers from "./pages/StorePlayers";
import StoreBalls from "./pages/StoreBalls";
import WalletLayout from "./pages/WalletLayout";
import History from "./pages/History";
import CountrySelect from "./pages/CountrySelect";
import CryptoSelect from "./pages/CryptoSelect";
import Withdraw from "./pages/Withdraw";
import {
  getAllBalls,
  getAllPlayers,
  getBoughtBalls,
  getBoughtPlayers,
  getUserInfo,
  TG_ID,
} from "./util/back/requests";
import { useDispatch } from "react-redux";
import { setUser } from "./store/auth-slice";
import { setStatic } from "./store/static-slice";
import WithdrawSecond from "./pages/WithdrawSecond";

function App() {
  const dispatch = useDispatch();
  const FallbackNavigate = ({ to }) => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    }, [to, navigate]);
    return null;
  };

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();

    const fetchData = async () => {
      const user = await getUserInfo(TG_ID);
      const balls = await getAllBalls();
      const players = await getAllPlayers();
      const boughtPlayers = await getBoughtPlayers(TG_ID);
      const boughtBalls = await getBoughtBalls(TG_ID);
      if (user && balls && players && boughtPlayers && boughtBalls) {
        dispatch(setUser(user));
        dispatch(
          setStatic({
            balls: balls,
            players: players,
            boughtPlayers: boughtPlayers,
            boughtBalls: boughtBalls,
          }),
        );
      }
    };
    fetchData();
    // if (WebApp.platform !== "weba") {

    // } else {
    //   window.location.href = "https://telegram.org/";
    // }
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Loading />} />
        <Route path="/menu" element={<Layout />}>
          <Route index element={<FallbackNavigate to="/menu/home" />} />
          <Route path="/menu/home" element={<HomePage />} />
          <Route path="/menu/store" element={<StoreLayout />}>
            <Route
              index
              element={<FallbackNavigate to="/menu/store/players" />}
            />
            <Route path="/menu/store/players" element={<StorePlayers />} />
            <Route path="/menu/store/balls" element={<StoreBalls />} />
          </Route>
          <Route path="/menu/wallet" element={<WalletLayout />}>
            <Route index element={<WalletPage />} />
            <Route path="/menu/wallet/history" element={<History />} />
            <Route
              path="/menu/wallet/country-select"
              element={<CountrySelect />}
            />
            <Route
              path="/menu/wallet/crypto-select"
              element={<CryptoSelect />}
            />
            <Route path="/menu/wallet/withdraw" element={<Withdraw />} />
            <Route
              path="/menu/wallet/withdraw-second"
              element={<WithdrawSecond />}
            />
          </Route>
          <Route path="/menu/bonus" element={<BonusPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
