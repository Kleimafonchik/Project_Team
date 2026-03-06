import { useState } from 'react';
import styled from 'styled-components';
import FavoriteDefault from '../../assets/images/FavoriteDefault.svg';
import FavoriteActive from '../../assets/images/FavoriteActive.svg';

import css from './HomePageStyles/ItemStories.module.css';

const Block = styled.div`
  width: 144px;
  height: 192px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Btn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: ${props => props.$active ? '#FFFBFF' : '#222A68'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemStories = () => {
  const [active, setActive] = useState(false);

  return (
    <section>
      <div className={css.buttons}>
        <Btn $active={active} onClick={() => setActive(!active)}>
          <img src={active ? FavoriteActive : FavoriteDefault} alt="Favorite" />
        </Btn>
      </div>
    </section>
  );
};

export default ItemStories;