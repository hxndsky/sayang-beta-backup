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

// COMPONENTS
import ScrollToTop from './components/user/ScrollToTop';

// PAGES
import Home from './pages/user/Home';
import Kegiatan from './pages/user/Kegiatan';
import DetailKegiatan from './pages/user/DetailKegiatan';
import MediaVideo from './pages/user/MediaVideo';
import MediaMajalah from './pages/user/MediaMajalah';
import MediaInfografis from './pages/user/MediaInfografis';
import MediaArtikel from './pages/user/MediaArtikel';
import DataDokter from './pages/user/DataDokter';
import DataPosyandu from './pages/user/DataPosyandu';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Router>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/kegiatan/:slug" element={<DetailKegiatan />} />
            <Route path="/media-informasi/video" element={<MediaVideo />} />
            <Route path="/media-informasi/majalah" element={<MediaMajalah />} />
            <Route path="/media-informasi/infografis" element={<MediaInfografis />} />
            <Route path="/media-informasi/artikel-kesehatan" element={<MediaArtikel />} />
            <Route path="/data/data-dokter" element={<DataDokter />} />
            <Route path="/data/data-posyandu" element={<DataPosyandu />} />
            <Route path="/masuk" element={<Login />} />
            <Route path="/buat-akun" element={<Register />} />
            <Route path="/lupa-katasandi" element={<ForgotPass />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
