import { useRef, useState } from 'react';
import css from './HomePageStyles/HomePage.module.css';
import FreeCaseImg from '../../assets/images/case-free-2 1.png';

const FreeCase = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const handleMouseMove = (event) => {
    if (!containerRef.current || !buttonRef.current || disabled) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    const dx = buttonCenterX - mouseX;
    const dy = buttonCenterY - mouseY;

    const distance = Math.sqrt(dx * dx + dy * dy) || 1;
    const fleeRadius = 180;

    if (distance < fleeRadius) {
      const move = fleeRadius - distance;
      const nx = dx / distance;
      const ny = dy / distance;

      let x = nx * move;
      let y = ny * move;

      const maxShift = 130;
      if (x > maxShift) x = maxShift;
      if (x < -maxShift) x = -maxShift;
      if (y > maxShift) y = maxShift;
      if (y < -maxShift) y = -maxShift;

      setOffset({ x, y });
    } else if (offset.x !== 0 || offset.y !== 0) {
      setOffset({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const handleClick = () => {
    if (disabled) return;

    setDisabled(true);
    setScale(0.5);

    setTimeout(() => {
      setScale(1);
      setDisabled(false);
    }, 700);
  };

  return (
    <section
      className={css.FreeCase}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={css.FreeCaseTitle}>
        <h2>Free case</h2>
        <p>
          Register on our service and receive a free case upon the first
          replenishment of the balance
        </p>
      </div>
      <img src={FreeCaseImg} alt="Free Case" />
      <button
        ref={buttonRef}
        onClick={handleClick}
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          pointerEvents: disabled ? 'none' : 'auto',
        }}
      >
        Get a free case
      </button>
    </section>
  );
};

export default FreeCase;