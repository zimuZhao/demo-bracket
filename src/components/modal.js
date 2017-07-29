'use strict';

import React from 'react';

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            // bs-example-modal-sm    bs-example-modal-lg
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog">
                {/*modal-sm    modal-lg*/}
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" className="close"
                                    type="button">&times;</button>
                            <h4 className="modal-title">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">{this.props.body}</div>
                        <div className="modal-footer">
                            <button className="btn btn-danger" id={this.props.btndanger}>Delete</button>
                            <button className="btn btn-default" aria-hidden="true" data-dismiss="modal">Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}