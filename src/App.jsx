import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import css from './App.module.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <div className={css.mainContainer}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/movies" element={<MoviesPage />}></Route>
              <Route
                path="/movies/:movieId/*"
                element={<MovieDetailsPage />}
              ></Route>
              <Route path="*" element={<NotFoundPage replace />}></Route>
            </Routes>
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
