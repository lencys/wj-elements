import clsx from 'clsx';
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import releases from './release-notes.json';

import styles from './styles.module.css';

interface Release {
  body: string;
  name: string;
  published_at: string;
  tag_name: string;
  type: string;
  version: string;
}

export default function ReleaseNotes(props: { [key: string]: any }) {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const isEnglish = currentLocale === 'en';
  const repoUrl = 'https://github.com/lencys/wj-elements';
  const releasesUrl = `${repoUrl}/releases`;

  if (releases.length === 0) {
    return [
      <p key="release-notes-empty">
        {isEnglish
          ? 'Release notes are not available yet. Publish a release or sync release data, then this page will show it automatically. You can follow published releases on '
          : 'Release notes zatiaľ nie sú k dispozícii. Po publikovaní releasu alebo synchronizácii release dát sa tu zobrazia automaticky. Publikované releasy môžeš sledovať na '}
        <a href={releasesUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>,
    ];
  }

  return (
    <article>
      <p className={styles.intro}>
        {isEnglish ? 'The complete release history for WebJET Elements is available ' : 'Kompletná história vydaní WebJET Elements je dostupná '}
        <a href={releasesUrl} target="_blank" rel="noopener noreferrer">
          on GitHub
        </a>
        {isEnglish ? '. The latest published changes are listed below.' : '. Najnovšie publikované zmeny nájdeš aj nižšie.'}
      </p>

      <p>
        {isEnglish
          ? 'This page is the changelog source shown in the documentation.'
          : 'Táto stránka je changelog zobrazený priamo v dokumentácii.'}
      </p>
      <div className={styles['release-notes']}>
        {releases.map((release: Release, index) => (
          <section
            key={release.tag_name}
            className={clsx(styles['release-note'], styles[`release-note-${release.type}`])}
          >
            <div className={styles['release-info']}>
              <div className={styles['release-header']}>
                <a href={`${releasesUrl}/tag/${release.tag_name}`} target="_blank" rel="noopener noreferrer">
                  <h2>
                    <span className={styles['release-version']}>{release.version}</span>
                  </h2>
                </a>
                <span className={styles['release-badge']}>{release.type}</span>
                {index === 0 ? (
                  <span className={clsx(styles['release-badge'], styles['release-badge-latest'])}>
                    {isEnglish ? 'Latest Production Version' : 'Aktuálna produkčná verzia'}
                  </span>
                ) : null}
              </div>
              <div className={styles['release-published']}>
                <h3>{release.published_at}</h3>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: release.body ?? '',
                }}
              ></div>
            </div>
          </section>
        ))}
      </div>
      <blockquote>
        {isEnglish ? 'To see more releases, visit ' : 'Ak chceš vidieť viac releaseov, pozri '}
        <a href={releasesUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </blockquote>
    </article>
  );
}
