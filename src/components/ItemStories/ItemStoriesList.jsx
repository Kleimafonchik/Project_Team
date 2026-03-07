import styled from 'styled-components';
import css from './ItemStories.module.css';

const weaponImages = import.meta.glob('../../assets/images/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});

const RARITY_COLORS = {
  Consumer: '#B0C3D9',
  Industrial: '#5E98D9',
  'Mil-Spec': '#4B69FF',
  Restricted: '#8847FF',
  Classified: '#D32CE6',
  Covert: '#EB4B4B',
  Contraband: '#E4AE39',  
};

const getRarityColor = (rare) => RARITY_COLORS[rare] ?? '#B0C3D9';

const resolveWeaponIcon = (iconWeapon) =>
  weaponImages[iconWeapon] ?? iconWeapon;

const getFullWeaponName = (item) => {
  const tag = item?.NameTag ? String(item.NameTag).trim() : '';
  const name = item?.NameWeapon ? String(item.NameWeapon).trim() : '';
  return tag && name ? `${tag} ${name}` : tag || name;
};

const hexToRgba = (hex, alpha = 0.4) => {
  if (!hex) {
    return `rgba(176, 195, 217, ${alpha})`;
  }

  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);

  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Block = styled.div`
  width: 144px;
  height: 192px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--border-color);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    right: -40px;
    bottom: -40px;
    width: 160px;
    height: 160px;
    background: radial-gradient(
      circle at center,
      ${(p) => hexToRgba(p.$rarityColor, 0.75)} 0%,
      transparent 70%
    );
    filter: blur(18px);
    pointer-events: none;
  }
`;

const WeaponIcon = styled.img`
  width: 120px;
  height: 120px;
  position: relative;
  z-index: 1;
`;

const RarityDot = styled.div`
  position: absolute;
  left: 12px;
  bottom: 12px;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background-color: ${(p) => p.$color};
  z-index: 1;
`;

const WeaponTitle = styled.h2`
  margin: 16px 8px 4px;
  text-align: left;
  font-size: 12px;
  line-height: 100%;
  color: #FFFBFF;
  font-weight: 400;
  font-family: "Orelega One", serif;
  min-height: 24px;

  span {
    font-weight: 700;
  }
  position: relative;
  z-index: 1;
`;

const renderTitle = (item) => {
  const rarityColor = getRarityColor(item.Rare);

  return (
    <WeaponTitle>
      {item.NameTag ? (
        <span style={{ color: rarityColor }}>{item.NameTag}</span>
      ) : null}
      {item.NameTag && item.NameWeapon ? ' ' : null}
      {item.NameWeapon}
    </WeaponTitle>
  );
};

const ItemStoriesList = ({ items, onItemView }) => {
  if (!items || items.length === 0) {
    return (
      <div className={css.itemStoriesFeed}>
        <div className={css.empty}>
          <h1>Поки що нiчого нема...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={css.itemStoriesFeed}>
      {items.map((item) => (
        <Block key={item.id} $rarityColor={getRarityColor(item.Rare)}>
          {renderTitle(item)}
          <WeaponIcon
            src={resolveWeaponIcon(item.IconWeapon)}
            alt={getFullWeaponName(item)}
            onClick={() => onItemView(item.id)}
            style={{ cursor: 'pointer' }}
          />
          <RarityDot $color={getRarityColor(item.Rare)} />
        </Block>
      ))}
    </div>
  );
};

export default ItemStoriesList;

