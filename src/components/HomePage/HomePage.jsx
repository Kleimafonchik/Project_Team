import Panel from './Panel.jsx';
import WeaponCoin from './WeaponCoin.jsx';
import Stats from './Stats.jsx';
import FreeCase from './FreeCase.jsx';
import Conditions from './Conditions.jsx';
import Tasks from './Tasks.jsx';
import Promocodes from './Promocodes.jsx';

const HomePage = () => {
  return (
    <main>
      <WeaponCoin />
      <Panel />
      <Stats />
      <FreeCase />
      <Conditions />
      <Tasks />
      <Promocodes />
    </main>
  );
};

export default HomePage;