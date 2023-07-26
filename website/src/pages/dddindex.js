/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

// interface Props {
//   readonly recentPosts: readonly { readonly content: Content }[];
// }

const features = [
  {
    title: 'Zostavte komponent',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <p>Zostavte každý komponent izolovane a definujte jeho stavy. Začnite v malom.</p>
        <ul>
          <li>Select</li>
          <li>Tlačidlo</li>
          <li>Input</li>
          <li>Tooltip</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Zložené komponenty',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        <p>Skladajte malé komponenty dohromady, aby ste postupne zvyšovali komplexitu a vytvárali tak nové funkcie.</p>
        <ul>
          <li>Formulár</li>
          <li>Hlavička</li>
          <li>Zoznam</li>
          <li>Tabuľka</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Zostavte stránky',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        <p>Pridajte stránky do svojej aplikácie prepojením údajov a prepojením obchodnej logiky. Využite jedinečnú možnosť routingu a tak prepojte vaše jednotlivé stránky.</p>
        <ul>
          <li>Domovská stránka</li>
          <li>Stránka nastavení</li>
          <li>Profilová stránka</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Integrujte stránky do svojho projektu',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        <p>Pridajte stránky do svojej aplikácie prepojením údajov a prepojením obchodnej logiky. Využite jedinečnú možnosť routingu a tak prepojte vaše jednotlivé stránky.</p>
        <ul>
          <li>Webová aplikácia</li>
          <li>Dokumentačná stránka</li>
        </ul>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

console.log(Content);
export default function Home() {

  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">

      <div className="container d-flex">
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg', styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
                Get Started
              </Link>
            </div>
          </div>
        </header>
        <div className={clsx(styles.heroBanner)}>

          {/*{Content}*/}

          <h3>Novinky</h3>
          <div className="card">
            <div className="card__header d-flex">
              <h3>Nunc nisi turpis</h3>
              <time className="card__date">12. 12. 2020</time>
            </div>
            <div className="card__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi turpis, malesuada a lacus id, eleifend aliquet lectus. In eros ante, pulvinar eu lacinia nec, facilisis at ex. Mauris scelerisque non augue non iaculis.</div>
          </div>

          <div className="card">
            <div className="card__header d-flex">
              <h3>Lorem ipsum dolor sit amet</h3>
              <time className="card__date">12. 12. 2020</time>
            </div>
            <div className="card__body">In eros ante, pulvinar eu lacinia nec, facilisis at ex. Mauris scelerisque non augue non iaculis.</div>
          </div>
        </div>

      </div>
      <section className="why">
        <div className="containers">
          <div className="bg"></div>
          <h2>Prečo web komponenty</h2>
          <p>Moderne užívateľské rozhrania sú komplikovanejšie ako kedykoľvek predtým. Ľudia očakávajú zaujímavé a personalizované skúsenosti, ktoré im budú poskytované na rôznych zariadeniach. To znamená, že vývojári frontendu a dizajnéri musia do rozhraní vnášať viac logiky.</p>

          <p>Avšak rozhrania sa stávajú nepohodlnými, keď aplikácie rastú. Veľké rozhrania sú krehké, ťažko ladené a časovo náročné pri dodávaní. Ich rozloženie do modulárnej štruktúry umožňuje jednoduchšiu výstavbu robustných a pritom flexibilných užívateľských rozhraní.</p>

          <p>Komponenty umožňujú výmenu jednotlivých častí tým, že izolujú stav od logiky aplikácie. To znamená, že môžete rozložiť zložité obrazovky na jednoduché komponenty. Každý komponent má dobre definované rozhranie (API) a pevnú sériu stavov, ktoré sú simulované. Toto umožňuje, aby sa komponenty rozoberali a znova zostavovali pre vytvorenie rôznych užívateľských rozhraní.</p>
        </div>
      </section>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="d-flex flex-direction-column align-items-center">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
