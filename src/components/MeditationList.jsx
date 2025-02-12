import { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import arrowDown from '../assets/sipka-rozklik.svg';
import arrowUp from '../assets/sipka-zpet.svg';

const meditationTypes = [
  {
    title: 'Vipassaná',
    shortDesc: (
      <>
        <p>
          Meditace vhledu. Zaměření na dech a pozorování myšlenek, emocí a
          tělesných pocitů bez hodnocení. Pomáhá prohloubit sebepoznání a
          snižovat negativní myšlenkové vzorce. Dlouhodobá praxe vede ke
          zklidnění mysli a vyšší emoční stabilitě.
        </p>
      </>
    ),
    longDesc: '',
  },
  {
    title: 'Zazen',
    shortDesc: (
      <>
        <p>
          Zenová meditace. Sed v tichu s vnímáním přítomného okamžiku.
          Soustředění na dech nebo přirozené plynutí myšlenek bez lpění na nich.
          Praktikující se učí přijímat myšlenky bez hodnocení a nechávat je
          volně plynout. Posiluje vnitřní klid, mentální odolnost a schopnost
          soustředění.
        </p>
      </>
    ),
    longDesc: '',
  },
  {
    title: 'Body Scan',
    shortDesc: (
      <>
        <p>
          Vědomá pozornost na své tělo a jeho uvolnění. Pomáhá snižovat stres,
          zlepšuje propojení mysli a těla, podporuje relaxaci a kvalitní spánek.
          Je to vědecky podložená metoda využívaná v moderní psychologii
          (terapie MBSR, MBCT). Je také často součástí joga nidry.
        </p>
      </>
    ),
    longDesc: '',
  },
  {
    title: 'Meditace dechu a Pránájáma',
    shortDesc: (
      <>
        <p>
          <strong>Dechová meditace</strong> vám umožní plně se soustředit na
          přítomný okamžik prostřednictvím vědomého dýchání. Soustředíte se na
          nádech a výdech.
          <br />
          <strong>Pránájáma</strong> zahrnuje různé techniky kontrolovaného
          dýchání (např. Nadi Shodhana, Bhastrika) pro zklidnění a harmonizaci
          těla a mysli. Pránájáma sama o sobě není meditace, ale často se
          využívá jako příprava na hlubší meditaci nebo jako metoda k řízení
          emocí.
          <br />
          Obě metody zlepšují okysličení mozku, regulují stresovou reakci a
          podporují soustředění.
        </p>
      </>
    ),
    longDesc: '',
  },
  {
    title: 'Jóga Nidra',
    shortDesc: (
      <>
        <p>
          Hluboká a velmi účinná relaxační technika, kdy tělo spí, ale mysl
          zůstává bdělá. Pomáhá při stresu a úzkosti. Vede k hlubokému uvolnění,
          obnově energie a zlepšení spánku.
        </p>
        <p>
          <strong>Dozvědět se více </strong>
        </p>
      </>
    ),
    longDesc: (
      <>
        <p>
          Optimální délka jóga nidry závisí na individuálních potřebách a
          časových možnostech, ale obecně platí:
        </p>
        <ul>
          <li>
            <b>10–20 minut</b>→ Rychlá relaxace, ideální pro snížení stresu a
            obnovení energie během dne.{' '}
            <div className="test-jogaN">
              <AudioPlayer />
            </div>
          </li>
          <li>
            <b>20–40 minut</b> → Hlubší regenerace těla i mysli, lepší spánek,
            snížení úzkosti a stresu.{' '}
          </li>
          <li>
            <b>40–60 minut</b> → Nejintenzivnější účinek, hluboký reset
            nervového systému, posílení kreativity a emoční rovnováhy.
          </li>
          <p>
            I krátká praxe přináší benefity, ale pokud chcete plně využít její
            potenciál, 30–45 minut je ideální. Už jedna hodina jóga nidry může
            nahradit 3–4 hodiny běžného spánku! Důležité je pravidelnost – i pár
            minut denně může změnit kvalitu tvého života.
          </p>
        </ul>
      </>
    ),
  },
  {
    title: 'Mantra meditace',
    shortDesc: (
      <>
        <p>
          Opakování posvátných slov nebo zvuků (např. „Om“, „So Hum, Sata
          Nama“). Zlepšuje koncentraci a může podporovat neuroplasticitu.
        </p>
        <p>
          <strong>Dozvědět se více </strong>
        </p>
      </>
    ),
    longDesc: (
      <>
        <div>
          <p className="headlineMedit">Sata Nama meditace</p>
          <p>12 minut denně.</p>
          <p>
            Opakování mantry „Sa Ta Na Ma“ spojené s pohybem prstů (mudry).
            Symbolizuje cyklus života (SA = zrození, TA = život, NA = smrt, MA =
            znovuzrození). Výzkumy (www.alzheimerprevention.org) opakovaně
            potvrzují významné zlepšení kognitivních funkcí u pacientů s
            Alzheimerovou chorobou díky této meditaci. Má vliv na paměť,
            schopnost vybavovat si informace, logické myšlení, plynulost řeči,
            posílí se psychické zdraví, včetně zmírnění nebo vymizení úzkosti,
            deprese a stresu. Nervovou soustavu revitalizuje kombinace několika
            aktivit u této metody: zpívání, stimulování bříšek prstů a
            vizualizace.
          </p>
          <p>
            <strong>Jak na to?</strong> Sedneme si rovně se vzpřímenou páteří,
            ideálně do tureckého sedu, ruce volně položené na nohou. Oči
            zavřené. Na 4 slabiky „sa ta na ma“ se pravidelně střídají 4 pozice
            prstů na obou rukách (mudry):
            <ul>
              <li>SA – palec + ukazováček (symbolizuje vědomí a poznání)</li>
              <li>TA – palec + prostředníček (symbolizuje proměnu)</li>
              <li>NA – palec + prsteníček (symbolizuje energii života)</li>
              <li>MA – palec + malíček (symbolizuje regeneraci)</li>
            </ul>
            Dýcháme přirozeně. Představujeme si paprsek světla procházející do
            bodu mezi obočím (třetí oko). Nádech nosem → na výdechu opakujte
            mantru Sa Ta Na Ma. V první fázi zpívejte s nahrávkou nahlas, poté
            šeptem, poté v duchu , poté zase šeptem a naposledy nahlas. Nemusíte
            zpívat hlasitě, ale mělo by to rezonovat. Středně hlasitý zpěv je
            optimální.
          </p>
          <a
            href="https://www.youtube.com/watch?v=jfKEAiwrgeY"
            className="button"
            target="_blank"
          >
            Můžete vyzkoušet zde
          </a>
        </div>
        <div className="next">
          <p className="headlineMedit">OM Chanting</p>
          <p>5–10 minut denně.</p>
          <p>
            OM je prvotní zvuk vesmíru, spojovaný s harmonií, jednotou a vibrací
            celého těla i mysli. Benefity OM Chantingu jsou okamžité uvolnění
            stresu – OM vibrace zpomalují srdeční tep a snižují kortizol.
            Zlepšení dýchání a okysličení – Práce s dechem podporuje průtok
            kyslíku k plodu. Jemná vibrace pro dítě – Plod vnímá tyto zvukové
            vlny jako harmonizační signál. Jednoduchost – Stačí opakovaně zpívat
            OM na jeden dlouhý výdech. Om Chanting je skupinová praxe, ale
            můžete si ji vyzkoušet i sami doma.
          </p>
          <p>
            <strong>Jak na to?</strong> Sedneme si rovně se vzpřímenou páteří,
            ideálně do tureckého sedu, ruce volně položené na nohou. Oči
            zavřené. Nádech nosem → Výdech OooooMmmmmm. Nechte vibraci projít
            celým tělem. Nemusíte zpívat hlasitě, ale mělo by to rezonovat.
            Středně hlasitý zpěv je optimální.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Loving-kindness',
    shortDesc: (
      <>
        <p>
          Rozvíjení laskavosti k sobě i druhým skrze pozitivní afirmace a přání
          štěstí. Pomáhá nalézt oporu, bezpečí a štěstí v sobě.Zmírňuje
          negativní emoce a posiluje soucit, podporuje emoční pohodu a sociální
          propojení. Pomáhá při depresích a zvyšuje celkovou spokojenost.
        </p>
      </>
    ),
    longDesc: '',
  },
];

export default function MeditationList() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="meditation-list">
      {meditationTypes.map((meditation, index) => (
        <div
          key={index}
          className={`meditation-item ${openIndex === index ? 'expanded' : ''}`}
        >
          {/* Nadpis */}
          <p className="meditation-title">{meditation.title}</p>

          {/* Krátký popis */}
          <div className="meditation-short">{meditation.shortDesc}</div>

          {/* Tlačítko na rozbalení */}
          {meditation.longDesc && (
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="toggle-btn"
            >
              <img
                src={openIndex === index ? arrowUp : arrowDown}
                alt="Toggle description"
                className="toggle-icon"
              />
            </button>
          )}

          {/* Detailní popis (zobrazuje se jen po rozbalení) */}
          {openIndex === index && meditation.longDesc && (
            <div className="meditation-long">{meditation.longDesc}</div>
          )}
        </div>
      ))}
    </div>
  );
}
