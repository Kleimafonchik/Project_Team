import css from './HomePageStyles/HomePage.module.css';
import ItemStories from '../ItemStories/ItemStories.jsx';
import Panel from './Panel.jsx';
import WeaponCoin from './WeaponCoin.jsx';
import Stats from './Stats.jsx';
import FreeCase from './FreeCase.jsx';

const HomePage = () => {
  return (
    <main>
      <WeaponCoin />
      <ItemStories />
      <Panel />
      <Stats />
      <FreeCase />
    </main>
  );
};

export default HomePage;