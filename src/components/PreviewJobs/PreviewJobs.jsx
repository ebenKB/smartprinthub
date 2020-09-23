/* eslint-disable react/boolean-prop-naming */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import './PreviewJobs.scss';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Divider from '../AppDivider/AppDivider';

const PreviewJobs = ({ closeAction }) => {
  return (
    <ModalWrapper closeAction={closeAction}>
      <div className="preview-wrapper">
        <Divider type="thick" title="3 Jobs" classes="m-b-20" />
        <div className="preiview-item">
          <h3>Birthday Cards</h3>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/graphic-design-basics/_jcr_content/main-pars/image/5407-graphic-design-basics_1408x792.jpg" alt="" />
        </div>
        <div className="preiview-item m-t-20">
          <h3>Birthday Cards</h3>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/graphic-design-basics/_jcr_content/main-pars/image/5407-graphic-design-basics_1408x792.jpg" alt="" />
        </div>
        <div className="preiview-item m-t-20">
          <h3>Birthday Cards</h3>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/graphic-design-basics/_jcr_content/main-pars/image/5407-graphic-design-basics_1408x792.jpg" alt="" />
        </div>
        <div className="preiview-item m-t-20">
          <h3>Birthday Cards</h3>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/graphic-design-basics/_jcr_content/main-pars/image/5407-graphic-design-basics_1408x792.jpg" alt="" />
        </div>
      </div>
    </ModalWrapper>
  );
};

PreviewJobs.propTypes = {
  // jobs: PropTypes.object.isRequired,
  closeAction: PropTypes.func.isRequired,
};

export default PreviewJobs;
