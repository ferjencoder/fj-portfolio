
import React from 'react';
import ReactDOM from 'react-dom/client';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import { FerJensApp } from './FerJensApp.jsx';
import './index.css';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
// import global_de from './translations/de/global.json';
// import global_se from './translations/se/global.json';


i18next.init( {
  interpolation: { escapeValue: false },
  lng: "es",
  fallbackLng: "es",
  resources: {
    es: {
      global: global_es,
      translation: global_es
    },
    en: {
      global: global_en,
      translation: global_en
    },
    // de: {
    //   global: global_de,
    //   translation: global_de
    // },
    // se: {
    //   global: global_se,
    //   translation: global_se
    // }
  }
} );

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <FerJensApp />
    </I18nextProvider>
  </React.StrictMode>,
)
