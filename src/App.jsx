import { Route, Routes } from "react-router-dom";

import LoginModal from "./components/auth/LoginModal";
import HomePage from "./pages/HomePage";
import SpeciesExplorePage from "./pages/SpeciesExplorePage";
import SpeciesDetailPage from "./pages/SpeciesDetailPage";
import HotspotExplorePage from "./pages/HotspotExplorePage";
import HotspotDetailPage from "./pages/HotspotDetailPage";
import AboutPage from "./pages/AboutPage";
import MainLayout from "./layouts/MainLayout";
import CommunityPage from "./pages/CommunityPage";
import ContributePage from "./pages/ContributePage";
import ChecklistPage from "./pages/ChecklistPage";
import BlogPage from "./pages/BlogPage";
import ProfilePage from "./pages/ProfilePage";
import PhotographerProfilePage from "./pages/PhotographerProfilePage";

import ProtectedRoute from "./components/ProtectedRoute";
import ObservationPage from "./pages/ObservationPage";

const App = () => {
  return (
    <>
      {/* Login */}
      <LoginModal />

      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}

        {/* Main */}
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
          <Route
            path="/contribute"
            element={
              <ProtectedRoute>
                <ContributePage />
              </ProtectedRoute>
            }
          />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />

          {/* Observation */}
          <Route
            path="/observation"
            element={
              <ProtectedRoute>
                <ObservationPage />
              </ProtectedRoute>
            }
          />

          {/* Checklist */}
          <Route
            path="/checklist/:id"
            element={
              <ProtectedRoute>
                <ChecklistPage />
              </ProtectedRoute>
            }
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/photographers/:id"
            element={
              <ProtectedRoute>
                <PhotographerProfilePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
