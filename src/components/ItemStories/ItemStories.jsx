import { useMemo, useState } from 'react';
import css from './ItemStories.module.css';

import ItemStoriesButtons from './ItemStoriesButtons';
import ItemStoriesList from './ItemStoriesList';

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
      <ItemStoriesList items={displayed} onItemView={markViewed} />
    </section>
  );
};

export default ItemStories;