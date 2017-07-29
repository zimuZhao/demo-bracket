'use strict';

import React from 'react';
import {DOMAIN} from '~/entry';
import axios from 'axios';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fourpart: {
                "userNum": {
                    "total": 0,
                    "newToday": 0
                },
                "area": {
                    "num": 0,
                    "abnormal": "",
                    "active": ""
                },
                "abnormal": {
                    "index": "",
                    "disease": ""
                },
                "upload": {
                    "lastWeek": 0,
                    "today": 0,
                    "lastMonth": 0
                }
            },
            tablelist: []

        }

    }

    componentDidMount() { //首次渲染后调用
        /**
         * get top four part data
         */
        axios.get(DOMAIN + 'user/four/part', {
            params: {
                // ID: 12345  //?后带的参数
            }
        })
            .then(response => {
                if (response.data.status) {
                    if (response.data.result == "[]") {
                    } else {
                        this.setState({fourpart: response.data.result});
                    }
                } else {
                    alert('获取数据失败 - 服务器错误！');
                }

            })
            .catch(function (error) {
                alert('获取数据失败 - 服务器错误！');
                console.log(error);
            });

        /**
         * get table data
         */
        axios.get(DOMAIN + 'nurse/list/7/0')
            .then(response => {
                if (response.data.status) {
                    this.setState({tablelist: response.data.result.datas});
                } else {
                    alert('获取数据失败 - 服务器错误！');
                }

            })
            .catch(error => {
                alert('请求失败！');
                console.log(error);
            });


    }

    render() {
        return (
            <div className="contentpanel">

                <div className="row">

                    <div className="col-sm-6 col-md-3">
                        <div className="panel panel-success panel-stat">
                            <div className="panel-heading">

                                <div className="stat">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <span className="fa fa-users fa-4x"></span>
                                        </div>
                                        <div className="col-xs-8">
                                            <small className="stat-label">Visits Today</small>
                                            <h1>{this.state.fourpart.userNum.newToday}</h1>
                                        </div>
                                    </div>
                                    {/*<!-- row -->*/}

                                    <div className="mb15"></div>

                                    <div className="row">
                                        <div className="col-xs-6">
                                            <small className="stat-label">Pages / Visit</small>
                                            <h4>{this.state.fourpart.userNum.total}</h4>
                                        </div>

                                        <div className="col-xs-6">
                                            <small className="stat-label">% New Visits</small>
                                            <h4>{this.state.fourpart.userNum.total}%</h4>
                                        </div>
                                    </div>
                                    {/*<!-- row -->*/}
                                </div>
                                {/*<!-- stat -->*/}

                            </div>
                            {/*<!-- panel-heading -->*/}
                        </div>
                        {/*<!-- panel -->*/}
                    </div>
                    {/*<!-- col-sm-6 -->*/}

                    <div className="col-sm-6 col-md-3">
                        <div className="panel panel-danger panel-stat">
                            <div className="panel-heading">

                                <div className="stat">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <span className="fa fa-rocket fa-4x"></span>
                                        </div>
                                        <div className="col-xs-8">
                                            <small className="stat-label">% Unique Visitors</small>
                                            <h1>{this.state.fourpart.area.num}</h1>
                                        </div>
                                    </div>
                                    {/*<!-- row -->*/}

                                    <div className="mb15"></div>

                                    <small className="stat-label">Avg. Visit Duration</small>
                                    <h4>{this.state.fourpart.area.active}</h4>

                                </div>
                                {/*<!-- stat -->*/}

                            </div>
                            {/*<!-- panel-heading -->*/}
                        </div>
                        {/*<!-- panel -->*/}
                    </div>
                    {/*<!-- col-sm-6 -->*/}

                    <div className="col-sm-6 col-md-3">
                        <div className="panel panel-primary panel-stat">
                            <div className="panel-heading">

                                <div className="stat">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <span className="fa fa-eye fa-4x"></span>
                                        </div>
                                        <div className="col-xs-8">
                                            <small className="stat-label">Page Views</small>
                                            <h1>{this.state.fourpart.abnormal.index}</h1>
                                        </div>
                                    </div>
                                    {/*<!-- row -->*/}

                                    <div className="mb15"></div>

                                    <small className="stat-label">% Bounce Rate</small>
                                    <h4>{this.state.fourpart.abnormal.disease}</h4>

                                </div>
                                {/*<!-- stat -->*/}

                            </div>
                            {/*<!-- panel-heading -->*/}
                        </div>
                        {/*<!-- panel -->*/}
                    </div>
                    {/*<!-- col-sm-6 -->*/}

                    <div className="col-sm-6 col-md-3">
                        <div className="panel panel-dark panel-stat">
                            <div className="panel-heading">

                                <div className="stat">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <span className="fa fa-money fa-4x"></span>
                                        </div>
                                        <div className="col-xs-8">
                                            <small className="stat-label">Today's Earnings</small>
                                            <h1>{this.state.fourpart.upload.lastWeek}</h1>
                                        </div>
                                    </div>
                                    {/*<!-- row -->*/}

                                    <div className="mb15"></div>

                                    <div className="row">
                                        <div className="col-xs-6">
                                            <small className="stat-label">Last Week</small>
                                            <h4>${this.state.fourpart.upload.today}</h4>
                                        </div>

                                        <div className="col-xs-6">
                                            <small className="stat-label">Last Month</small>
                                            <h4>${this.state.fourpart.upload.lastMonth}</h4>
                                        </div>
                                    </div>
                                    {/*<!-- row -->*/}

                                </div>
                                {/*<!-- stat -->*/}

                            </div>
                            {/*<!-- panel-heading -->*/}
                        </div>
                        {/*<!-- panel -->*/}
                    </div>
                    {/*<!-- col-sm-6 -->*/}
                </div>

                <div className="row">
                    <div className="col-sm-8 col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <h5 className="subtitle mb5">Network Performance</h5>
                                    <p className="mb15">Duis autem vel eum iriure dolor in hendrerit in
                                        vulputate...</p>
                                </div>
                                {/*<!-- row -->*/}
                            </div>
                            {/*<!-- panel-body -->*/}
                        </div>
                        {/*<!-- panel -->*/}
                    </div>
                    {/*<!-- col-sm-9 -->*/}

                    <div className="col-sm-4 col-md-3">

                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h5 className="subtitle mb5">Network Performance</h5>
                                <p className="mb15">Duis autem vel eum iriure dolor in hendrerit in
                                    vulputate...</p>
                            </div>
                            {/*<!-- panel-body -->*/}
                        </div>
                        {/*<!-- panel -->*/}

                    </div>
                    {/*<!-- col-sm-3 -->*/}
                </div>

                <div className="row">

                    <div className="col-sm-7">

                        <div className="table-responsive">
                            <table className="table table-bordered mb30">
                                <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Sex</th>
                                    <th>Age</th>
                                    <th>Ethnic</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.tablelist.map(item =>
                                    <tr key={item.nurseID}>
                                        <td>{item.name}</td>
                                        <td>{item.sex == 2 ? '女' : '男'}</td>
                                        <td>{item.age}</td>
                                        <td>{item.ethnic}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        {/*<!-- table-responsive -->*/}
                    </div>
                    {/*<!-- col-sm-7 -->*/}

                    <div className="col-sm-5">

                        <div className="panel panel-success">
                            <div className="panel-heading padding5">
                                <div className="ex-line-chart"></div>
                            </div>
                            <div className="panel-body">
                                <div className="tinystat pull-left">
                                    <div className="datainfo">
                                        <span className="text-muted">Average Sales</span>
                                        <h4>$630,201</h4>
                                    </div>
                                </div>
                                {/*<!-- tinystat -->*/}
                                <div className="tinystat pull-right">
                                    <div className="datainfo">
                                        <span className="text-muted">Total Sales</span>
                                        <h4>$139,201</h4>
                                    </div>
                                </div>
                                {/*<!-- tinystat -->*/}
                            </div>
                        </div>
                        {/*<!-- panel -->*/}

                    </div>
                    {/*<!-- col-sm-6 -->*/}
                </div>

                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="panel panel-default widget-photoday">
                            <div className="panel-body">
                                <a href="" className="photoday"><img src={require("./../assets/images/photo1.png")}
                                                                     alt=""/></a>
                                <div className="photo-details">
                                    <h4 className="photo-title">Strawhat In The Beach</h4>
                                    <small className="text-muted">
                                        <i className="fa fa-map-marker"></i>
                                        San Franciso, California, USA
                                    </small>
                                    <small>By:
                                        <a href="">ThemePixels</a>
                                    </small>
                                </div>
                                {/*<!-- photo-details -->*/}
                                <ul className="photo-meta">
                                    <li>
                                        <span>
                                            <i className="fa fa-eye"></i>
                                            32,102</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-heart"></i>
                                            1,003</a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-comments"></i>
                                            52</a>
                                    </li>
                                </ul>
                            </div>
                            {/*<!-- panel-body -->*/}
                        </div>
                        {/*<!-- panel -->*/}
                    </div>
                    {/*<!-- col-sm-6 -->*/}

                    <div className="col-sm-6 col-md-4">
                        <div className="panel panel-default panel-alt widget-messaging">
                            <div className="panel-heading">
                                <div className="panel-btns">
                                    <a href="" className="panel-edit">
                                        <i className="fa fa-edit"></i>
                                    </a>
                                </div>
                                {/*<!-- panel-btns -->*/}
                                <h3 className="panel-title">Messaging</h3>
                            </div>
                            <div className="panel-body">
                                <ul>
                                    <li>
                                        <small className="pull-right">Dec 10</small>
                                        <h4 className="sender">Jennier Lawrence</h4>
                                        <small>Lorem ipsum dolor sit amet...</small>
                                    </li>
                                    <li>
                                        <small className="pull-right">Dec 9</small>
                                        <h4 className="sender">Marsha Mellow</h4>
                                        <small>Lorem ipsum dolor sit amet...</small>
                                    </li>
                                    <li>
                                        <small className="pull-right">Dec 9</small>
                                        <h4 className="sender">Holly Golightly</h4>
                                        <small>Lorem ipsum dolor sit amet...</small>
                                    </li>
                                    <li>
                                        <small className="pull-right">Dec 10</small>
                                        <h4 className="sender">Jennier Lawrence</h4>
                                        <small>Lorem ipsum dolor sit amet...</small>
                                    </li>
                                    <li>
                                        <small className="pull-right">Dec 9</small>
                                        <h4 className="sender">Marsha Mellow</h4>
                                        <small>Lorem ipsum dolor sit amet...</small>
                                    </li>
                                </ul>
                            </div>
                            {/*<!-- panel-body -->*/}
                        </div>
                        {/*<!-- panel -->*/}
                    </div>
                    {/*<!-- col-sm-6 -->*/}

                    <div className="col-sm-6 col-md-4">
                        <div className="panel panel-dark panel-alt widget-quick-status-post">
                            <div className="panel-heading">
                                <div className="panel-btns">
                                    <a href="" className="panel-close">&times;</a>
                                    <a href="" className="minimize">&minus;</a>
                                </div>
                                {/*<!-- panel-btns -->*/}
                                <h3 className="panel-title">Quick Status Post</h3>
                            </div>
                            <div className="panel-body">
                                <ul className="nav nav-tabs nav-justified">
                                    <li className="active">
                                        <a href="#post-status" data-toggle="tab">
                                            <i className="fa fa-pencil"></i>
                                            <strong>Status</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#post-photo" data-toggle="tab">
                                            <i className="fa fa-picture-o"></i>
                                            <strong>Photo</strong>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#post-checkin" data-toggle="tab">
                                            <i className="fa fa-map-marker"></i>
                                            <strong>Check-In</strong>
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div id="post-status" className="tab-pane active">
                                        <input type="text" className="form-control"
                                               placeholder="What's your status?"/>
                                    </div>
                                    <div id="post-photo" className="tab-pane">
                                        <input type="text" className="form-control" placeholder="Choose photo"/>
                                    </div>
                                    <div id="post-checkin" className="tab-pane">
                                        <input type="text" className="form-control" placeholder="Search location"/>
                                    </div>
                                    <button className="btn btn-primary btn-block mt10">Submit Post</button>
                                </div>
                                {/*<!-- tab-content -->*/}

                            </div>
                            {/*<!-- panel-body -->*/}
                        </div>
                        {/*<!-- panel -->*/}

                        <div className="mb20"></div>

                        <div className="row">
                            <div className="col-xs-6">
                                <div className="panel panel-warning panel-alt widget-today">
                                    <div className="panel-heading text-center">
                                        <i className="fa fa-calendar-o"></i>
                                    </div>
                                    <div className="panel-body text-center">
                                        <h3 className="today">Fri, Dec 13</h3>
                                    </div>
                                    {/*<!-- panel-body -->*/}
                                </div>
                                {/*<!-- panel -->*/}
                            </div>

                            <div className="col-xs-6">
                                <div className="panel panel-danger panel-alt widget-time">
                                    <div className="panel-heading text-center">
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                    <div className="panel-body text-center">
                                        <h3 className="today">4:50AM PST</h3>
                                    </div>
                                    {/*<!-- panel-body -->*/}
                                </div>
                                {/*<!-- panel -->*/}
                            </div>
                        </div>
                    </div>
                    {/*<!-- col-sm-6 -->*/}
                </div>

            </div>

        );
    }

}
