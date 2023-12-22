import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ClipDownloader from './components/ClipDownloader';
import MessageModal from './components/Modal';

function MainPage() {
  return (
    <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
      <Header />
      <ClipDownloader />
      <MessageModal />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
