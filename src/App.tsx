import Nav from './components/nav';
import Hero from './components/hero';
import Features from './components/features';
import Timeline from './components/timeline';
import Footer from './components/footer';

const App = (): JSX.Element => {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Timeline />
      <Footer />
    </>
  );
};

export default App;
