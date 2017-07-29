'use strict';

import React from 'react';
import {Link} from 'react-router';
import './leftpanel.css';

export default class Leftpanel extends React.Component {

    constructor(props) { //定义App类的构造函数
        super(props);
    }

    componentDidMount() {

        // Toggle Left Menu
        jQuery('body').on('click', '.leftpanel .nav-parent > a', function () {
            var parent = jQuery(this).parent();
            var sub = parent.find('> ul');
            // Dropdown works only when leftpanel is not collapsed
            if (!jQuery('body').hasClass('leftpanel-collapsed')) {
                if (sub.is(':visible')) {
                    sub.slideUp(200, function () {
                        parent.removeClass('nav-active');
                        jQuery('.mainpanel').css({height: ''});
                        adjustmainpanelheight();
                    });
                } else {
                    closeVisibleSubMenu();
                    parent.addClass('nav-active');
                    sub.slideDown(200, function () {
                        adjustmainpanelheight();
                    });
                }
            }
            return false;
        });

        // Add class everytime a mouse pointer hover over it
        jQuery('.nav-bracket > li').hover(function () {
            jQuery(this).addClass('nav-hover');
        }, function () {
            jQuery(this).removeClass('nav-hover');
        });

        // Check if leftpanel is collapsed
        if (jQuery('body').hasClass('leftpanel-collapsed'))
            jQuery('.nav-bracket .children').css({display: ''});
    }

    render() {

        return (

            <div className="leftpanel">

                <div className="logopanel">
                    <h1>
                        <span>[</span>
                        Demo-bracket
                        <span>]</span>
                    </h1>
                </div>

                <div className="leftpanelinner">

                    <h5 className="sidebartitle">Navigation</h5>
                    <ul className="nav nav-pills nav-stacked nav-bracket">
                        <li>
                            <Link to="/home" activeClassName="active">
                                <i className="fa fa-home"></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/list" activeClassName="active">
                                <i className="fa fa-list"></i>
                                <span>List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="modals" activeClassName="active">
                                <span className="pull-right badge badge-success">2</span>
                                <i className="fa fa-suitcase"></i>
                                <span>Modals</span>
                            </Link>
                        </li>
                        <li className="nav-parent">
                            <a>
                                <i className="fa fa-edit"></i>
                                <span>Forms</span>
                            </a>
                            <ul className="children">
                                <li>
                                    <Link to="forms/general" activeClassName="active">
                                        <i className="fa fa-caret-right"></i>
                                        General Forms
                                    </Link>
                                </li>
                                <li>
                                    <Link to="forms/table" activeClassName="active">
                                        <i className="fa fa-caret-right"></i>
                                        Table
                                    </Link>
                                </li>
                                <li>
                                    <Link to="forms/uregister" activeClassName="active">
                                        <i className="fa fa-caret-right"></i>
                                        Uregister
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="infosummary">
                        <h5 className="sidebartitle">Information Summary</h5>
                        <ul>
                            <li>
                                <div className="datainfo">
                                    <span className="text-muted">Daily Traffic</span>
                                    <h4>630, 201</h4>
                                </div>
                                <div id="sidebar-chart" className="chart"></div>
                            </li>
                            <li>
                                <div className="datainfo">
                                    <span className="text-muted">Average Users</span>
                                    <h4>1, 332, 801</h4>
                                </div>
                                <div id="sidebar-chart2" className="chart"></div>
                            </li>
                            <li>
                                <div className="datainfo">
                                    <span className="text-muted">Disk Usage</span>
                                    <h4>82.2%</h4>
                                </div>
                                <div id="sidebar-chart3" className="chart"></div>
                            </li>
                            <li>
                                <div className="datainfo">
                                    <span className="text-muted">CPU Usage</span>
                                    <h4>140.05 - 32</h4>
                                </div>
                                <div id="sidebar-chart4" className="chart"></div>
                            </li>
                            <li>
                                <div className="datainfo">
                                    <span className="text-muted">Memory Usage</span>
                                    <h4>32.2%</h4>
                                </div>
                                <div id="sidebar-chart5" className="chart"></div>
                            </li>
                        </ul>
                        {/*<!-- infosummary -->*/}
                    </div>
                    {/*<!-- leftpanelinner -->*/}
                </div>
                {/*<!-- leftpanel -->*/}
            </div>

        )
    }

}

function closeVisibleSubMenu() {
    jQuery('.leftpanel .nav-parent').each(function () {
        var t = jQuery(this);
        if (t.hasClass('nav-active')) {
            t.find('> ul').slideUp(200, function () {
                t.removeClass('nav-active');
            });
        }
    });
}

// Adjust mainpanel height
function adjustmainpanelheight() {
    var docHeight = jQuery(document).height();
    if (docHeight > jQuery('.mainpanel').height())
        jQuery('.mainpanel').height(docHeight);
}
