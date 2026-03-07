import { useState } from 'react';
import css from './HomePageStyles/HomePage.module.css';
import weapon1 from '../../assets/images/weapon-3.png';
import weapon2 from '../../assets/images/weapon-2.png';
import weapon3 from '../../assets/images/weapon-1.png';

const FloatingCoin = ({ wrapperClassName, src, alt }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
  const [spinTurns, setSpinTurns] = useState(0);

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const intensity = 26;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    const distanceFromCenter =
      Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      ) / Math.sqrt(centerX * centerX + centerY * centerY);

    const scale = 1.05 + (1 - distanceFromCenter) * 0.03;

    setTilt({ x: rotateX, y: rotateY, scale });
  };

  const handleLeave = () => {
    setTilt({ x: 0, y: 0, scale: 1 });
  };

  const handleClick = () => {
    setSpinTurns((prev) => prev + 1);
  };

  const totalRotateX = tilt.x + spinTurns * 360;
  const transform = `rotateX(${totalRotateX}deg) rotateY(${tilt.y}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`;

  return (
    <div
      className={wrapperClassName}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <img src={src} alt={alt} style={{ transform }} />
    </div>
  );
};

const WeaponCoin = () => {
  return (
    <>
      <FloatingCoin
        wrapperClassName={css.weapon1}
        src={weapon1}
        alt="weapon 1"
      />
      <FloatingCoin
        wrapperClassName={css.weapon2}
        src={weapon2}
        alt="weapon 2"
      />
      <FloatingCoin
        wrapperClassName={css.weapon3}
        src={weapon3}
        alt="weapon 3"
      />
    </>
  );
};

export default WeaponCoin;

