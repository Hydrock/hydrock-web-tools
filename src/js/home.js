import React from 'react';

export default class Home extends React.Component {
    render () {
        return (
            <section className="home">
                <h4>
                    Этот ресур содержит несколько полезных инструментов для работы 🤓
                </h4>
                <div className="row">
                    <div className="twelve columns centered-content">
                        <img src="https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif"/>
                    </div>
                </div>
            </section>
        )
    }
}
