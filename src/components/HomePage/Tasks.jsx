import css from './HomePageStyles/HomePage.module.css';
import Value from '../../assets/images/Value.png';
import Lock from '../../assets/images/Lock.png';
const Tasks = () => {
    return (
        <section className={css.tasks}>
            <div className={css.tasksTitle}>
                <h1>
                    Complete tasks, open cases
                    and save bits to open cases
                    from the «free cases for bits» line!
                </h1>
                <p>
                    The conditions are very simple: the more
                    you complete tasks or open cases,
                    the more free cases will be available!
                </p>
                <button>See cases for bits</button>
            </div>
            <div className={css.tasksContent}>
                <div className={css.tasksColumn}>
                    <div className={css.tasksItem}>
                        <p>Open first case</p>
                        <div className={css.tasksPrice}>
                            <img src={Value} alt="Value" width={24} height={24} />
                            <h3>25</h3>
                            <img src={Lock} alt="Lock" width={16} height={20} />
                        </div>
                    </div>
                    <div className={css.tasksItem}>
                        <p>Knock out an item more expensive than $2</p>
                        <div className={css.tasksPrice}>
                            <img src={Value} alt="Value" width={24} height={24} />
                            <h3>125</h3>
                            <img src={Lock} alt="Lock" width={16} height={20} />
                        </div>
                    </div>
                </div>
                <div className={css.tasksColumn}>
                    <div className={css.tasksItem}>
                        <p>Knock out an item more expensive than $1 in the first 10 cases</p>
                        <div className={css.tasksPrice}>
                            <img src={Value} alt="Value" width={24} height={24} />
                            <h3>50</h3>
                            <img src={Lock} alt="Lock" width={16} height={20} />
                        </div>
                    </div>
                    <div className={css.tasksItem}>
                        <p>Open 10 cases</p>
                        <div className={css.tasksPrice}>
                            <img src={Value} alt="Value" width={24} height={24} />
                            <h3>150</h3>
                            <img src={Lock} alt="Lock" width={16} height={20} />
                        </div>
                    </div>
                </div>
                <div className={css.tasksColumn}>
                    <div className={css.tasksItem}>
                        <p>Spin the bonus wheel: 5 times</p>
                        <div className={css.tasksPrice}>
                            <img src={Value} alt="Value" width={24} height={24} />
                            <h3>100</h3>
                            <img src={Lock} alt="Lock" width={16} height={20} />
                        </div>
                    </div>
                    <div className={css.tasksItem}>
                        <p>Open 50 cases</p>
                        <div className={css.tasksPrice}>
                            <img src={Value} alt="Value" width={24} height={24} />
                            <h3>175</h3>
                            <img src={Lock} alt="Lock" width={16} height={20} />
                        </div>
                    </div>
                </div>
                <p className={css.tasksFooter}>
                    more than 100 tasks
                    and achievements
                </p>
            </div>
        </section>
    )
}
export default Tasks