import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class Home extends React.Component {
    render () {
        return (
            <section className="home">
                <h4>
                    <FormattedMessage
                        id="app.title"
                        defaultMessage="Этот ресур содержит несколько полезных инструментов для работы {icon}"
                        description="Текст приветствие"
                        values={{ icon: '🤓' }}
                    />
                </h4>
                <div className="row">
                    <div className="twelve columns centered-content">
                        <img className="main-img" src="https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif"/>
                    </div>
                </div>
            </section>
        )
    }
}
