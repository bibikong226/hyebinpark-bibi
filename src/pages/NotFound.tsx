import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { MacWindow } from "@/components/MacWindow";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <MacWindow title="error-404" className="max-w-md w-full">
          <div className="text-center p-10 space-y-4">
            <h1 className="text-5xl font-black text-white">404</h1>
            <p className="text-lg text-white/50">Oops! Page not found</p>
            <a
              href="/"
              className="inline-block px-6 py-2.5 bg-indigo-500 text-white rounded-full hover:bg-indigo-400 transition-colors font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Return to Home
            </a>
          </div>
        </MacWindow>
      </div>
    </Layout>
  );
};

export default NotFound;
