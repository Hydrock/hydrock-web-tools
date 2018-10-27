import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class About extends React.Component {
    render () {
        return (
            <div>
                <h4>
                    
                    <FormattedMessage
                        id="app.about.title"
                        defaultMessage="О нас? так еще пишут? {icon}"
                        description="О нас"
                        values={{ icon: '😳' }}
                    />
                </h4>
                <div className="row">
                    <div className="twelve columns centered-content">
                        <img className="main-img" src="https://media.giphy.com/media/l2YWwvuPQYndJTxGo/giphy.gif"/>
                    </div>
                </div>
            </div>
        )
    }
}
