import Login from '@/authentication/login';
import './styles/globals.scss';
import Dashboard from "./dashboard/dashboard";


export default function Home() {
  return (
    <div>
      {/* <Dashboard /> */}
      <Login />
    </div>
  );
}
