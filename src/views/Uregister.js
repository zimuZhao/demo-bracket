'use strict';

import React from 'react';

export default class Uregister extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="contentpanel">

                <div className="row">

                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title">Details</h4>
                            </div>
                            <div className="panel-body panel-body-nopadding">

                                <form className="form-horizontal form-bordered">

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label" htmlFor="name">姓名
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-sm-3">
                                            <input type="text" placeholder="姓名" className="form-control" id="name"/>
                                        </div>
                                        <label className="col-sm-1 control-label">性别</label>
                                        <div className="col-sm-2">
                                            <select className="form-control">
                                                <option>女</option>
                                                <option>男</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">联系电话
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" placeholder="联系电话" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">联系地址
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-sm-6">
                                            <input type="text" placeholder="联系地址" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">学历</label>
                                        <div className="col-sm-3">
                                            <select className="form-control">
                                                <option></option>
                                                <option>小学</option>
                                                <option>初中</option>
                                                <option>中专/高中</option>
                                                <option>专科/本科</option>
                                                <option>本科以上</option>
                                            </select>
                                        </div>
                                        <label className="col-sm-1 control-label" htmlFor="name">年龄
                                        </label>
                                        <div className="col-sm-2">
                                            <input type="text" placeholder="年龄" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">民族</label>
                                        <div className="col-sm-3">
                                            <select className="form-control selectpicker" data-style="btn-white"
                                                    data-live-search="true">
                                                <option value="汉族">汉族</option>
                                                <option value="壮族">壮族</option>
                                                <option value="满族">满族</option>
                                                <option value="回族">回族</option>
                                                <option value="苗族">苗族</option>
                                                <option value="维吾尔族">维吾尔族</option>
                                                <option value="土家族">土家族</option>
                                                <option value="彝族">彝族</option>
                                                <option value="蒙古族">蒙古族</option>
                                                <option value="藏族">藏族</option>
                                                <option value="布依族">布依族</option>
                                                <option value="侗族">侗族</option>
                                                <option value="瑶族">瑶族</option>
                                                <option value="朝鲜族">朝鲜族</option>
                                                <option value="白族">白族</option>
                                                <option value="哈尼族">哈尼族</option>
                                                <option value="哈萨克族">哈萨克族</option>
                                                <option value="黎族">黎族</option>
                                                <option value="傣族">傣族</option>
                                                <option value="畲族">畲族</option>
                                                <option value="傈僳族">傈僳族</option>
                                                <option value="仡佬族">仡佬族</option>
                                                <option value="东乡族">东乡族</option>
                                                <option value="高山族">高山族</option>
                                                <option value="拉祜族">拉祜族</option>
                                                <option value="水族">水族</option>
                                                <option value="佤族">佤族</option>
                                                <option value="纳西族">纳西族</option>
                                                <option value="羌族">羌族</option>
                                                <option value="土族">土族</option>
                                                <option value="仫佬族">仫佬族</option>
                                                <option value="锡伯族">锡伯族</option>
                                                <option value="柯尔克孜族">柯尔克孜族</option>
                                                <option value="达斡尔族">达斡尔族</option>
                                                <option value="景颇族">景颇族</option>
                                                <option value="毛南族">毛南族</option>
                                                <option value="撒拉族">撒拉族</option>
                                                <option value="布朗族">布朗族</option>
                                                <option value="塔吉克族">塔吉克族</option>
                                                <option value="阿昌族">阿昌族</option>
                                                <option value="普米族">普米族</option>
                                                <option value="鄂温克族">鄂温克族</option>
                                                <option value="怒族">怒族</option>
                                                <option value="京族">京族</option>
                                                <option value="基诺族">基诺族</option>
                                                <option value="德昂族">德昂族</option>
                                                <option value="保安族">保安族</option>
                                                <option value="俄罗斯族">俄罗斯族</option>
                                                <option value="裕固族">裕固族</option>
                                                <option value="乌孜别克族">乌孜别克族</option>
                                                <option value="门巴族">门巴族</option>
                                                <option value="鄂伦春族">鄂伦春族</option>
                                                <option value="独龙族">独龙族</option>
                                                <option value="塔塔尔族">塔塔尔族</option>
                                                <option value="赫哲族">赫哲族</option>
                                                <option value="珞巴族">珞巴族</option>
                                            </select>
                                        </div>
                                        <label className="col-sm-1 control-label">薪资</label>
                                        <div className="col-sm-2">
                                            <input type="text" placeholder="薪资" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">服务类型</label>
                                        <div className="col-sm-3">
                                            <input type="text" placeholder="服务类型（陪护）" className="form-control"/>
                                        </div>
                                        <label className="col-sm-1 control-label">工龄</label>
                                        <div className="col-sm-2">
                                            <input type="text" placeholder="工作年限" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">籍贯</label>
                                        <div className="col-sm-2">
                                            <select id="selectProvince" className="form-control"></select>
                                        </div>
                                        <div className="col-sm-2">
                                            <select id="selectCity" className="form-control"></select>
                                        </div>
                                        <div className="col-sm-2">
                                            <select id="selectTown" className="form-control"></select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">证书编号</label>
                                        <div className="col-sm-6">
                                            <input type="text" placeholder="证书编号" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">服务区域</label>
                                        <div className="col-sm-6">
                                            <input type="text" placeholder="服务区域" className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">技能描述</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" rows="5"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">到家陪护</label>
                                        <div className="col-sm-6">
                                            <div className="radio"><label><input type="radio"/> 是</label></div>
                                        </div>
                                    </div>

                                </form>

                            </div>
                            {/*<!-- panel-body -->*/}

                            <div className="panel-footer">
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-3">
                                        <button className="btn btn-primary">提交</button>
                                        &nbsp;
                                        <button className="btn btn-default">取消</button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- panel-footer -->*/}

                        </div>
                        {/*<!-- panel -->*/}

                </div>
                {/*<!-- row -->*/}

            </div>
        )
    }
}


