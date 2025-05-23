import Navbar from "@/views/layout/Navbar"
import Footer from "@/views/layout/Footer"

export default function App() {

    return (
        <div className="flex flex-col min-h-[100vh] w-full h-full">

            <Navbar />

            <div className='w-full bg-background text-content'>Hello SPMods</div>
            <div className='w-full bg-accent text-text'>Hello SPMods</div>

            <Footer />
        </div>
    )
}

