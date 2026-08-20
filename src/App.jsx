import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./routes/ScrollToTop";
import { BookingProvider } from "./context/BookingContext";

function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <ScrollToTop />
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <BookingModal />
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
