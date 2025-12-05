import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SpeciesExplorePage from "./pages/SpeciesExplorePage";
import SpeciesDetailPage from "./pages/SpeciesDetailPage";
import HotspotExplorePage from "./pages/HotspotExplorePage";
import HotspotDetailPage from "./pages/HotspotDetailPage";
import ContributePage from "./pages/ContributePage";
import PhotographerProfilePage from "./pages/PhotographerProfilePage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Species */}
        <Route path="/species" element={<SpeciesExplorePage />} />
        <Route path="/species/:id" element={<SpeciesDetailPage />} />

        {/* Hotspots */}
        <Route path="/hotspots" element={<HotspotExplorePage />} />
        <Route path="/hotspots/:id" element={<HotspotDetailPage />} />

        {/* Contribute */}
        <Route path="/contribute" element={<ContributePage />} />

        {/* Photographer */}
        <Route
          path="/photographers/:id"
          element={<PhotographerProfilePage />}
        />
      </Routes>
    </MainLayout>
  );
};

export default App;
