import React from 'react';
import imgHello from './hello.gif';
import imgIcon from './icon.png';
import './main.less';
import AddCar from './invoice/form';

import Cars from './cars';

export default () =>
    <div>
        <div className="hello">
            Hello world!
            <img src={imgHello} width="300px" alt="hello world" />
            <img src={imgIcon} role="presentation" />\

        </div>
        <h2>Formular pro pridani auta</h2>
        <Cars />
    </div>;
