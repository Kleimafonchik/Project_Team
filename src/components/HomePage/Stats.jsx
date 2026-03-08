import { useEffect, useState } from 'react';
import css from './HomePageStyles/HomePage.module.css';

const useAnimatedStat = (base, delta, intervalMs, options = {}) => {
  const { onlyIncrease = false, maxMultiplier = 1.2 } = options;
  const [value, setValue] = useState(base);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true);
      setValue((prev) => {
        if (onlyIncrease) {
          const maxAllowed = Math.floor(base * maxMultiplier);

          // если уже дошли до потолка
          if (prev >= maxAllowed) {
            const jitter = Math.floor(Math.random() * 3) - 1; // -1, 0, 1
            const next = Math.min(maxAllowed, Math.max(base, prev + jitter));
            return next;
          }

          const minStep = 1;
          const maxStep = delta;
          const step =
            Math.floor(Math.random() * (maxStep - minStep + 1)) + minStep;

          let next = prev + step;
          if (next > maxAllowed) next = maxAllowed;

          return next;
        }

        // режим колебаний
        const min = base - delta;
        const max = base + delta;
        const change = Math.floor(Math.random() * (delta * 2 + 1)) - delta;
        let next = prev + change;

        if (next < min) next = min;
        if (next > max) next = max;

        return next;
      });
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [base, delta, intervalMs, onlyIncrease, maxMultiplier]);

  const handleAnimationEnd = () => {
    setAnimate(false);
  };

  return { value, animate, handleAnimationEnd };
};

const Stats = () => {
  // первые два значения — логически только растут, но медленно и в пределах
  const openedCases = useAnimatedStat(86700, 300, 2200, {
    onlyIncrease: true,
    maxMultiplier: 1.12, // максимум ~ +12%
  });
  const newUsers = useAnimatedStat(13500, 180, 2600, {
    onlyIncrease: true,
    maxMultiplier: 1.15, // максимум ~ +15%
  });

  // онлайн может плавно ходить вверх/вниз, но обновляется реже
  const onlineUsers = useAnimatedStat(934, 80, 8000); // 934 ± 80, раз в 8 c

  const formatK = (value) => `${(value / 1000).toFixed(1)} k`;
  const formatInt = (value) => value.toLocaleString('en-US');

  return (
    <section className={css.Stats}>
      <div className={css.StatsItem}>
        <h1>20%</h1> {/* --- бонус --- */}
        <p>
          bonus on first <br />
          deposit
        </p>
      </div>
      <div className={css.StatsItem}>
        <h1
          className={openedCases.animate ? css.statValueAnimated : ''}
          onAnimationEnd={openedCases.handleAnimationEnd}
        >
          {formatK(openedCases.value)}
        </h1>
        {/* --- открыто кейсов за последний месяц --- */}
        <p>cases opened in the last month</p>
      </div>
      <div className={css.StatsItem}>
        <h1
          className={newUsers.animate ? css.statValueAnimated : ''}
          onAnimationEnd={newUsers.handleAnimationEnd}
        >
          {formatK(newUsers.value)}
        </h1>
        {/* --- количество новых пользователей за последний месяц--- */}
        <p>new users in the last month</p>
      </div>
      <div className={css.StatsItem}>
        <h1
          className={onlineUsers.animate ? css.statValueAnimated : ''}
          onAnimationEnd={onlineUsers.handleAnimationEnd}
        >
          {formatInt(onlineUsers.value)}
        </h1>
        {/* --- количество активных пользователей --- */}
        <p>
          users online on the <br />
          site
        </p>
      </div>
    </section>
  );
};

export default Stats;