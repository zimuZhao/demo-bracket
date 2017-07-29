'use strict';

import React from 'react';
import {hashHistory} from 'react-router';
import './pageheader.css';

export default class Pageheader extends React.Component {

    render() {

        return (

            <div className="pageheader">
                <h2>
                    {hashHistory.getCurrentLocation().pathname.split('/')[1]}
                    <span>{hashHistory.getCurrentLocation().pathname.split('/')[2]}</span>
                </h2>
            </div>

        )

    }

}