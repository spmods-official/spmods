import Navbar from "@/views/layout/Navbar";
import Footer from "@/views/layout/Footer";
import PageRoutes from "@/views/routes/Routes";

import { BrowserRouter as Router } from "react-router";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-[100vh] w-full h-full">
        <Navbar />

        <main className="grow bg-background">
          <PageRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}
