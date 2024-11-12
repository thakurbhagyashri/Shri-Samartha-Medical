import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Upload.css';

const Upload = () => {
    return (
        <div className="upload">
            <label htmlFor="file-upload" className="upload-label">
                <FontAwesomeIcon icon={faFileArrowUp} className="icon" /> Upload
            </label>
            <input type="file" id="file-upload" className="file-input" />
        </div>
    );
};

export default Upload;
