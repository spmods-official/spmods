import Navbar from "@/views/layout/Navbar";
import Footer from "@/views/layout/Footer";
import Sidebar from "@/views/layout/Sidebar";
import MobileSidebar from "@/views/layout/MobileSidebar";
import useColorScheme from "@/views/hooks/useColorScheme";
import useMediaQuery from "@/views/hooks/useMediaQuery";
import type { FC, PropsWithChildren } from "react";

const App: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useColorScheme();
  return (
    <div className="flex flex-col min-h-screen w-full h-full overflow-x-hidden">
      <Navbar />

      <div className={`flex grow ${isMobile ? "flex-col" : ""}`}>
        <div className="flex-shrink-0">
          {isMobile ? <MobileSidebar /> : <Sidebar />}
        </div>

        <main className={`grow bg-background ${isMobile ? "p-4" : ""}`}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
