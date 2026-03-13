import logo from '../../assets/images/logo.png';
import css from './Logotype.module.css';
import { Link } from 'react-router-dom'
const Logotype = () => {
    return (
        <div className={css.logo}>
            <img src={logo} alt="Logo" />
            <Link to="/"><h3>PhantomSkins</h3></Link>
        </div>
    )
}
export default Logotype