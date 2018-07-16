import React from 'react';
import imgHello from './hello.gif';
import imgIcon from './icon.png';
import './main.less';
import InvoiceForm from './invoice/InvoiceForm';
import BootstrapForm from './BootstrapForm';
import Cars from './cars';

export default () =>
    <div>
        {/*<div className="hello">*/}
            {/*Hello world!*/}
            {/*<img src={imgHello} width="300px" alt="hello world" />*/}
            {/*<img src={imgIcon} role="presentation" />\*/}

        {/*</div>*/}
        <div className="clearfix"></div>
        <h2>Formular pro pridani auta</h2>
        <Cars />
        {/*<h2>Fakturacni formular</h2>*/}
        {/*<InvoiceForm />*/}
        {/*<h2>Bootstrap form</h2>*/}
        {/*<BootstrapForm />*/}
    </div>;
