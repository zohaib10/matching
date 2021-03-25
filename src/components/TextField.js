import React from 'react';

import "./TextField.css";

export function TextField({ label, value }) {
    return (<div className="text-field">
        {label && <div className="label">{label}</div>}
        <div className="value">{value && `${value[0].toUpperCase()}${value.substr(1)}`}</div>
    </div>)
};
