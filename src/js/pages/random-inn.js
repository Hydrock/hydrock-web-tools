import React from 'react';
import { FormattedMessage } from 'react-intl';
import { innfl, innul, ogrn, kpp, snils } from '../helpers/genarate-inn.js';

export default class RandomInn extends React.Component {
    state = {
        innfl: '',
        innul: '',
        ogrn: '',
        kpp: '',
        snils: ''
    }

    genarateInnFL = () => {
        this.setState({ innfl: innfl() })
    }

    genarateInnUL = () => {
        this.setState({ innul: innul() })
    }

    genarateOGRN = () => {
        this.setState({ ogrn: ogrn() })
    }

    genarateKPP = () => {
        this.setState({ kpp: kpp() })
    }

    genarateSNILS = () => {
        this.setState({ snils: snils() })
    }

    generateAll = () => {
        this.setState({
            innfl: innfl(),
            innul: innul(),
            ogrn: ogrn(),
            kpp: kpp(),
            snils: snils()
        })
    }

    // renderGenerateSomething = (func, buttonText, stateValue, placeholder, maxLength) => {
    //     return (
    //         <div className="row">
    //             <div className="three columns">
    //                 <button onClick={ func }>
    //                     { buttonText }
    //                 </button>
    //             </div>
    //             <div className="three columns">
    //                 <input
    //                     type='text'
    //                     maxLength={ maxLength }
    //                     placeholder={ placeholder }
    //                     value={ stateValue }
    //                     readOnly={ true }
    //                 />
    //             </div>
    //         </div>
    //     )
    // }

    render () {
        return (
            <section className="home">
                <h4>
                    <FormattedMessage
                        id="app.page.random-inn.title"
                        defaultMessage="Генератор ИНН"
                        description="Заголовок Страницы - Генератор ИНН"
                    />
                </h4>

                <div className="row">
                    <div className="three columns">
                        <button onClick={ this.generateAll }>
                            Сгенерировать все
                        </button>
                    </div>
                </div>

                <hr/>

                <div className="row">
                    <div className="three columns">
                        <button onClick={ this.genarateInnFL }>
                            Сгенерировать ИНН ФЛ/ИП
                        </button>
                    </div>
                    <div className="three columns">
                        <input
                            type='text'
                            maxLength='12'
                            placeholder="ИНН ФЛ/ИП"
                            value={ this.state.innfl }
                            readOnly={ true }
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="three columns">
                        <button onClick={ this.genarateInnUL }>
                            Сгенерировать ИНН ЮЛ
                        </button>
                    </div>
                    <div className="three columns">
                        <input
                            type='text'
                            maxLength='12'
                            placeholder="ИНН ЮЛ"
                            value={ this.state.innul }
                            readOnly={ true }
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="three columns">
                        <button onClick={ this.genarateOGRN }>
                            Сгенерировать ОГРН
                        </button>
                    </div>
                    <div className="three columns">
                        <input
                            type='text'
                            maxLength='13'
                            placeholder="ОГРН"
                            value={ this.state.ogrn }
                            readOnly={ true }
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="three columns">
                        <button onClick={ this.genarateKPP }>
                            Сгенерировать КПП
                        </button>
                    </div>
                    <div className="three columns">
                        <input
                            type='text'
                            maxLength='9'
                            placeholder="КПП"
                            value={ this.state.kpp }
                            readOnly={ true }
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="three columns">
                        <button onClick={ this.genarateSNILS }>
                            Сгенерировать СНИЛС
                        </button>
                    </div>
                    <div className="three columns">
                        <input
                            type='text'
                            maxLength='11'
                            placeholder="СНИЛС"
                            value={ this.state.snils }
                            readOnly={ true }
                        />
                    </div>
                </div>
            </section>
        )
    }
}
