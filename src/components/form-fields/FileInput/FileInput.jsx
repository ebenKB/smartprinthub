/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './FileInput.scss';
import { PropTypes } from 'prop-types';

const FileInput = ({ maxSize }) => {
  const ref = React.createRef();

  const handleChange = () => {
    console.log('The input has chnage and this is the ref', ref.current.files);
    // const ele = document.getElementById('assets');
    // console.log(ele.files);
  };

  return (
	<div className="file-input__wrapper text-center">
		<input id="assets" type="file" ref={ref} onChange={handleChange} hidden />
		<label htmlFor="assets" name="files" className="app-primary">Upload a file</label>
		<div className="m-t-20 sm-caption file-size">
			Max. file size:
			{maxSize}
		</div>
	</div>
  );
};

FileInput.propTypes = {
  maxSize: PropTypes.string.isRequired,
};

export default FileInput;
