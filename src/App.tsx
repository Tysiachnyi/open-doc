import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
// start working with react-auth-kit
export default function App() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-2">
        <Outlet />
      </main>
    </div>
  );
}
