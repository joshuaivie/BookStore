import {
  Routes,
  Route,
} from 'react-router-dom';

import Layout from './components/Shared/Layout/Layout';
import Books from './pages/Books';
import Categories from './pages/Categories';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/categories" exact element={<Categories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </Layout>
  );
}
