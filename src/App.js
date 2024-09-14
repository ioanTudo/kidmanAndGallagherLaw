import { AboutPage } from "./pages/about/about";
import { AttorneysPage } from "./pages/attorneys/attorneys";
import { PracticeAreasPage } from "./pages/practiceAreas/practiceAreas";
import { HomePage } from "./pages/home/home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { TestimonialsPage } from "./pages/testimonials/testimonials";
import { CommunityActivityPage } from "./pages/communityActivity/communityActivity";
import { ContactPage } from "./pages/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/attorneys" element={<AttorneysPage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/community-activity" element={<CommunityActivityPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
