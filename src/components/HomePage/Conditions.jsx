import css from './HomePageStyles/HomePage.module.css';
import conditions from '../../assets/images/conditions.png';

const Conditions = () => {
    return(
        <section className={css.conditions}>
        <div className={css.conditionsTitle}>
          <h1>We offer the best conditions</h1>
          <img src={conditions} alt="Conditions" />
        </div>
        <div className={css.conditionsContent}>
          <div className={css.conditionsItem}>
            <h2>Full transparency</h2>
          <p>We do not hide the stocks of our bots 
            or their deals. On the contrary we have a 
            live broadcast of the winnings where the 
            results of the openings are shown in real 
            time and in the telegram we regularly publish 
            posts with the winnings.</p>
          </div>
          <div className={css.conditionsItem}>
            <h2>Guaranteed delivery</h2>
            <p>We always give out won skins and we do it very quickly. 
              Our technical support is ready to resolve the problem at any time.</p>
          </div>
          <div className={css.conditionsItem}>
            <h2>Skins calculation</h2>
            <p>To top up an account with us, you do not have to deposit real money. 
              We accept the calculation 
              in skins, which means it is easy to replenish the 
              account with unnecessary junk</p>
          </div>
          <div className={css.conditionsItem}>
            <h2>Low prices</h2>
            <p>Our cases are cheaper than on Steam, and the loot in them is cooler. It is possible 
              to sell the won skins to us and it is much more profitable than on the trading platform</p>
          </div>
        </div>
      </section>
    )
}
export default Conditions