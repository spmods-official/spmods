import Navbar from "@/views/layout/Navbar";
import Footer from "@/views/layout/Footer";
import Sidebar from "@/views/layout/Sidebar";

import useColorScheme from "@/views/hooks/useColorScheme";
import type { FC, PropsWithChildren } from "react";

const App: FC<PropsWithChildren> = ({ children }) => {
  useColorScheme();
  return (
    <div className="flex flex-col min-h-screen w-full h-full">
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
