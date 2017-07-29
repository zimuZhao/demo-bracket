'use strict';

import React from 'react';
import './rightpanel.css';

export default class Rightpanel extends React.Component {

    render() {
        return (

            <div className="rightpanel">
                {/*<!-- Nav tabs -->*/}
                <ul className="nav nav-tabs nav-justified">
                    <li className="active">
                        <a href="#rp-alluser" data-toggle="tab">
                            <i className="fa fa-users"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#rp-favorites" data-toggle="tab">
                            <i className="fa fa-heart"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#rp-history" data-toggle="tab">
                            <i className="fa fa-clock-o"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#rp-settings" data-toggle="tab">
                            <i className="fa fa-gear"></i>
                        </a>
                    </li>
                </ul>

                {/*<!-- Tab panes -->*/}
                <div className="tab-content">
                    <div className="tab-pane active" id="rp-alluser">
                        <h5 className="sidebartitle">Online Users</h5>
                        <ul className="chatuserlist">
                            <li className="online">
                                <div className="media">
                                    <a href="#" className="pull-left media-thumb">
                                        <img alt="" src={require("./../assets/images/user1.png")}
                                             className="media-object"/>
                                    </a>
                                    <div className="media-body">
                                        <strong>Eileen Sideways</strong>
                                        <small>Los Angeles, CA</small>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="mb30"></div>

                        <h5 className="sidebartitle">Offline Users</h5>
                        <ul className="chatuserlist">
                            <li>
                                <div className="media">
                                    <a href="#" className="pull-left media-thumb">
                                        <img alt="" src={require("./../assets/images/user2.png")}
                                             className="media-object"/>
                                    </a>
                                    <div className="media-body">
                                        <strong>Eileen Sideways</strong>
                                        <small>Los Angeles, CA</small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-pane" id="rp-favorites">
                        <h5 className="sidebartitle">Favorites</h5>
                        <ul className="chatuserlist">
                            <li className="online">
                                <div className="media">
                                    <a href="#" className="pull-left media-thumb">
                                        <img alt="" src={require("./../assets/images/user1.png")}
                                             className="media-object"/>
                                    </a>
                                    <div className="media-body">
                                        <strong>Eileen Sideways</strong>
                                        <small>Los Angeles, CA</small>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-pane" id="rp-history">
                        <h5 className="sidebartitle">History</h5>
                    </div>

                    <div className="tab-pane pane-settings" id="rp-settings">

                        <h5 className="sidebartitle mb20">Settings</h5>
                        <div className="form-group">
                            <label className="col-xs-8 control-label">Show Offline Users</label>
                            <div className="col-xs-4 control-label">
                                <div className="toggle toggle-success"></div>
                            </div>
                        </div>

                    </div>
                    {/*<!-- tab-pane -->*/}

                </div>
                {/*<!-- tab-content -->*/}
            </div>

        )
    }

}