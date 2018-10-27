import React from 'react';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import Loadable from 'react-loadable';

function Loading() {
    return <span>...</span>;
}

const LoadableComponentLogo = Loadable({
    loader: () => import('./logo.js'),
    loading: Loading,
});


export default class Navigation extends React.Component {
    render () {
        return (
            <nav>
                <LoadableComponentLogo/>
                <ul>
                    <li>
                        <Link to="/">
                            <FormattedMessage
                                id="app.navigation.link.main"
                                defaultMessage="Главная"
                                description="Главная"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="/diff">Diff</Link>
                    </li>
                    <li>
                        <Link to="/base64">Base64</Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <FormattedMessage
                                id="app.navigation.link.about"
                                defaultMessage="О нас"
                                description="О нас"
                            />
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
