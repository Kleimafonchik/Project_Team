import css from './AccountInfo.module.css';
import Avatar from '../../assets/images/NoAvatar.png';
const AccountInfo = () => {
    return (
        <div className={css.AccountInfo}>
            <div className={css.Account}>
                <h3>IvanKlym</h3>  {/* Имя пользователя */}
                <img src={Avatar} alt="Avatar" />
            </div>
            <div className={css.Balance}>
                <h3>69 $</h3>  {/* Баланс пользователя */}
                <button>deposit</button> {/* Кнопка для пополнения баланса */}
            </div>
        </div>
    )
}
export default AccountInfo