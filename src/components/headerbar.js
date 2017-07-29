'use strict';

import React from 'react';
import {Link} from 'react-router';

import './headerbar.css';

export default class Headerbar extends React.Component {

    constructor(props) {
        super(props);
    }

    // 渲染前调用,在客户端也在服务端
    componentWillMount(){}
    // 首次渲染后调用,只在客户端
    componentDidMount() {}
    // 组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用
    componentWillReceiveProps(){}
    // 组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用
    componentWillUpdate(){}
    // 在组件完成更新后立即调用。在初始化时不会被调用
    componentDidUpdate(){}
    // 组件从 DOM 中移除的时候立刻被调用
    componentWillUnmount(){}

    // show leftpanel
    menuClick() {
        var body = jQuery('body');
        var bodypos = body.css('position');

        if (bodypos != 'relative') {

            if (!body.hasClass('leftpanel-collapsed')) {
                body.addClass('leftpanel-collapsed');
                jQuery('.nav-bracket ul').attr('style', '');

                jQuery(this).addClass('menu-collapsed');

            } else {
                body.removeClass('leftpanel-collapsed chat-view');
                jQuery('.nav-bracket li.active ul').css({display: 'block'});

                jQuery(this).removeClass('menu-collapsed');

            }
        } else {

            if (body.hasClass('leftpanel-show'))
                body.removeClass('leftpanel-show');
            else
                body.addClass('leftpanel-show');

            //Adjust mainpanel height
            var docHeight = jQuery(document).height();
            if (docHeight > jQuery('.mainpanel').height())
                jQuery('.mainpanel').height(docHeight);

            }
        }

    // show rightpanel
    chatviewClick() {
        var body = jQuery('body');
        var bodypos = body.css('position');

        if (bodypos != 'relative') {

            if (!body.hasClass('chat-view')) {
                body.addClass('leftpanel-collapsed chat-view');
                jQuery('.nav-bracket ul').attr('style', '');

            } else {

                body.removeClass('chat-view');

                if (!jQuery('.menutoggle').hasClass('menu-collapsed')) {
                    jQuery('body').removeClass('leftpanel-collapsed');
                    jQuery('.nav-bracket li.active ul').css({display: 'block'});
                } else {}
            }

        } else {

            if (!body.hasClass('chat-relative-view')) {

                body.addClass('chat-relative-view');
                body.css({left: ''});

            } else {
                body.removeClass('chat-relative-view');
            }
        }

    }

    render() {

        return (

            <div className="headerbar">

                <a className="menutoggle" onClick={this.menuClick}>
                    <i className="fa fa-bars"></i>
                </a>

                <div className="header-right">
                    <ul className="headermenu">
                        <li>
                            <div className="btn-group">
                                <button className="btn btn-default dropdown-toggle tp-icon" data-toggle="dropdown">
                                    <i className="fa fa-envelope"></i>
                                    <span className="badge">1</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-head pull-right">
                                    <h5 className="title">You Have 1 New Message</h5>
                                    <ul className="dropdown-list gen-list">
                                        <li className="new">
                                            <a href="">
                                                <span className="thumb"><img src={require("./../assets/images/user1.png")} alt=""/></span>
                                                <span className="desc">
                                                    <span className="name">Draniem Daamul
                                                        <span className="badge badge-success">new</span>
                                                    </span>
                                                    <span className="msg">Lorem ipsum dolor sit amet...</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <span className="thumb"><img src={require("./../assets/images/user2.png")} alt=""/></span>
                                                <span className="desc">
                                                    <span className="name">Nusja Nawancali</span>
                                                    <span className="msg">Lorem ipsum dolor sit amet...</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="new">
                                            <a href="">Read All Messages</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    <img src={require("./../assets/images/loggeduser.png")} alt=""/>
                                    John Doe
                                    <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-usermenu pull-right">
                                    <li>
                                        <Link to="user/profile">
                                            <i className="fa fa-user"></i>
                                            My Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="user/change-password">
                                            <i className="fa fa-key"></i>
                                            Change password
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="user/help">
                                            <i className="fa fa-question-circle"></i>
                                            Help
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="user/logout">
                                            <i className="fa fa-sign-out"></i>
                                            Log Out</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button id="chatview" onClick={this.chatviewClick} className="btn btn-default tp-icon chat-icon">
                                <i className="fa fa-comment"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                {/*<!-- header-right -->*/}
            </div>
        )

    }

}