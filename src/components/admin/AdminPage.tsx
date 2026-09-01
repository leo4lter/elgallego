import { useState, useEffect } from 'react';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminLayout, { type AdminSection } from '@/components/admin/AdminLayout';
import AdminDashboard from '@/components/admin/AdminDashboard';
import ProjectsManager from '@/components/admin/ProjectsManager';
import ClientsManager from '@/components/admin/ClientsManager';
import EquipmentManager from '@/components/admin/EquipmentManager';

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [section, setSection] = useState<AdminSection>('dashboard');

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setAuthed(true);
    }
  }, []);

  if (!authed) {
    return <AdminLogin onSuccess={() => setAuthed(true)} />;
  }

  return (
    <AdminLayout
      active={section}
      onNavigate={setSection}
      onLogout={() => {
        sessionStorage.removeItem('admin_auth');
        setAuthed(false);
      }}
    >
      {section === 'dashboard' && <AdminDashboard onNavigate={setSection} />}
      {section === 'projects' && <ProjectsManager />}
      {section === 'clients' && <ClientsManager />}
      {section === 'equipment' && <EquipmentManager />}
    </AdminLayout>
  );
}
