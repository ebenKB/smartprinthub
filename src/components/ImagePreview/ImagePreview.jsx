import React, { useRef } from 'react';
import './ImagePreview.scss';
import { Button, Grid, Icon } from 'semantic-ui-react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { PropTypes } from 'prop-types';
import { Tooltip } from '@material-ui/core';

const ImagePreview = ({ handleCloseAction, fileURL }) => {
  const imageRef = useRef(null);
  const setFullScreen = () => {
    imageRef.current.requestFullscreen();
  };
  return (
	<div className="image-preview__wrapper">
		<div className="image-preview__overlay" />
		<div className="image-preview_content__wrapper">
			<div className="shadow-border bottom image-preview__heading">
				<div className="flex center">
					File title/name is here
				</div>
				<div className="flex center">
					<span>
						<Button
							content="Download"
							className="light hoverable app-primary"
						/>
					</span>
					<span>
						<Button
							content="Full screen"
							className="light hoverable app-primary"
							onClick={setFullScreen}
						/>
					</span>
					<Grid>
						<Grid.Row>
							<Grid.Column>
								<Tooltip title="Make Image larger">
									<Icon name="plus circle" />
								</Tooltip>
							</Grid.Column>
							<Grid.Column>
								<Tooltip title="Make Image smaller">
									<Icon name="minus circle" />
								</Tooltip>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
				<div className="flex center reverse">
					<div className="text-right">
						<Button
							className="transparent"
							content={<HighlightOffIcon />}
							onClick={handleCloseAction}
						/>
					</div>
				</div>
			</div>
			<div className="image-preview__content">
				<div
					className="image-preview__content-body"
					ref={imageRef}
				>
					<img
						Style="width: auto; height: 100%; text-align: center; display:grid; align-items:center"
						src={fileURL}
						alt=""
					/>
				</div>
				<div className="image-preview__details">
					Capture file details
				</div>
			</div>
		</div>
	</div>
  );
};

ImagePreview.propTypes = {
  handleCloseAction: PropTypes.func.isRequired,
};

export default ImagePreview;
