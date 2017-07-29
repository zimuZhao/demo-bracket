'use strict';

import React from 'react';

export default class FormsTable extends React.Component { //定义组件，继承父类
    constructor(props) { //定义App类的构造函数
        super(props); //调用父类的构造函数
    }

    render() {
        return (

            <div className="contentpanel">

                <div className="row">

                    <h5 className="subtitle mb5">Hover Rows</h5>
                    <div className="table-responsive">
                        <table className="table table-hover mb30">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*<!-- table-responsive -->*/}
                </div>

                <div className="row">

                    <h5 className="subtitle mb5">Table With Actions</h5>
                    <div className="table-responsive">
                        <table className="table mb30">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td className="table-action">
                                        <a href="">
                                            <i className="fa fa-pencil"></i>
                                        </a>
                                        <a href="" className="delete-row">
                                            <i className="fa fa-trash-o"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td className="table-action">
                                        <a href="">
                                            <i className="fa fa-pencil"></i>
                                        </a>
                                        <a href="" className="delete-row">
                                            <i className="fa fa-trash-o"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td className="table-action">
                                        <a href="">
                                            <i className="fa fa-pencil"></i>
                                        </a>
                                        <a href="" className="delete-row">
                                            <i className="fa fa-trash-o"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*<!-- table-responsive -->*/}
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Data Tables</h3>
                        <p>DataTables is a plug-in for the jQuery Javascript library.</p>
                    </div>
                    <div className="panel-body">

                        <div className="table-responsive">
                            <table className="table table-striped" id="table2">
                                <thead>
                                    <tr>
                                        <th>Rendering engine</th>
                                        <th>Browser</th>
                                        <th>Platform(s)</th>
                                        <th>Engine version</th>
                                        <th>CSS grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd gradeX">
                                        <td>Trident</td>
                                        <td>Internet Explorer 4.0</td>
                                        <td>Win 95+</td>
                                        <td className="center">
                                            4</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="even gradeC">
                                        <td>Trident</td>
                                        <td>Internet Explorer 5.0</td>
                                        <td>Win 95+</td>
                                        <td className="center">5</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="odd gradeA">
                                        <td>Trident</td>
                                        <td>Internet Explorer 5.5</td>
                                        <td>Win 95+</td>
                                        <td className="center">5.5</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="even gradeA">
                                        <td>Trident</td>
                                        <td>Internet Explorer 6</td>
                                        <td>Win 98+</td>
                                        <td className="center">6</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="odd gradeA">
                                        <td>Trident</td>
                                        <td>Internet Explorer 7</td>
                                        <td>Win XP SP2+</td>
                                        <td className="center">7</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="even gradeA">
                                        <td>Trident</td>
                                        <td>AOL browser (AOL desktop)</td>
                                        <td>Win XP</td>
                                        <td className="center">6</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Firefox 1.0</td>
                                        <td>Win 98+ / OSX.2+</td>
                                        <td className="center">1.7</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Firefox 1.5</td>
                                        <td>Win 98+ / OSX.2+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Firefox 2.0</td>
                                        <td>Win 98+ / OSX.2+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Firefox 3.0</td>
                                        <td>Win 2k+ / OSX.3+</td>
                                        <td className="center">1.9</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Camino 1.0</td>
                                        <td>OSX.2+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeA">
                                        <td>Gecko</td>
                                        <td>Camino 1.5</td>
                                        <td>OSX.3+</td>
                                        <td className="center">1.8</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="gradeX">
                                        <td>Tasman</td>
                                        <td>Internet Explorer 4.5</td>
                                        <td>Mac OS 8-9</td>
                                        <td className="center">-</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="gradeC">
                                        <td>Tasman</td>
                                        <td>Internet Explorer 5.1</td>
                                        <td>Mac OS 7.6-9</td>
                                        <td className="center">1</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="gradeU">
                                        <td>Other browsers</td>
                                        <td>All others</td>
                                        <td>-</td>
                                        <td className="center">-</td>
                                        <td className="center">U</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/*<!-- table-responsive -->*/}

                    </div>
                    {/*<!-- panel-body -->*/}
                </div>
                {/*<!-- panel -->*/}

            </div>
        // <!-- contentpanel -->

        );
    }

}
