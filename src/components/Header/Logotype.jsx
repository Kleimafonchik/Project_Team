import logo from '../../assets/images/logo.png';
import css from './Logotype.module.css';
const Logotype = () => {
    return (
        <div className={css.logo}>
            <img src={logo} alt="Logo" />
            <h3>PhantomSkins</h3>
        </div>
    )
}
export default Logotype