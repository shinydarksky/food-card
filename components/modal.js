import React from 'react'

export default function Modal({ onClose, title, children }) {
    return (
        <div className="modal d-block mt-3" >
            <div className="modal-dialog">
                <div className="modal-content">
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
