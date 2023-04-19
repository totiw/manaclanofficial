import { lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Monster = lazy(() => import("./pages/Monster/"));
const MonsterExp = lazy(() => import("./pages/MonsterExp/"));
const MonsterDrop = lazy(() => import("./pages/MonsterDrop/"));
const Awaken = lazy(() => import("./pages/Awaken/"));
const Collection = lazy(() => import("./pages/Collection/"));
const Equip = lazy(() => import("./pages/Equip/"));
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const navigate = useNavigate();
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
            <ErrorBoundary FallbackComponent={<p>Loading</p>} onReset={() => navigate("/")}>
              <Suspense fallback={<p>Loading</p>}>
                <Monster />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/monster-exp"
          element={
            <ErrorBoundary FallbackComponent={<p>Loading</p>} onReset={() => navigate("/")}>
              <Suspense fallback={<p>Loading</p>}>
                <MonsterExp />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/monster-drop"
          element={
            <ErrorBoundary FallbackComponent={<p>Loading</p>} onReset={() => navigate("/")}>
              <Suspense fallback={<p>Loading</p>}>
                <MonsterDrop />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/equip-list"
          element={
            <ErrorBoundary FallbackComponent={<p>Loading</p>} onReset={() => navigate("/")}>
              <Suspense fallback={<p>Loading</p>}>
                <Equip />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/cardawakening"
          element={
            <ErrorBoundary FallbackComponent={<p>Loading</p>} onReset={() => navigate("/")}>
              <Suspense fallback={<p>Loading</p>}>
                <Awaken />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/cardcollection"
          element={
            <ErrorBoundary FallbackComponent={<p>Loading</p>} onReset={() => navigate("/")}>
              <Suspense fallback={<p>Loading</p>}>
                <Collection />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
