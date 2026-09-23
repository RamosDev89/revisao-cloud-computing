import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Quiz } from './components/Quiz';
import { RevisionPage } from './pages/RevisionPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<RevisionPage />} />
          <Route path="/simulado" element={<Quiz />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
