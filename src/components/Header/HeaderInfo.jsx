import VolumeIcon from '../../assets/images/VolumeIcon.png';
import css from './HeaderInfo.module.css';
import { Link } from 'react-router-dom';

import AccountInfo from './AccountInfo';

const HeaderInfo = () => {
    return (
        <div className={css.headerInfo}>
            <nav>
                <ul>
                    <li><Link to="/cases">Cases</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
            <AccountInfo />
            <div className={css.Options}>
                <button><img src={VolumeIcon} alt="Volume" /></button> {/*  Кнопка регулировки громкости */}
                <select> {/*  Выбор языка */}
                    <option value="en">EN</option>
                    <option value="ua">UA</option>
                </select>
            </div>
        </div>
    )
}
export default HeaderInfo