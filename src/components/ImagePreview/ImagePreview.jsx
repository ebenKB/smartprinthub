import React, { useRef, useState } from 'react';
import './ImagePreview.scss';
import { Button } from 'semantic-ui-react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const ImagePreview = () => {
  const imageRef = useRef(null);
  const [isShowing, setIsShowing] = useState(true);
  const setFullScreen = () => {
    imageRef.current.requestFullscreen();
  };
  return (
	<>
		{isShowing && (
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
									onClick={() => setIsShowing(false)}
								/>
							</div>
						</div>
					</div>
					<div className="image-preview__content">
						<div
							className="image-preview__content-body"
							ref={imageRef}
						>
							{/* This is an image preview component */}
							<img
								Style="width: auto; height: 100%; text-align: center; display:grid; align-items:center"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR838Qi_Pxvu5bNp16FXorDnIzXGLAdjOcx9w&usqp=CAU"
								alt=""
							/>
						</div>
						<div className="image-preview__details">
							right hand side
						</div>
					</div>
				</div>
			</div>
		)}
	</>
  );
};

export default ImagePreview;
