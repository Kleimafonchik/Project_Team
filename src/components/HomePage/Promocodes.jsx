import css from './HomePageStyles/HomePage.module.css';
import Promo from '../../assets/images/promo.png';

const Promocodes = () => {
    return(
        <section className={css.promocodes}>
              <div className={css.promocodesTitle}>
                <h2>Promo codes</h2>
                <p>
                  are published daily in our telegram channel.
                   Subscribe to keep abreast of the latest updates
                </p>
              </div>
              <img src={Promo} alt="Promo" />
              <button>
                Subscribe to the channel
              </button>
            </section>
    )
}
export default Promocodes