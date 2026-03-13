import React from 'react';
import { Link } from 'react-router-dom';
import css from './Cases.module.css';
import CasesLine from '../../assets/images/CaseLine.svg';
import TopTag from '../../assets/images/Top.svg';
import SalesTag from '../../assets/images/Sales.svg';

import { casesData } from '../../casesData/casesData.js';

const Cases = () => {
  return (
    <main className={css.CasesWrap}>
      <div className={css.CasesLine}>
        <img src={CasesLine} alt="Line" />
        <div className={css.GreenLine}></div>
      </div>

      <div className={css.CasesList}>
        {casesData.map((item, index) => (
          <div className={css.CaseItem} key={index}>
            <Link to={`/open-case/${item.name}`}>
              <div
                className={css.Cover}
                style={{ backgroundImage: `url(${item.cover})` }}
              >
                <img src={item.weapon} alt="Weapon" className={css.WeaponImg} />
                <div className={css.Tags}>
                  {item.tags.map((tagName, i) => (
                    <img key={i}
                         src={tagName === "Top" ? TopTag : SalesTag}
                         alt="tag"
                         className={css.Tag}
                         width={80}
                         height={40} />
                  ))}
                </div>
              </div>
              <h2>{item.name}</h2>
              <div className={css.CasePrice}>
                <div className={css.PriceNow}>
                  <h3>{item.priceNow || '0'}$</h3>
                </div>
                <div className={css.PriceBefore}>
                  <h3>{item.priceBefore || '0'}$</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Cases;
