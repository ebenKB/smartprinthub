import React from 'react';
import './FileItemHandler.scss';
import { Button } from 'semantic-ui-react';

const FileItemHandler = () => (
	<div className="shadow-border file-item__wrapper">
		<div className="file-item__icon">
			<span className="icon-text bold">PDF</span>
		</div>
		<div className="icon-body">
			<span className="bold">EXAMPLE FILE TITLE</span>
			<div>
				<span>95</span>
				<span className="m-l-5">KB</span>
			</div>
		</div>
		<div className="file-options">
			<div className="file-item__overlay" />
			<div className="file-item__options">
				<div className="file-item__options-body bold">
					<span>
						<Button content="Download" className="transparent" />
					</span>
					<span className="m-r-5 m-l-5">|</span>
					<span>
						<Button content="Preview" className="transparent" />
					</span>
				</div>
			</div>
		</div>
	</div>
);

export default FileItemHandler;
