import React from 'react'

export default function FieldSelect({title,name,disabled,data}) {
    return (
        <div className="d-flex justify-content-between m-2">
            <div className="col-auto w-25">
                <label htmlFor={name} className="col-form-label">{title}</label>
            </div>
            <div className="col-auto w-75">
                <select
                    id={name}
                    className="form-control"
                    name={name}
                    disabled={disabled}
                >
                    {data}
                </select>
            </div>
        </div>
    )
}