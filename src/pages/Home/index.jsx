import { lazy, Suspense, useEffect } from "react";
const Hero = lazy(() => import("../../components/Home/Hero"));
const Philosophy = lazy(() => import("../../components/Home/Philosophy"));
const About = lazy(() => import("../../components/Home/About"));
const Vision = lazy(() => import("../../components/Home/Vision"));
const Mission = lazy(() => import("../../components/Home/Mission"));
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <main className="w-full">
      <h1 className="hidden">MANA CLAN</h1>
      <Suspense fallback={<p>Loading..</p>}>
        <Hero />
        <Philosophy />
        <About />
        <Vision />
        <Mission />
      </Suspense>
    </main>
  );
};

export default Home;
