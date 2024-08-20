import Login from '@/authentication/login';
import './styles/globals.scss';
import Dashboard from "../components/dashboard/dashboard";


export default function Home() {
  return (
    <div>
      <Login />
    </div>
  );
}
