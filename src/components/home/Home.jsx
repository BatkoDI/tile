import IconVideo from '../forAll/IconVideo';
import Menu from '../forAll/menu/Menu';
import About from './about/About';
import Advantages from './advantages/Advantages';
import Example from './example/Example';
import './home.css';
import HomeHeaderImage from './homeHeader/HomeHeaderImage';
import HomeHeaderTitle from './homeHeader/HomeHeaderTitle';
import OurWork from './ourWork/OurWork';
import Services from './services/Services';
import Stages from './stages/Stages';
import Footer from './footer/Footer';

function Home() {
  return (
    <div id='body'>
      <Menu />
      <header className='homeHeader'>
        <div className='mainImage'>
          <HomeHeaderImage />
        </div>
        <div className='mainVideoDiv'>
          <IconVideo />
        </div>
        <h1 className='homeH1'>
          Tile Instalator
        </h1>
        <HomeHeaderTitle />
        <div className='mainBackgroundLeft'></div>
      </header>
      <main className='mainBlock'>
        <section className='about'>
          <About />
        </section>
        <section className='example'>
          <Example />
        </section>
        <section id='services'>
          <Services />
        </section>
        <section id='stages'>
          <Stages />
        </section>
        <section id='advantages'>
          <Advantages />
        </section>
        <section id='ourWork'>
          <OurWork />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
