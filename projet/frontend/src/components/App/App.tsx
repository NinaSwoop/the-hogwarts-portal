import Header from './Header/Header';

import './App.scss';
import Footer from './Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import NotFound from './Routes/NotFound';
import Staff from './Routes/Staff';
import Subjects from './Routes/Subjects';


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to='/staff'/>} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
