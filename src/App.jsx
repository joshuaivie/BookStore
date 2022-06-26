import {
  Routes,
  Route,
} from 'react-router-dom';

import Layout from './components/Shared/Layout/Layout';
import Books from './pages/Books';
import Categories from './pages/Categories';
import './styles/global.scss';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/categories" element={<Categories />} />
        <Route index path="*" element={<Books />} />
      </Route>
    </Routes>
  );
}
