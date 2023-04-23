import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header } from './components/scripts/header';
import { Footer } from './components/scripts/footer';
import {SubmenuProvider} from "./contexts/SubmenuContext";
import Main from "./components/scripts/main";
import {BrowserRouter} from "react-router-dom"




import './components/Main.scss';
import './components/common/global.scss';
import './components/common/resets.scss';

const rootElement = document.getElementById('root');


if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <BrowserRouter>
            <SubmenuProvider>
                <Header />
                <Main  />
                <Footer />
            </SubmenuProvider>
        </BrowserRouter>
    );
} else {
  // rootElement não foi encontrado. Talvez seja necessário aguardar o carregamento da página.
}
