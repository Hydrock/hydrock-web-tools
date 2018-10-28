import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import * as Cookies from "js-cookie";

import { IntlProvider } from 'react-intl';
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';
addLocaleData([...locale_en, ...locale_ru]);

import * as messages_ru from './i18n/ru.json';
import * as messages_en from './i18n/en.json';

import Home from './home.js';
import About from './about.js';
import Navigation from './nav.js';
import Diff from './pages/diff.js';
import DecodeBase64 from './pages/base64decode.js';
import LangSwitch from './components/lang-switch.js';
import RandomInn from './pages/random-inn.js';

const language = Cookies.get('language') || navigator.language.split(/[-_]/)[0];  // language without region code;

const messages = {
    'en': messages_en,
    'ru': messages_ru
}

class App extends React.Component {
    state = {
        appLang: language
    }

    toggleLang = () => {
        if (this.state.appLang === 'ru') {
            this.setState({appLang: 'en'});
            Cookies.set('language', 'en', { expires: 30 });
            document.getElementsByTagName('html')[0].lang = 'en';
        } else {
            this.setState({appLang: 'ru'});
            Cookies.set('language', 'ru', { expires: 30 });
            document.getElementsByTagName('html')[0].lang = 'ru';
        }
    }

    componentDidMount = () => {
        document.getElementsByTagName('html')[0].lang = language;
    }

    render () {
        const { appLang } = this.state;
        return (
            <IntlProvider locale={ appLang || language } messages={messages[appLang || language]} defaultLocale={'ru'}>
                <HashRouter>
                    <div>
                        <LangSwitch toggleLang={this.toggleLang} appLang={this.state.appLang}/>
                        <Navigation/>
                        <div className="container">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/diff" component={Diff} />
                            <Route exact path="/base64" component={DecodeBase64} />
                            <Route exact path="/random-inn" component={RandomInn} />
                        </div>
                    </div>
                </HashRouter>
            </IntlProvider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));