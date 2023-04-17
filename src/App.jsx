import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Monster = lazy(() => import("./pages/Monster/"));
const MonsterExp = lazy(() => import("./pages/MonsterExp/"));
const Awaken = lazy(() => import("./pages/Awaken/"));
const Collection = lazy(() => import("./pages/Collection/"));
const Equip = lazy(() => import("./pages/Equip/"));

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
        <Route
          path="/monster-exp"
          element={
            <Suspense fallback={<p>Loading</p>}>
              <MonsterExp />
            </Suspense>
          }
        />
        <Route
          path="/equip-list"
          element={
            <Suspense fallback={<p>Loading</p>}>
              <Equip />
            </Suspense>
          }
        />
        <Route
          path="/cardawakening"
          element={
            <Suspense fallback={<p>Loading</p>}>
              <Awaken />
            </Suspense>
          }
        />
        <Route
          path="/cardcollection"
          element={
            <Suspense fallback={<p>Loading</p>}>
              <Collection />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
