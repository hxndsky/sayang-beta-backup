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
// KEGIATAN
import Kegiatan from './pages/user/Kegiatan';
import DetailKegiatan from './pages/user/DetailKegiatan';
// MEDIA INFORMASI
import MediaVideo from './pages/user/MediaVideo';
import MediaMajalah from './pages/user/MediaMajalah';
import DetailMajalah from './pages/user/DetailMajalah';
import MediaInfografis from './pages/user/MediaInfografis';
import MediaArtikel from './pages/user/MediaArtikel';
import DetailArtikel from './pages/user/DetailArtikel';
// LAYANAN
import LayananRumahPelita from './pages/user/LayananRumahPelita';
import LayananRumahGizi from './pages/user/LayananRumahGizi';
// DATA
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
            {/* KEGIATAN */}
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/kegiatan/:slug" element={<DetailKegiatan />} />
            {/* MEDIA */}
            <Route path="/media-informasi/video" element={<MediaVideo />} />
            <Route path="/media-informasi/majalah" element={<MediaMajalah />} />
            <Route path="/media-informasi/majalah/:slug" element={<DetailMajalah />} />
            <Route path="/media-informasi/infografis" element={<MediaInfografis />} />
            <Route path="/media-informasi/artikel-kesehatan" element={<MediaArtikel />} />
            <Route path="/media-informasi/artikel-kesehatan/:slug" element={<DetailArtikel />} />
            {/* LAYANAN */}
            <Route path="/layanan/rumah-penanganan-stunting-lintas-sektor-bagi-baduta" element={<LayananRumahPelita />} />
            <Route path="/layanan/rumah-gizi-pelangi-nusantara" element={<LayananRumahGizi />} />
            {/* DATA */}
            <Route path="/data/data-dokter" element={<DataDokter />} />
            <Route path="/data/data-posyandu" element={<DataPosyandu />} />
            {/* AUTH */}
            <Route path="/masuk" element={<Login />} />
            <Route path="/buat-akun" element={<Register />} />
            <Route path="/lupa-katasandi" element={<ForgotPass />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
