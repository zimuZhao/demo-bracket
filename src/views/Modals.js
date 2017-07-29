'use strict';

import React from 'react';

export default class Modals extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (jQuery.cookie('change-skin')) {
            jQuery('#skinchoose').val(jQuery.cookie('change-skin'));
        }
    }

    changeSkinClick() {
        var selectedskin = jQuery('#skinchoose').val();
        if (selectedskin != 'default') {
            if ($("#skinSwitch").length <= 0) {
                jQuery('head').append('<link id="skinSwitch" rel="stylesheet" / > ');
            }
            jQuery('#skinSwitch').attr('href', 'src/assets/style.' + selectedskin + '.css');
            jQuery.cookie("change-skin", selectedskin, {path: '/'});
        } else {
            jQuery.removeCookie('change-skin', {path: '/'});
            jQuery('#skinSwitch').remove();
        }

    }

    render() {
        return (

            <div className="contentpanel">

                <div className="row">
                    <div className="panel panel-default panel-alt">
                        <div className="panel-heading">
                            <h4 className="panel-title">Change Skin</h4>
                        </div>
                        <div className="panel-body">
                            <select id="skinchoose" name="skinchoose" className="select2">
                                <option value="default">Default</option>
                                <option value="inverse">Inverse</option>
                                <option value="darknight">Darknight</option>
                            </select>&nbsp;
                            <button className="btn btn-primary btn-changeskin" onClick={this.changeSkinClick}>Change
                                Skin
                            </button>
                        </div>
                    </div>
                </div>
                {/*<!-- row -->*/}

            </div>

        )
    }
}
