import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SpeciesExplorePage from "./pages/SpeciesExplorePage";
import SpeciesDetailPage from "./pages/SpeciesDetailPage";
import HotspotExplorePage from "./pages/HotspotExplorePage";
import HotspotDetailPage from "./pages/HotspotDetailPage";
import AboutPage from "./pages/AboutPage";
import MainLayout from "./layouts/MainLayout";
import CommunityPage from "./pages/CommunityPage";
import ContributePage from "./pages/ContributePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        {/* Species */}
        <Route path="/species" element={<SpeciesExplorePage />} />
        <Route path="/species/:id" element={<SpeciesDetailPage />} />

        {/* Hotspots */}
        <Route path="/hotspots" element={<HotspotExplorePage />} />
        <Route path="/hotspots/:id" element={<HotspotDetailPage />} />

        {/* Community */}
        <Route path="/community" element={<CommunityPage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Contribute */}
        <Route path="/contribute" element={<ContributePage />} />
      </Route>
    </Routes>
  );
};

export default App;
