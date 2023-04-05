import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Book from "./pages/Book";
import BookContent from "./pages/BookContent";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Browse from "./pages/Browse";
import Ranking from "./pages/Ranking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bookcontent" element={<BookContent />} />
        <Route path="/Browse/buku/pertanian" element={<Browse />} />
        <Route path="/Ranking" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
