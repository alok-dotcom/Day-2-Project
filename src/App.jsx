import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;
