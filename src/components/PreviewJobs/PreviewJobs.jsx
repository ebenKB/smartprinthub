/* eslint-disable react/boolean-prop-naming */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import './PreviewJobs.scss';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

const PreviewJobs = ({ jobs, closeAction, open }) => {
  return (
    <ModalWrapper
      closeAction={closeAction} 
      open={open} title={`${jobs.length > 1 ? "Preview Jobs" : "Preview Job"}`}
      size="medium"
    >
      <div className="preview-wrapper">
        {jobs.map((job) => (
          <div className="preiview-item" key={job.id}>
            <h3>{job.title} @ GHS{job.cost}</h3>
            <img src={job.file} alt="file" className="w-full" />
          </div>
        ))}
      </div>
    </ModalWrapper>
  );
};

PreviewJobs.propTypes = {
  closeAction: PropTypes.func.isRequired,
};

export default PreviewJobs;
