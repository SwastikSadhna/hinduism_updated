import { Route } from 'react-router-dom';
import BhajanContent from './Content/BhajanContent';
import DuhaContent from './Content/DuhaContent';
import ChhandContent from './Content/ChhandContent';
import VedaContent from './Content/VedaContent';
import BhaktiLayout from './BhaktiLayout';

export const contentRoutes = [
  <Route key="bhajans" path="bhajans" element={<BhajanContent />} />,
  <Route key="duha" path="duha" element={<DuhaContent />} />,
  <Route key="chhand" path="chhand" element={<ChhandContent />} />,
  <Route key="vedas" path="vedas" element={<VedaContent />} />,
];

export default function RoutesConfig() {
  return (
    <Routes>
      {/* Define the main Bhakti layout with dynamic content */}
      <Route path="/Bhakti" element={<BhaktiLayout />}>
        {contentRoutes} {/* Dynamic routes */}
      </Route>
    </Routes>
  );
}
