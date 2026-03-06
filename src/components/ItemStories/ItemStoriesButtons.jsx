import styled from 'styled-components';
import css from './ItemStories.module.css';

import FavoriteDefault from '../../assets/images/FavoriteDefault.svg';
import FavoriteActive from '../../assets/images/FavoriteActive.svg';
import LikeDefault from '../../assets/images/LikeDefault.svg';
import LikeActive from '../../assets/images/LikeActive.svg';
import ClockDefault from '../../assets/images/ClockDefault.svg';
import ClockActive from '../../assets/images/ClockActive.svg';

const Btn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: ${props => props.$active ? '#FFFBFF' : '#222A68'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s ease, transform 0.3s ease;
  cursor: pointer;
  &:hover { transform: scale(1.08); }
`;

const ItemStoriesButtons = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className={css.buttons}>
      <Btn
        $active={activeFilter === 'favorite'}
        onClick={() => setActiveFilter('favorite')}
        title="Favorites"
      >
        <img
          src={activeFilter === 'favorite' ? FavoriteActive : FavoriteDefault}
          alt="Favorite"
        />
      </Btn>

      <Btn
        $active={activeFilter === 'like'}
        onClick={() => setActiveFilter('like')}
        title="Likes"
      >
        <img
          src={activeFilter === 'like' ? LikeActive : LikeDefault}
          alt="Like"
        />
      </Btn>

      <Btn
        $active={activeFilter === 'clock'}
        onClick={() => setActiveFilter('clock')}
        title="Viewed"
      >
        <img
          src={activeFilter === 'clock' ? ClockActive : ClockDefault}
          alt="Clock"
        />
      </Btn>
    </div>
  );
};

export default ItemStoriesButtons;