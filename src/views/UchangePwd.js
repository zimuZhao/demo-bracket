'use strict';

import React from 'react';
import '~/vendor/Validform_v5.3.2'
import {DOMAIN} from '~/entry'

export default class ChangePwd extends React.Component { //定义组件，继承父类
    constructor(props) { //定义App类的构造函数
        super(props); //调用父类的构造函数
    }

    render() {
        return (

            <div className="contentpanel">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">Change Password</h4>
                    </div>
                    <div className="panel-body panel-body-nopadding">

                        <form id="Form" className="form-horizontal form-bordered">

                            <div className="form-group">
                                <label className="col-sm-3 control-label">old password <span
                                    className="asterisk">*</span></label>
                                <div className="col-sm-6">
                                    <input type="password" id="OldPwd" className="form-control" datatype="*"
                                           nullmsg="Please enter the old password"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">new password
                                    <span className="asterisk">*</span>
                                </label>
                                <div className="col-sm-6">
                                    <input type="password" id="NewPwd" className="form-control" datatype="*6-16"
                                           nullmsg="Please enter new password"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-3 control-label">confirm password
                                    <span className="asterisk">*</span>
                                </label>
                                <div className="col-sm-6">
                                    <input type="password" id="ReNewPwd" className="form-control" datatype="*6-16"
                                           nullmsg="Please enter new password again"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label id="Info" className="col-xs-offset-3 asterisk"
                                       style={{paddingLeft: 10 + "px"}}></label>
                            </div>

                            <div className="panel-footer">
                                <div className="row">
                                    <div className="col-sm-6 col-sm-offset-3">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                        &nbsp;
                                        <button id="Cancel" type="button" className="btn btn-default">Cancel</button>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- panel-footer -->*/}

                        </form>
                    </div>
                </div>
                {/*<!-- panel-body -->*/}

            </div>

        );
    }

}

jQuery(function () {

    //valid form
    $("#Form").Validform({
        tiptype: function (msg, o, cssctl) {
            // o.type指示提示的状态，值为1、2、3、4，
            // 1：正在检测/提交数据，2：通过验证，3：验证失败，4：提示ignore状态
            if (!o.obj.is("form")) { // 验证表单元素时o.obj为该表单元素，全部验证通过提交表单时o.obj为该表单对象;
                var form_group = o.obj.closest('.form-group');
                var infoObj = form_group.find("label.error");
                if (infoObj.size() == 0) {
                    infoObj = $('<label class="error"></label >');
                    form_group.append(infoObj);
                }
                if (o.type == 2) {
                    form_group.addClass('has-success').removeClass('has-error');

                    infoObj.fadeOut(200);
                } else {
                    form_group.removeClass('has-success').addClass('has-error');

                    infoObj.html(msg);
                    if (infoObj.is(":visible")) {
                        return;
                    }
                    infoObj.show().animate({
                        top: top - 35
                    }, 200);
                }
            }
            // $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        beforeSubmit: function () {
            changePsw();
            return false;
        }
    });

    $("#Cancel").click(function () {
        cancel();
    });

    // Empty the Empty the message
    $("input").focus(function () {
        $("#Info").text("");
    });
});

function changePsw() {
    var OldPwd = $("#OldPwd").val();
    var newPwd = $("#NewPwd").val();
    var reNewPwd = $("#ReNewPwd").val();
    if (newPwd.length == 0 || reNewPwd.length == 0) {
        // $("#Info").html("密码不能为空");
        $("#Info").html("Password can not be blank!");
    } else if (newPwd != reNewPwd) {
        // $("#Info").html("新密码前后不一致");
        $("#Info").html("The new password is inconsistent,please enter again!");
        // } else if (OldPwd != $.cookie('password')) { //这里cookie存储的是MD5加密后的密码
        //     $("#Info").html("旧密码校验错误");
        //     $("#Info").html("Old password is wrong!");
    } else {
        $.ajax({
            url: DOMAIN + "user/changeUserPwd",
            data: {
                userID: $.cookie('userID'),
                password: newPwd
            },
            async: true,
            cache: false,
            success: function (data) {
                if (data.status) {
                    // alert('密码修改成功');
                    alert('Password changed successfully');
                    $("#NewPwd").val(null);
                    $("#ReNewPwd").val(null);
                    window.location.href = 'index.html';
                } else {
                    $("#Info").html(data.result);
                }
            },
            error: function () {
                // $("#Info").html("服务器未响应");
                $("#Info").html("Server is not responding!");
            }
        });
    }
}

function cancel() {
    $('#OldPwd').val("");
    $('#NewPwd').val("");
    $('#ReNewPwd').val("");
}


