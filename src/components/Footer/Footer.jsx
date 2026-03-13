import css from './Footer.module.css';
import WebMoney from '../../assets/images/WebMoney.png';
import Visa from '../../assets/images/Visa.png';
import MasterCard from '../../assets/images/MasterCard.png';
import Skrill from '../../assets/images/Skrill.png';
import ecoPayz from '../../assets/images/ecoPayz.png';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.banks}>
                <img src={WebMoney} alt="WebMoney" width={158} height={36} />
                <img src={Skrill} alt="Skrill" width={110} height={38} />
                <img src={Visa} alt="Visa" width={110} height={33} />
                <img src={ecoPayz} alt="ecoPayz" width={155} height={36} />
                <img src={MasterCard} alt="MasterCard" width={166} height={37} />
            </div>
            <hr className={css.hr} />
            <div className={css.footerContent}>
                <div className={css.footerContentTitle}>
                    <div className={css.titleLogo}>
                        <img src={logo} alt="Logo" width={54} height={56}/>
                        <h2>PhantomSkins</h2>
                    </div>
                    <h3>© PhantomSkins – CS 2 cases that you want to open</h3>
                </div>
                <div className={css.footerContentLinks}>
                    <ul>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                    <p>The copyright holder of the inventory objects is Valve Corporation.
                        All included here mentioned brand names are registered and property
                        of the respective companies. The right to participate in a promotional
                        event for the drawing of a unique digital product, presented in the form
                        of a limited personal non-transferable revocable exclusive license, without
                        the right to sublicense, for the use of digital objects, is guaranteed to every
                        user who has purchased goods in the amount of $1 or more. Terms of the promotion:
                        from March 1, 2026 to March 1, 2027. The transparency of the event is ensured
                        by the presence of a Live Feed mechanism on the site. The results of the event
                        are summed up instantly, by randomly selecting the winners. The number of allowed participation
                        attempts is unlimited and is directly proportional to the purchase amount.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;