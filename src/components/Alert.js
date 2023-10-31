import React, { memo, useState } from 'react'

export default function Alert(props) {
    if (props.obj == null) {      // when alert is set to null, don't display anything
        return;
    }

    const type = props.obj.type.charAt(0).toUpperCase() + props.obj.type.slice(1);
    return (
        <div className={`alert alert-${props.obj.type}`} role="alert">
            <strong>{type}: </strong>{props.obj.message}
        </div>
    )
}