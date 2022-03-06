import React from 'react'

export default function FieldInput({title,name,type="input",defaultValue,disabled}) {
    return (
        <div className="d-flex justify-content-between m-2">
            <div className="col-auto w-25">
                <label htmlFor={name} className="col-form-label">{title}</label>
            </div>
            <div className="col-auto w-75">
                <input
                    id={name}
                    className="form-control"
                    name={name}
                    type={type}
                    defaultValue={defaultValue}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}
