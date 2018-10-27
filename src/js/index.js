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

import Home from './home.js';
import About from './about.js';
import Navigation from './nav.js';
import Diff from './helpers/diff.js';
import DecodeBase64 from './helpers/base64decode.js';
import LangSwitch from './components/lang-switch.js';

const language = Cookies.get('language') || navigator.language.split(/[-_]/)[0];  // language without region code;

const messages = {
    'en': {
        'app.title': "This resource contains several useful tools for working. {icon}",
        'app.navigation.link.main': 'Main',
        'app.navigation.link.about': 'About Us',
        'app.about.title': 'About Us? {icon}',

        'app.diff.title': 'We generate the difference in delivery versions (for work)',
        'app.diff.value_1': 'Insert version text from Jira',
        'app.diff.value_2': 'Result',
        'app.diff.value_3': 'Show different versions',

        'app.page.base64.value_1': 'Insert the original data (base64 string to decode, or string to encode in base64)',
        'app.page.base64.value_2': 'Initial line',
        'app.page.base64.value_3': 'Result',
    },
    'ru': {
        "app.title": "Этот ресур содержит несколько полезных инструментов для работы. {icon}",
        'app.navigation.link.main': 'Главная',
        'app.navigation.link.about': 'О нас',
        'app.about.title': 'О нас? так еще пишут? {icon}',

        'app.diff.title': 'Генирируем разницу в версиях поставки (для работы)',
        'app.diff.value_1': 'Вставь версии из Jira',
        'app.diff.value_2': 'Результат',
        'app.diff.value_3': 'Показать различия версий',

        'app.page.base64.value_1': 'Вставьте исходные данные (base64 строку для декодирования, или строку для кодирования в base64)',
        'app.page.base64.value_2': 'Иходная строка',
        'app.page.base64.value_3': 'Результат',
    }
}

class App extends React.Component {
    state = {
        appLang: language
    }

    toggleLang = () => {
        if (this.state.appLang === 'ru') {
            this.setState({appLang: 'en'});
            Cookies.set('language', 'en', { expires: 30 });
        } else {
            this.setState({appLang: 'ru'});
            Cookies.set('language', 'ru', { expires: 30 });
        }
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
                        </div>
                    </div>
                </HashRouter>
            </IntlProvider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));