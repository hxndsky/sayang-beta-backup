//import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// AUTH
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPass from './auth/ForgotPass';

// PAGES
import Home from './pages/user/Home';
import MediaVideo from './pages/user/MediaVideo';
import MediaMajalah from './pages/user/MediaMajalah';
import MediaInfografis from './pages/user/MediaInfografis';
import MediaArtikel from './pages/user/MediaArtikel';
import DataDokter from './pages/user/DataDokter';
import DataPosyandu from './pages/user/DataPosyandu';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: true, // animasi hanya terjadi sekali saat scroll
    });
  }, []);

  return (
    <>
      <Router>
        <div className="app-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/media/1" element={<MediaVideo />} />
            <Route path="/media/2" element={<MediaMajalah />} />
            <Route path="/media/3" element={<MediaInfografis />} />
            <Route path="/media/4" element={<MediaArtikel />} />
            <Route path="/data/1" element={<DataDokter />} />
            <Route path="/data/2" element={<DataPosyandu />} />
            <Route path="/masuk" element={<Login />} />
            <Route path="/buat-akun" element={<Register />} />
            <Route path="/lupa-katasandi" element={<ForgotPass />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
