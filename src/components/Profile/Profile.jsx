import css from "./Profile.module.css";

import humanIcon from '../../assets/images/human.svg';
import netIcon from '../../assets/images/net.svg';
import layerIcon from '../../assets/images/layers.svg';
import dollarIcon from '../../assets/images/$.svg';
import contractIcon from '../../assets/images/contract.svg';
import AwpDragonLor from '../../assets/images/Awp-Dragon-Lor.svg'
import RouletIcon from '../../assets/images/RouletIcon.svg'
import Gicon from '../../assets/images/G.svg'
import Upload from '../../assets/images/Upload.svg'
import RandomSkin from '../../assets/images/RandomSkin.svg'
import WalletIcon from '../../assets/images/Wallet.svg'
import Circle from '../../assets/images/Circle.svg'
import Add from '../../assets/images/Add.svg'
import Trade from '../../assets/images/Trade.svg'
import ArrowUp from '../../assets/images/ArrowUp.svg'

const Profile = () => {
    return (
        <main className={css.profile}>
            <div className={css.profileStats}>
                <div className={css.StatsItem}>
                    <div className={css.imageIn}>
                        <img src={humanIcon} alt="Icon" />
                    </div>
                    <div className={css.StatsText}>
                        <h3>12,654</h3>
                        <h4>players</h4>
                    </div>
                </div>
                <div className={css.hrUp}></div>
                <div className={css.StatsItem}>
                    <div className={css.imageIn}>
                        <img src={netIcon} alt="Icon" />
                    </div>
                    <div className={css.StatsText}>
                        <h3>300</h3>
                        <h4>online</h4>
                    </div>
                </div>
                <div className={css.hrUp}></div>
                <div className={css.StatsItem}>
                    <div className={css.imageIn}>
                        <img src={layerIcon} alt="Icon" />
                    </div>
                    <div className={css.StatsText}>
                        <h3>2,174</h3>
                        <h4>cases opened</h4>
                    </div>
                </div>
                <div className={css.hrUp}></div>
                <div className={css.StatsItem}>
                    <div className={css.imageIn}>
                        <img src={dollarIcon} alt="Icon" />
                    </div>
                    <div className={css.StatsText}>
                        <h3>300</h3>
                        <h4>gold withdrawn</h4>
                    </div>
                </div>
                <div className={css.hrUp}></div>
                <div className={css.StatsItem}>
                    <div className={css.imageIn}>
                        <img src={contractIcon} alt="Icon" />
                    </div>
                    <div className={css.StatsText}>
                        <h3>17</h3>
                        <h4>contracts</h4>
                    </div>
                </div>
            </div>
            <div className={css.ProfileBanners}>
                <div className={css.ProfileEdit}>
                    <div className={css.ProfileEditInfo}>
                        <div className={css.InfoLeftSide}>
                            <div className={css.InfoLeftSideAvatar}>
                                <h3>none</h3>
                            </div>
                            <div className={css.EditNameId}>
                                <h3>IvanKlym</h3>               {/* User's name */}
                                <h4>ID #234523</h4>           {/* User's ID */}
                            </div>
                        </div>
                        <button className={css.RefDashboard}>Ref. Dashboard</button>
                    </div>
                    <hr />
                    <div className={css.SetAvatar}>
                        <button className={css.SetAvatarBtn}><img src={Gicon} alt="Set Avatar" /></button>
                        <div className={css.SetAvatarTitle}>
                            <h3>Set avatar from <br />CS 2</h3>
                            <p>To withdraw skins, you need to set the same avatar as in your CS:GO account.</p>
                        </div>
                        <button className={css.UploadBtn}><img src={Upload} alt="Upload" /> Upload</button>
                    </div>
                </div>
                <div className={css.WeaponBanner}>
                    <div className={css.WeaponBannerPrice}>
                        <h3>543$</h3>
                    </div>
                    <img src={AwpDragonLor} alt="Weapon" />
                    <h2>AWP<br />Dragon Lore</h2>
                </div>
                <div className={css.BetsWonBanner}>
                    <div className={css.BetsWonBannerIcon}>
                        <img src={RouletIcon} alt="Bets Won" />
                    </div>
                    <div className={`${css.Glow} ${css.GlowBottomRight}`}></div>
                    <h1>45</h1>           {/* Number of bets won */}
                    <h2>BETS WON</h2>
                </div>
            </div>
            <div className={css.RandomSkin}>
                <img src={RandomSkin} alt="Random Skin" />
            </div>
            <div className={css.payMenu}>
                <div className={css.PMenuLeftSide}>
                    <img src={WalletIcon} alt="Wallet" width={24} height={20} className={css.Wallet}/>
                    <img src={Circle} alt="Circle" width={16} height={17}/>
                    <button><img src={Add} alt="Add" width={16} height={16}/> <h3>Add funds</h3></button>
                </div>
                <img src={Trade} alt="Trade" className={css.Trade} width={38} height={39}/>
                <div className={css.PMenuRightSide}>
                    <img src={Circle} alt="Circle" width={16} height={17}/>
                    <button><img src={ArrowUp} alt="Arrow Up" width={16.67} height={19}/> <h3>Withdraw</h3></button>
                </div>
            </div>
        </main>
    )
}
export default Profile;