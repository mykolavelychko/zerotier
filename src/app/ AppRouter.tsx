import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Devices from '../modules/devices/Devices';
import NotFound from '../modules/NotFound';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Devices />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
