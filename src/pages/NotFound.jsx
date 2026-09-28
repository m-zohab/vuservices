import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The page you're looking for doesn't exist."
      />
      <section className="flex min-h-[60vh] items-center bg-page py-20">
        <div className="section-container text-center">
          <p className="animate-float font-display text-7xl font-bold text-brand/30">
            404
          </p>
          <h1 className="mt-4 text-2xl font-bold text-heading sm:text-3xl">
            This page wandered off somewhere
          </h1>
          <p className="mt-3 text-body">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link to="/" className="btn-primary mt-8">
            <Home size={16} />
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
