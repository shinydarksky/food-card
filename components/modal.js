import React from 'react'

export default function Modal({ onClose, title, children,className }) {
    return (
        <div className={"modal d-block mt-3"+className}>
            <div className="modal-dialog">
                <div className="modal-content modal-styles">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                        />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
