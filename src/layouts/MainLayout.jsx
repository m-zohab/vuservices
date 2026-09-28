import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import BackToTop from "../components/BackToTop.jsx";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-page">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      {/* key={pathname} remounts <main> on every navigation, replaying the
          page-enter animation — one clear "new page" moment per route. */}
      <main key={location.pathname} className="page-enter flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
