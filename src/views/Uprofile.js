'use strict';

import React from 'react';

export default class Profile extends React.Component { //定义组件，继承父类
    constructor(props) { //定义App类的构造函数
        super(props); //调用父类的构造函数
    }

    render() {
        return (

            <div className="contentpanel">

                <div className="row">
                    <div className="col-sm-3">
                        <img src={require("./../assets/images/loggeduser.png")} className="thumbnail img-responsive"
                             alt=""/>

                        <div className="mb30"></div>

                        <h5 className="subtitle">About</h5>
                        <p className="mb30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitat</p>

                        <h5 className="subtitle">Connect</h5>
                        <ul className="profile-social-list">
                            <li>
                                <i className="fa fa-twitter"></i>
                                <a href="">twitter.com/eileensideways</a>
                            </li>
                            <li>
                                <i className="fa fa-facebook"></i>
                                <a href="">facebook.com/eileen</a>
                            </li>
                            <li>
                                <i className="fa fa-youtube"></i>
                                <a href="">youtube.com/eileen22</a>
                            </li>
                            <li>
                                <i className="fa fa-linkedin"></i>
                                <a href="">linkedin.com/4ever-eileen</a>
                            </li>
                            <li>
                                <i className="fa fa-instagram"></i>
                                <a href="">instagram.com/eiside</a>
                            </li>
                        </ul>

                        <div className="mb30"></div>

                        <h5 className="subtitle">Address</h5>
                        <address>
                            795 Folsom Ave, Suite 600<br/>
                            San Francisco, CA 94107<br/>
                            <abbr title="Phone">P:</abbr>
                            (123) 456-7890
                        </address>

                    </div>
                    {/*<!-- col-sm-3 -->*/}

                    <div className="col-sm-9">

                        <div className="profile-header">
                            <h2 className="profile-name">John Sideways</h2>
                            <div className="profile-location">
                                <i className="fa fa-map-marker"></i>
                                San Francisco, California, USA
                            </div>
                            <div className="profile-position">
                                <i className="fa fa-briefcase"></i>
                                Software Engineer at
                                <a href="">SomeCompany, Inc.</a>
                            </div>

                            <div className="mb20"></div>

                            <button className="btn btn-success mr5">
                                <i className="fa fa-user"></i>
                                Follow
                            </button>
                            <button className="btn btn-white">
                                <i className="fa fa-envelope-o"></i>
                                Message
                            </button>
                        </div>
                        {/*<!-- profile-header -->*/}

                        {/*<!-- Nav tabs -->*/}
                        <ul className="nav nav-tabs nav-justified nav-profile">
                            <li className="active">
                                <a href="#activities" data-toggle="tab">
                                    <strong>Activities</strong>
                                </a>
                            </li>
                            <li>
                                <a href="#events" data-toggle="tab">
                                    <strong>My Events</strong>
                                </a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            {/*<!-- Tab panes / activities -->*/}
                            <div className="tab-pane active" id="activities">
                                <div className="activity-list">
                                    <div className="media act-media"></div>
                                </div>
                            </div>

                            {/*<!-- Tab panes / events -->*/}
                            <div className="tab-pane" id="events">
                                <div className="events"></div>
                            </div>
                        </div>
                        {/*<!-- tab-content -->*/}

                    </div>
                    {/*<!-- col-sm-9 -->*/}
                </div>
                {/*<!-- row -->*/}

            </div>
            // <!-- contentpanel -->

        )
    }
}
