import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from '@/context/DataContext';
import LandingPage from '@/components/landing/LandingPage';
import AdminPage from '@/components/admin/AdminPage';

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
