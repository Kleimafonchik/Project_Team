import css from './Header.module.css';
import Logotype from './Logotype.jsx';
import HeaderInfo from './HeaderInfo.jsx'; 
const Header = () => {
    return (
        <header>
            <Logotype />
            <HeaderInfo />
        </header>
    )
}
export default Header