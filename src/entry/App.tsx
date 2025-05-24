import Navbar from "@/views/layout/Navbar";
import Footer from "@/views/layout/Footer";

import useThemeEffect from "@/views/hooks/useThemeEffect";
import type { FC, PropsWithChildren } from "react";

const App: FC<PropsWithChildren> = ({ children }) => {
  useThemeEffect();
  return (
    <div className="flex flex-col min-h-[100vh] w-full h-full">
      <Navbar />

      <main className="grow bg-background">{children}</main>

      <Footer />
    </div>
  );
};

export default App;
