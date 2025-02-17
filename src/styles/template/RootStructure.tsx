import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar/NavBar";

const RootStructure: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <NavBar />
                { children }
            <Footer />       
        </div>
    )
}

export default RootStructure;