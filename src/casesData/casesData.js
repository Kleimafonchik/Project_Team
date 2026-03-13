import CaseRare from '../assets/images/CaseRare.png';
import CaseEpic from '../assets/images/CaseEpic.png';
import CaseArcane from '../assets/images/CaseArcane.png';
import CaseLegend from '../assets/images/CaseLegend.png';
import CaseGlove from '../assets/images/CaseGlove.png';
import CaseKnife from '../assets/images/CaseKnife.png';

import RareWeapon from '../assets/images/RareWeapon.svg';
import EpicWeapon from '../assets/images/EpicWeapon.svg';
import ArcaneWeapon from '../assets/images/ArcaneWeapon.svg';
import LegendWeapon from '../assets/images/LegendWeapon.svg';
import GloveWeapon from '../assets/images/GloveWeapon.svg';
import KnifeWeapon from '../assets/images/KnifeWeapon.svg';
import AwpDragonLor from '../assets/images/Awp-Dragon-Lor.svg';

import MAC10HotRod from '../assets/images/MAC10_HotRod.png'
import USP_BluePrint from '../assets/images/USP-S_BluePrint.png'
import FiveSeven_Nitro from '../assets/images/Five-seveN_Nitro.png'
import P2000_GridTape from '../assets/images/P2000_Grid-Tape.png'
import Glock18_Fade from '../assets/images/Glock18_Fade.png'
import DesertEagle_Blaze from '../assets/images/DesertEagle_Blaze.png'
import USP_TopSecret from '../assets/images/USP_TopSecret.png'
import M4A4_TopSecret from '../assets/images/M4A4_TopSecret.png'
export const casesData = [
    {
        name: "Rare",
        cover: CaseRare,    // путь к картинке
        weapon: RareWeapon, // картинка оружия
        tags: ["Top", "Sales"],           // теги
        priceNow: 500,       // текущая цена 
        priceBefore: 150,    // старая цена 
        content: [                       // массив скинов
            {
                name: "MAC-10 | Hot Rod",
                price: 480,
                rarity: "rare",
                image: MAC10HotRod
            },
            {
                name: "USP‑S | Blueprint",
                price: 60,
                rarity: "rare",
                image: USP_BluePrint
            },
            {
                name: "Five‑SeveN | Nitro",
                price: 70,
                rarity: "rare",
                image: FiveSeven_Nitro
            },
            {
                name: "P2000 | Grip Tape",
                price: 5,
                rarity: "rare",
                image: P2000_GridTape
            }

        ]
    },
    {
        name: "Epic",
        cover: CaseEpic,
        weapon: EpicWeapon,
        tags: [],
        priceNow: 820,
        priceBefore: 1500,
        content: [
            {
                name: "Glock‑18 | Fade",
                price: 3300,
                rarity: "epic",
                image: Glock18_Fade
            }, {
                name: "Desert Eagle | Blaze",
                price: 1400,
                rarity: "epic",
                image: DesertEagle_Blaze
            }, {
                name: "USP‑S | Top Secret",
                price: 200,
                rarity: "epic",
                image: USP_BluePrint
            }, {
                name: "M4A1‑S | Top Secret",
                price: 400,
                rarity: "epic",
                image: M4A4_TopSecret
            },
        ]
    },
    {
        name: "Arcane",
        cover: CaseArcane,
        weapon: ArcaneWeapon,
        tags: ["New"],
        priceNow: 1500,
        priceBefore: 2000,
        content: [
            {
                name: "AK-47 | Case Hardened ",
                price: 400,
                rarity: "arcane",
                image: M4A4_TopSecret
            }
        ]
    },
    {
        name: "Legend",
        cover: CaseLegend,
        weapon: LegendWeapon,
        tags: [],
        priceNow: 2200,
        priceBefore: 2600,
        content: [
            {
                name: "AK-47 | Empress",
                price: 400,
                rarity: "legend",
                image: M4A4_TopSecret
            }
        ]
    },
    {
        name: "Glove",
        cover: CaseGlove,
        weapon: GloveWeapon,
        tags: [],
        priceNow: 2500,
        priceBefore: 3000,
        content: [
            {
                name: "Omega",
                price: 400,
                rarity: "Glove",
                image: M4A4_TopSecret
            }
        ]
    }, {
        name: "Knife",
        cover: CaseKnife,
        weapon: KnifeWeapon,
        tags: [],
        priceNow: 4000,
        priceBefore: 6000,
        content: [
            {
                name: "Talon Knife | Fade",
                price: 400,
                rarity: "knife",
                image: M4A4_TopSecret
            }
        ]
    }
];
