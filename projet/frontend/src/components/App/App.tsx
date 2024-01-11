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
import Rooms from './Routes/Rooms';
import RoomDetails from './Routes/RoomDetails';
import Classes from './Routes/Classes';
import ClassDetails from './Routes/ClassDetails';
import Roles from './Routes/Roles';
import RoleDetails from './Routes/RoleDetails';


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
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<ClassDetails />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/roles/:id" element={<RoleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
