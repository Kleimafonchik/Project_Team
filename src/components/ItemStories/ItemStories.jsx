import { useMemo, useState } from 'react';
import css from './ItemStories.module.css';
import styled from 'styled-components';

import ItemStoriesButtons from './ItemStoriesButtons';

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

const normalizeNameFields = (rawNameWeapon, rawNameTag) => {

  if (typeof rawNameTag === 'string' && rawNameTag.trim()) {
    return {
      NameTag: rawNameTag.trim(),
      NameWeapon: String(rawNameWeapon ?? '').trim(),
    };
  }
  
  const s = String(rawNameWeapon ?? '');
  const closeIdx = s.indexOf('</span>');
  const openIdx = s.indexOf('<span>');
  if (openIdx === -1 || closeIdx === -1 || closeIdx < openIdx) {
    return { NameTag: null, NameWeapon: s.trim() };
  }

  const tag = s.slice(openIdx + '<span>'.length, closeIdx).trim();
  const name = s.slice(closeIdx + '</span>'.length).trim();
  return { NameTag: tag || null, NameWeapon: name };
};

const resolveWeaponIcon = (iconWeapon) =>
  weaponImages[iconWeapon] ?? iconWeapon;

const getFullWeaponName = (item) => {
  const tag = item?.NameTag ? String(item.NameTag).trim() : '';
  const name = item?.NameWeapon ? String(item.NameWeapon).trim() : '';
  return tag && name ? `${tag} ${name}` : tag || name;
};

const byNameAsc = (a, b) =>
  getFullWeaponName(a).localeCompare(getFullWeaponName(b), 'ru', {
    sensitivity: 'base',
  });

const byViewedAtDesc = (a, b) => (b.viewedAt ?? 0) - (a.viewedAt ?? 0);

const Block = styled.div`
  width: 144px;
  height: 192px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--border-color);
  position: relative;
`;
const WeaponIcon = styled.img`
  width: 120px;
  height: 120px;
`;

const RarityDot = styled.div`
  position: absolute;
  left: 12px;
  bottom: 12px;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background-color: ${(p) => p.$color};
`;

const WeaponTitle = styled.h2`
  margin: 12px 8px 8px;
  text-align: center;
  font-size: 12px;
  line-height: 100%;
  color: #FFFBFF;
  font-weight: 400;
  font-family: "Orelega One", serif;

  span {
    font-weight: 700;
  }
`;

const initialItems = [
  {
    id: 'StatTrak_MAC-10_Neon_Rider',
    Rare: 'Covert',
    NameTag: 'StatTrak™',
    NameWeapon: 'MAC-10 | Neon Rider',
    IconWeapon: '../../assets/images/StatTrak_MAC-10_Neon_Rider.png',
    favorite: true,
    liked: false,
    viewed: false,
    viewedAt: null,
  },
  {
    id: 'Desert_Eagle_Blaze',
    Rare: 'Restricted',
    NameWeapon: 'Desert Eagle | Blaze',
    IconWeapon: '../../assets/images/Desert_Eagle_Blaze.png',
    favorite: true,
    liked: true,
    viewed: true,
    viewedAt: Date.now(),
  },
  // ... ещё айтемы
];

const ItemStories = () => {
  const [items, setItems] = useState(() =>
    initialItems.map((it) => ({
      ...it,
      ...normalizeNameFields(it.NameWeapon, it.NameTag),
      favorite: Boolean(it.favorite),
      liked: Boolean(it.liked),
      viewed: Boolean(it.viewed),
      viewedAt: typeof it.viewedAt === 'number' ? it.viewedAt : null,
    }))
  );

  // фильтр: 'favorite' | 'like' | 'clock'
  const [activeFilter, setActiveFilter] = useState('favorite');

  const markViewed = (id) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id
          ? { ...it, viewed: true, viewedAt: it.viewedAt ?? Date.now() }
          : it
      )
    );
  };

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

  const sortByName = (arr) => [...arr].sort(byNameAsc);
  const sortByViewed = (arr) =>
    [...arr].sort((a, b) => byViewedAtDesc(a, b) || byNameAsc(a, b));

  const displayed = useMemo(() => {
    switch (activeFilter) {
      case 'favorite':
        return sortByName(items.filter((i) => i.favorite));
      case 'like':
        return sortByName(items.filter((i) => i.liked));
      case 'clock':
        return sortByViewed(items.filter((i) => i.viewed));
      default:
        return [];
    }
  }, [items, activeFilter]);

  return (
    <section className={css.itemStories}>
      <ItemStoriesButtons
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <div className={css.itemStoriesFeed}>
        {displayed.length === 0 ? (
          <div className={css.empty}>
            <h1>Поки що нiчого нема...</h1>
          </div>
        ) : (
          displayed.map((item) => (
            <Block key={item.id}>
              {renderTitle(item)}
              <WeaponIcon
                src={resolveWeaponIcon(item.IconWeapon)}
                alt={getFullWeaponName(item)}
                onClick={() => markViewed(item.id)}
                style={{ cursor: 'pointer' }}
              />
              <RarityDot $color={getRarityColor(item.Rare)} />
            </Block>
          ))
        )}
      </div>
    </section>
  );
};

export default ItemStories;