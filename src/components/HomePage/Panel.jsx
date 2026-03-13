import css from './HomePageStyles/HomePage.module.css';
import steamIcon from '../../assets/images/steamlogo.png';
import caseMain1 from '../../assets/images/case-main 1.png';

const Panel = () => {
    return (
        <section className={css.panel}>
            <img src={caseMain1} alt="case main" className={css.caseMain1} />
            <div className={css.panelTitle}>
                <h4>20% bonus on first deposit</h4>
                <h1>
                    CS 2 Cases that you <br />
                    want to open
                </h1>
                <p>
                    with the highest probability of dropping fatty <br />
                    items
                </p>
                <button>
                    <img src={steamIcon} alt="logosteam" /> login on steam
                </button>
            </div>
        </section>
    )
}
export default Panel;