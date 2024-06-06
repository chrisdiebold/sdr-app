import {Outlet} from 'react-router-dom'
import { config, monitoring } from "../state";
import Navbar from '../components/navbar';

export function RootLayout() {
  return (
    <>
      <Navbar
          appName={config.name}
          appOrganization={config.organization}
          appVersion={config.version}
          theme="Dark"
          status={monitoring}
        />
      <Outlet />
    </>
  );
}

