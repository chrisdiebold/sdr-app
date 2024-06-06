
import "./App.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignalTx } from './pages/SignalTx';
import { RootLayout } from './pages/Layout';
import TXPlot from './pages/TxPlot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <SignalTx /> },
      { path: '/tx-plot', element: <TXPlot /> }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
