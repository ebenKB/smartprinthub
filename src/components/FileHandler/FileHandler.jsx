import React from 'react';
import FileItemHandler from '../FileItemHandler/FileItemHandler';
import './FileHandler.scss';

const FileHandler = () => (
	<div className="file-handler__wrapper">
		<div className="file-handlder__item">
			<FileItemHandler />
		</div>
		<div className="file-handlder__item">
			<FileItemHandler />
		</div>
	</div>
);

export default FileHandler;
