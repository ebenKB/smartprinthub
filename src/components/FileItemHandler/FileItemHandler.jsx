import React, { useState } from 'react';
import './FileItemHandler.scss';
import { Button } from 'semantic-ui-react';

import { PropTypes } from 'prop-types';
import ImagePreview from '../ImagePreview/ImagePreview';

const FileItemHandler = ({ handleDownloadAction }) => {
  const [canPreview, setCanPreview] = useState(false);

  const closePreview = () => {
    setCanPreview(false);
  };

  return (
	<div className="shadow-border file-item__wrapper flex- center">
		<div className="file-item__icon">
			<span className="icon-text bold">JPG</span>
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
						<Button
							content="Download"
							className="transparent"
							onClick={handleDownloadAction}
						/>
					</span>
					<span className="m-r-5 m-l-5">|</span>
					<span>
						<Button
							content="Preview"
							className="transparent"
							onClick={() => setCanPreview(true)}
						/>
					</span>
				</div>
			</div>
		</div>
		{canPreview && (
			<ImagePreview
				handleCloseAction={closePreview}
			/>
		)}
	</div>
  );
};

FileItemHandler.propTypes = {
  handleDownloadAction: PropTypes.func.isRequired,
};

export default FileItemHandler;
