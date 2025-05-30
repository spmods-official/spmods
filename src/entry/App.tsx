import Navbar from "@/views/layout/Navbar";
import Footer from "@/views/layout/Footer";
import Sidebar from "@/views/layout/Sidebar";

import useThemeEffect from "@/views/hooks/useThemeEffect";
import type { FC, PropsWithChildren } from "react";

const App: FC<PropsWithChildren> = ({ children }) => {
  useThemeEffect();
  return (
    <div className="flex flex-col min-h-[100vh] w-full h-full">
      <Navbar />

      <div className="flex grow">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <main className="grow bg-background">{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default App;
