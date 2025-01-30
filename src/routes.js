import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BasePage from "./pages/BasePage";
import ShirtPage from "./pages/ProductPage/ShirtPage";
import PantsPage from "./pages/ProductPage/PantsPage";
import ShortsPage from "./pages/ProductPage/ShortsPage";
import SweatshirtPgBody from "./components/SwaetshirtPgBody";
import SearchPage from "./pages/ProductPage/SearchPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Camisetas" element={<ShirtPage />} />
          <Route path="/Calcas" element={<PantsPage />} />
          <Route path="/Shorts" element={<ShortsPage />} />
          <Route path="/Moletons" element={<SweatshirtPgBody />} />
          <Route path="/ResultadoPesquisa" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
