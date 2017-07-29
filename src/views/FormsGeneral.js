'use strict';

import React from 'react';

import '~/vendor/dropzone.css';

export default class FormsGeneral extends React.Component { //定义组件，继承父类

    constructor(props) { //定义App类的构造函数
        super(props);
    }

    componentDidMount() {
        // Tooltip
        jQuery('.tooltips').tooltip();
        // Popover
        jQuery('.popovers').popover();
        // Select2
        jQuery(".select2").select2({width: '100%'});
    }

    render() {
        return (

            <div className="contentpanel">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">Input Fields</h4>
                        <p>Individual form controls automatically receive some global styling.</p>
                    </div>
                    <div className="panel-body panel-body-nopadding">

                        <form className="form-horizontal form-bordered">

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Default Input</label>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Default Input" className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Disabled Input</label>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Disabled Input" className="form-control"
                                           disabled="true"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Input w/ Tooltip</label>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Hover me" title="Tooltip goes here"
                                           data-toggle="tooltip" data-trigger="hover"
                                           className="form-control tooltips"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Input w/ Popover</label>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Click Me" className="form-control popovers"
                                           data-toggle="popover" data-placement="top" data-original-title="The Title"
                                           data-content="Content goes here..." data-trigger="click"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Placeholder</label>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="This is a placeholder" className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group has-success">
                                <label className="col-sm-3 control-label">Input with success</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group has-error">
                                <label className="col-sm-3 control-label">Input with error</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Column sizing</label>
                                <div className="col-sm-4">
                                    <input type="text" placeholder=".col-sm-4" className="form-control"/>
                                </div>
                                <div className="col-sm-3">
                                    <input type="text" placeholder=".col-sm-3" className="form-control"/>
                                </div>
                                <div className="col-sm-2">
                                    <input type="text" placeholder=".col-sm-2" className="form-control"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Textarea</label>
                                <div className="col-sm-7">
                                    <textarea className="form-control" rows="5"></textarea>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Radio</label>
                                <div className="col-sm-6">
                                    <div className="radio">
                                        <label><input type="radio" name="radio"/>
                                            Unchecked</label>
                                    </div>
                                    <div className="radio">
                                        <label><input type="radio" name="radio" checked="true"/>
                                            Checked</label>
                                    </div>
                                    <div className="radio">
                                        <label><input type="radio" name="radio" disabled="true"/>
                                            Disabled Unchecked</label>
                                    </div>
                                    <div className="radio">
                                        <label><input type="radio" name="radio" checked="true"/>
                                            Disabled Checked</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label" htmlFor="checkbox">Checkbox</label>
                                <div className="col-sm-6">
                                    <div className="checkbox block">
                                        <label><input type="checkbox"/>
                                            Unchecked</label>
                                    </div>
                                    <div className="checkbox block">
                                        <label><input type="checkbox" checked="true"/>
                                            Checked</label>
                                    </div>
                                    <div className="checkbox block">
                                        <label><input type="checkbox" disabled="true"/>
                                            Disabled Unchecked</label>
                                    </div>
                                    <div className="checkbox block">
                                        <label><input type="checkbox" checked="true" disabled="true"/>
                                            Disabled Checked</label>
                                    </div>
                                </div>
                            </div>

                        </form>

                    </div>
                    {/*<!-- panel-body -->*/}

                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <button className="btn btn-primary">Submit</button>
                                &nbsp;
                                <button className="btn btn-default">Cancel</button>
                            </div>
                        </div>
                    </div>
                    {/*<!-- panel-footer -->*/}

                </div>
                {/*<!-- panel -->*/}

                <div className="panel panel-default">
                    <div className="panel-heading">
                        {/*close panel*/}
                        {/*<div className="panel-btns">
                         <a href="" className="panel-close">&times;</a>
                         <a href="" className="minimize">&minus;</a>
                         </div>*/}
                        <h4 className="panel-title">Input Groups</h4>
                        <p>Extend form controls by adding text or buttons</p>
                    </div>
                    <div className="panel-body panel-body-nopadding">
                        <form method="get" className="form-horizontal form-bordered">

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Checkbox &amp; Radio</label>
                                <div className="col-sm-6">

                                    <div className="input-group mb15">
                                        <span className="input-group-addon">
                                            <input type="checkbox"/>
                                        </span>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <input type="radio"/>
                                        </span>
                                        <input type="text" className="form-control"/>
                                    </div>

                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Button addons</label>
                                <div className="col-sm-6">

                                    <div className="input-group mb15">
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default">Go!</button>
                                        </span>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    <div className="input-group mb15">
                                        <input type="text" className="form-control"/>
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-default">Go!</button>
                                        </span>
                                    </div>

                                    <div className="input-group mb15">
                                        <div className="input-group-btn">
                                            <button data-toggle="dropdown" className="btn btn-default dropdown-toggle"
                                                    type="button">Action
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="#">Action</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another action</a>
                                                </li>
                                                <li>
                                                    <a href="#">Something else here</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li>
                                                    <a href="#">Separated link</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    <div className="input-group">
                                        <input type="text" className="form-control"/>
                                        <div className="input-group-btn">
                                            <button data-toggle="dropdown" className="btn btn-default dropdown-toggle"
                                                    type="button">Action
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu pull-right">
                                                <li>
                                                    <a href="#">Action</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another action</a>
                                                </li>
                                                <li>
                                                    <a href="#">Something else here</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li>
                                                    <a href="#">Separated link</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Segmented buttons</label>
                                <div className="col-sm-6">

                                    <div className="input-group mb15">
                                        <div className="input-group-btn">
                                            <button type="button" className="btn btn-default" tabIndex="-1">Action
                                            </button>
                                            <button type="button" className="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown" tabIndex="-1">
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu" role="menu">
                                                <li>
                                                    <a href="#">Action</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another action</a>
                                                </li>
                                                <li>
                                                    <a href="#">Something else here</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li>
                                                    <a href="#">Separated link</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    <div className="input-group">
                                        <input type="text" className="form-control"/>
                                        <div className="input-group-btn">
                                            <button type="button" className="btn btn-default" tabIndex="-1">Action
                                            </button>
                                            <button type="button" className="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown" tabIndex="-1">
                                                <span className="caret"></span>
                                            </button>
                                            <ul className="dropdown-menu pull-right" role="menu">
                                                <li>
                                                    <a href="#">Action</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another action</a>
                                                </li>
                                                <li>
                                                    <a href="#">Something else here</a>
                                                </li>
                                                <li className="divider"></li>
                                                <li>
                                                    <a href="#">Separated link</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </form>

                    </div>
                    {/*<!-- panel-body -->*/}
                </div>
                {/*<!-- panel -->*/}

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">Select Fields</h4>
                    </div>
                    <div className="panel-body panel-body-nopadding">
                        <form className="form-horizontal form-bordered">
                            <div className="form-group">
                                <label className="col-sm-3 control-label">Select</label>
                                <div className="col-sm-5">
                                    <select className="form-control mb15">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Select2</label>
                                <div className="col-sm-5">
                                    <select className="select2" data-placeholder="Choose a Country...">
                                        <option value=""></option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Aland Islands">Aland Islands</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="French Southern Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">Select2 Multiple</label>
                                <div className="col-sm-5">
                                    <select className="select2" multiple data-placeholder="Choose a Country...">
                                        <option value=""></option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Aland Islands">Aland Islands</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="French Southern Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">Dropzone Multi-File Upload</h4>
                        <p>DropzoneJS is an open source library that provides drag'n'drop file uploads with image
                            previews.
                            <a href="http://dropzonejs.com/" target="_blank">http://dropzonejs.com/</a>
                        </p>
                    </div>
                    <div className="panel-body">
                        <p>This is just a demo. Uploaded files are
                            <strong>not</strong>
                            stored. This does not handle your file uploads on the server. You have to implement the code
                            to receive and store the file yourself.</p>
                        <br/>
                        <form action="files" className="dropzone">
                            <div className="fallback">
                                <input name="file" type="file" multiple/>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            // <!-- contentpanel -->

        );
    }

}

import '~/vendor/select2.min.js'
import '~/vendor/dropzone.min.js'

jQuery(document).ready(function () {
    jQuery('input:radio[name="radio"]').click(function () {
        console.log(this);
    });

    jQuery('input:checkbox').click(function () {
        console.log(this);
    });

})
