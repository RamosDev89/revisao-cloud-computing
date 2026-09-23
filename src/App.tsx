import { lazy, Suspense } from 'react';
import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RevisionPage } from './pages/RevisionPage';

const Quiz = lazy(() => import('./components/Quiz').then((m) => ({ default: m.Quiz })));

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
        Carregando…
      </span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<RevisionPage />} />
          <Route
            path="/simulado"
            element={
              <Suspense fallback={<Loader />}>
                <Quiz />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
