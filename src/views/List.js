'use strict';

import React from 'react';
import {Link} from 'react-router';
import {DOMAIN} from '~/entry';
import axios from 'axios';
import '~/vendor/jquery.table';
import Modal from '~/components/modal'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nurseList: [],
        }
    }

    /**
     * get paging list data
     */
    getList(pageNo) {
        let _this = this;
        axios.get(DOMAIN + 'nurse/list/5/' + pageNo)
            .then(response => {
                if (response.data.status) {
                    this.setState({nurseList: response.data.result.datas});
                    $("#Paging").table({
                        pageNum: response.data.result.totalPage,
                        currentPage: pageNo,
                        jumpTo: function (current) {
                            _this.getList(current);
                        }
                    });
                } else {
                    alert("获取数据失败 - 服务器错误！");
                }
            })
            .catch(error => {
                console.log(error);
                alert("请求失败！");
            })
    }

    editItem(id) {
        alert('可以跳转啦! id=' + id);
        // window.location.href = "liveHomePage/" + liveID;
    }

    deleteItem(id) {
        $('#DeleteModal').modal('show');
        $('#DeleteConfirm').click(function () {
            axios.put(DOMAIN + "nurse/remove/" + id)
                .then(respond => {
                    history.go(0);
                })
                .catch(error => {
                    alert("请求失败");
                    console.log(error);
                });
        });
    }

    componentDidMount() {
        this.getList(0);
    }

    render() {
        return (

            <div className="contentpanel">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <Link to="/list/add" title="add new item" data-toggle="tooltip"
                              className="btn btn-primary btn-xs pull-right">
                            <i className="fa fa-plus"></i>
                        </Link>
                        <div className="clearfix"></div>
                    </div>

                    <div className="panel-body panel-body-nopadding">

                        <div className="table-responsive">
                            <table className="table mb30">
                                <thead>
                                <tr>
                                    <th>name</th>
                                    <th>sex</th>
                                    <th>age</th>
                                    <th>ethnic</th>
                                    <th>education</th>
                                    <th>birthPlace</th>
                                    <th>serviceType</th>
                                    <th>workExperience</th>
                                    <th>mobileNumber</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.nurseList.map(item =>
                                    <tr key={item.nurseID}>
                                        <td>{item.name}</td>
                                        <td>{item.sex == 2 ? '女' : '男'}</td>
                                        <td>{item.age}</td>
                                        <td>{item.ethnic}</td>
                                        <td>{item.education}</td>
                                        <td>{item.birthPlace}</td>
                                        <td>{item.serviceType}</td>
                                        <td>{item.workExperience + "年"}</td>
                                        <td>{item.mobile}</td>
                                        <td className="table-action">
                                            <div title="edit"
                                                 className="btn btn-warning-alt btn-xs"
                                                 onClick={this.editItem.bind(this, item.nurseID)}>
                                                <i className="fa fa-pencil"></i>
                                            </div>
                                            <div title="delete"
                                                 className="btn btn-danger-alt btn-xs"
                                                 onClick={this.deleteItem.bind(this, item.nurseID)}>
                                                <i className="fa fa-trash-o"></i>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                                </tbody>

                            </table>
                        </div>
                        {/*<!-- table-responsive -->*/}

                    </div>

                    <table id="Paging" className="table table-bordered table1Style">
                        <tfoot className="hidden">
                        <tr>
                            <td>
                                <ul className="pagination" disabled="disabled">
                                    <li className="previous"><span aria-hidden="true">previous</span></li>
                                    <li className="page"><a></a></li>
                                    <li className="next"><span aria-hidden="true">next</span></li>
                                </ul>
                            </td>
                        </tr>
                        </tfoot>
                    </table>

                </div>
                {/*<!-- contentpanel -->*/}

                <Modal id="DeleteModal"
                       title="Are you sure to delete this item ?"
                       body="After deletion, the data can not be recovered."
                       btndanger="DeleteConfirm"/>

                {/*<div className="modal fade" id="DeleteModal" tabIndex="-1" role="dialog">*/}
                {/*<div className="modal-dialog">*/}
                {/*<div className="modal-content">*/}
                {/*<div className="modal-header">*/}
                {/*<button aria-hidden="true" data-dismiss="modal" className="close"*/}
                {/*type="button">&times;</button>*/}
                {/*<h4 className="modal-title">Are you sure to delete this item ?</h4>*/}
                {/*</div>*/}
                {/*<div className="modal-body">After deletion, the data can not be recovered.</div>*/}
                {/*<div className="modal-footer">*/}
                {/*<button className="btn btn-danger" id="DeleteConfirm">Delete</button>*/}
                {/*<button className="btn btn-default" aria-hidden="true" data-dismiss="modal">Cancel*/}
                {/*</button>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}

            </div>
        )
    }
}
