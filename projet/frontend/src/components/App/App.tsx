import Header from './Header/Header';

import './App.scss';
import Footer from './Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import NotFound from './Routes/NotFound';
import Staff from './Routes/Staff';
import Subjects from './Routes/Subjects';
import Wizards from './Routes/Wizards';
import SubjectDetails from './Routes/SubjectDetails';
import LoginForm from './Routes/LoginForm';


const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to='/staff'/>} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/:id" element={<SubjectDetails />} />
        <Route path="/wizards" element={<Wizards />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
