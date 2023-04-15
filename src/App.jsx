import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Monster = lazy(() => import("./pages/Monster/Monster"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/monster-list"
          element={
            <Suspense fallback={<p>Loading</p>}>
              <Monster />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
