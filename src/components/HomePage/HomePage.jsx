import css from './HomePageStyles/HomePage.module.css';
import ItemStories from '../ItemStories/ItemStories.jsx';
import Panel from './Panel.jsx';
import WeaponCoin from './WeaponCoin.jsx';

const HomePage = () => {
  return (
    <main>
      <WeaponCoin />
      <ItemStories />
      <Panel />
      <section className={css.Stats}>
        <div className={css.StatsItem}>
            <h1>20%</h1>                   {/* --- бонус --- */}
            <p>bonus on first <br />deposit</p>
        </div>
        <div className={css.StatsItem}>
            <h1>86.7 k</h1>                {/* --- открыто кейсов за последний месяц --- */}
            <p>cases opened in the last month</p>
        </div>
        <div className={css.StatsItem}>
            <h1>13.5 k</h1>                {/* --- количество новых пользователей за последний месяц--- */}
            <p>new users in the last month</p>
        </div>
        <div className={css.StatsItem}>
            <h1>934</h1>                   {/* --- количество активных пользователей --- */}
            <p>users online on the <br />site</p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;