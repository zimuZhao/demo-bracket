'use strict';
import '~/assets/css/style.default.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
// component
import Leftpanel from '~/components/leftpanel';
import Rightpanel from '~/components/rightpanel';
import Headerbar from '~/components/headerbar';
import Pageheader from '~/components/pageheader';
//plugin
import '~/vendor/toggles.min'
import '~/vendor/retina.min'
import '~/vendor/jquery.cookies'
import '~/vendor/jquery.nicescroll.min'
import '~/custom'

/**
 * preloader有点问题  只能首次刷新出现
 * @type {string}
 */
export const DOMAIN = '/api/';

class IndexWrapper extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                {/*<!-- Preloader -->*/}
                <div id="preloader">
                    <div id="status">
                        <i className="fa fa-spinner fa-spin"></i>
                    </div>
                </div>

                <Leftpanel/>

                <div className="mainpanel">
                    <Headerbar/>
                    <Pageheader/> {this.props.children}
                </div>

                <Rightpanel/>
            </section>
        )
    }
}

class Main extends React.Component {

    render() {
        var router = (
            <Router history={hashHistory}>
                <Route path="/" component={IndexWrapper}>

                    <IndexRoute getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require("~/views/Home").default)
                            }, "home")
                        }}/>

                    <Route path="user/profile" getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require("~/views/Uprofile").default)
                            }, "uprofile")
                        }}/>
                    <Route path="user/change-password" getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require("~/views/UchangePwd").default)
                            }, "uchangepwd")
                        }}/>
                    <Route path="home" getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require("~/views/Home").default)
                            }, "home")
                        }}/>
                    <Route path="list" getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require("~/views/List").default)
                            }, "list")
                        }}/>
                    <Route path="list/add" getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require("~/views/ListAdd").default)
                            }, "list-add")
                        }}/>
                    <Route path="modals" getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require("~/views/Modals").default)
                            }, "modals")
                        }}/>
                    <Route path="forms/general" getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require('~/views/FormsGeneral').default)
                            }, "forms-general")
                        }
                    }/>
                    <Route path="forms/table" getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require('~/views/FormsTable').default)
                            }, "forms-table")
                        }
                    }/>
                    <Route path="forms/uregister" getComponent={
                        (nextState, callback) => {
                            require.ensure([], (require) => {
                                callback(null, require('~/views/Uregister').default)
                            }, "uregister")
                        }
                    }/>
                </Route>
                <Route path="user/help" getComponent={
                    (nextState, callback) => {
                        require.ensure([], (require) => {
                            callback(null, require('~/views/Uhelp').default)
                        }, "uhelp")
                    }
                }/>
            </Router>
        );
        return router;
    }

}

ReactDOM.render(<Main/>, document.getElementById('App'));
