import Navbar from "@/views/layout/Navbar"
import Footer from "@/views/layout/Footer"
import PageRoutes from "@/views/routes/Routes"

import { BrowserRouter as Router } from "react-router-dom";

export default function App() {

    return (
        <div className="flex flex-col min-h-[100vh] w-full h-full">

            <Navbar />

            <Router>
                <main className="grow bg-background">
                    <PageRoutes />
                </main>
            </Router>

            <Footer />
        </div>
    )
}

