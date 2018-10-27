import React from 'react';
import { Link } from "react-router-dom";

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
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/diff">Diff</Link>
                    </li>
                    <li>
                        <Link to="/base64">Base64</Link>
                    </li>
                    <li>
                        <Link to="/about">О нас</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
