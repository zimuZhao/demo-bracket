'use strict';

import React from 'react';

export default class Help extends React.Component { //定义组件，继承父类
    constructor(props) { //定义App类的构造函数
        super(props); //调用父类的构造函数
    }

    render() {
        return (

            <div>
                <h1>Help!</h1>
                <h3>The page you are looking for has not been found!</h3>
                <h4>The page you are looking for might have been removed, had its name changed, or unavailable.
                    <br/>Maybe you could try a search:</h4>
            </div>

        );
    }

}
