import React from 'react';

export default class LangSwitch extends React.Component {
    render () {
        return (
            <button onClick={ this.props.toggleLang } className='langSwitcher'>
                {this.props.appLang}
            </button>
        )
    }
}
