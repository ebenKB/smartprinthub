import React, { useRef } from 'react';
import './ImagePreview.scss';
import { Button } from 'semantic-ui-react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { PropTypes } from 'prop-types';

const ImagePreview = ({ handleCloseAction }) => {
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
					<span>+&nbsp;</span>
					<span>-&nbsp;</span>
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
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR838Qi_Pxvu5bNp16FXorDnIzXGLAdjOcx9w&usqp=CAU"
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
