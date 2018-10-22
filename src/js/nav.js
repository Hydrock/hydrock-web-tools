import React from 'react';
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
    render () {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/diff">Diff</Link>
                    </li>
                    <li>
                        <Link to="/about">О нас</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
