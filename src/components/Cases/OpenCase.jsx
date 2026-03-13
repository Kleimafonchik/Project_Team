import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import css from './OpenCase.module.css';
import BoxCase from '../../assets/images/Boxcase.png';
import SecondLayerRareCase from '../../assets/images/SecondLayerRareCase.png';
import EpicBGFirst from '../../assets/images/EpocBGFirst.png';
import EpicBGSecond from '../../assets/images/EpicBGSecond.png';
import ArcaneBgFirst from '../../assets/images/ArcaneBgFirst.png';
import ArcaneBgSecond from '../../assets/images/ArcaneBgSecond.png';
import LegendBGFirst from '../../assets/images/LegendBGFirst.png';
import LegendBGSecond from '../../assets/images/LegendBGSecond.png';
import { casesData } from '../../casesData/casesData.js';

const OpenCase = () => {
  const { caseName } = useParams();
  const selectedCase = casesData.find(c => c.name === caseName);

  // Если кейс не найден
  if (!selectedCase) {
    return <div className={css.NotFound}>Кейс не найден</div>;;
  }

  const caseBackgrounds = {
    Rare: '#23204B',
    Epic: '#23204B',
    Arcane: '#23204B',
    Legend: '#23204B00',
    Glove: '#23204B00',
    Knife: '#23204B00',
  };

  const caseBg = caseBackgrounds[selectedCase.name] || caseBackgrounds.Rare;

  const caseSkinBackgrounds = {
    Rare: { color: '#23204B' },
    Epic: {
      color: '#23204B',
      image: `url(${EpicBGFirst}), url(${EpicBGSecond})`,
    },
    Arcane: {
      color: '#23204B',
      image: `url(${ArcaneBgFirst}), url(${ArcaneBgSecond})`,
    },
    Legend: {
      color: '#23204B00',
      image: `url(${LegendBGFirst}), url(${LegendBGSecond})`,
    },
    Glove: {
      color: '#23204B00',
      image: `url(${LegendBGFirst}), url(${LegendBGSecond})`,
    },
    Knife: {
      color: '#23204B00',
      image: `url(${LegendBGFirst}), url(${LegendBGSecond})`,
    },
  };
  const skinBg = selectedCase.skinBg || caseSkinBackgrounds[selectedCase.name] || caseSkinBackgrounds.Rare;

  return (
    <main className={css.OpenCaseWrap}>
      <div className={css.OptionCase}>
        <div className={css.Case}>
          <div className={css.Cover}
               style={{ backgroundImage: `url(${selectedCase.cover})` }}>
            <img src={selectedCase.weapon} alt={selectedCase.name} className={css.WeaponImg} />
            <div className={css.Tags}>
              {selectedCase.tags.map((tagName, i) => (
                <span key={i} className={css.Tag}>{tagName}</span>
              ))}
            </div>
          </div>
          <h2>{selectedCase.name}</h2>
          <div className={css.CasePrice}>
            <div className={css.PriceNow}><h3>{selectedCase.priceNow || '0'}$</h3></div>
            <div className={css.PriceBefore}><h3>{selectedCase.priceBefore || '0'}$</h3></div>
          </div>
        </div>

        {/* Кнопки открытия */}
        <div className={css.OptionsCase}>
          <div className={css.OpenCase}>
            <h3>OPEN CASE</h3>
            <button className={css.OpenBtn}>SPACE</button>
          </div>
          <div className={css.FastOpening}>
            <h3>FAST OPENING</h3>
            <button>SPACE</button>
          </div>
        </div>
      </div>

      {/* Контент кейса: список скинов */}
      <div className={css.CaseContent}>
        <div className={css.CaseContentTitle}>
          <img src={BoxCase} alt="Boxcase" />
          <h2>Case Content</h2>
        </div>
        <div className={css.CaseList}>
          {selectedCase.content.map((skin, idx) => (
            <div
              key={idx}
              className={css.CaseListItem}
              style={{
                backgroundColor:
                  skin.rarity === 'legendary'
                    ? '#E96363'
                    : skinBg.color || caseBg,
                backgroundImage:
                  skin.rarity === 'legendary'
                    ? undefined
                    : skinBg.image,
                backgroundSize: skinBg.image ? 'cover, cover' : undefined,
                backgroundRepeat: skinBg.image ? 'no-repeat, no-repeat' : undefined,
              }}
            >
              <div className={css.Price}><h3>{skin.price}$</h3></div>
              <img src={skin.image} alt={skin.name} className={css.WeaponImg} />
              <div className={css.CaseTitle}>
                <h3>{skin.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default OpenCase;
