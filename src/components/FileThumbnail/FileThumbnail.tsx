import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classes from "./style.module.scss";
import { useState } from 'react';
import PreviewJobs from '../PreviewJobs/PreviewJobs';

interface Props {
  fileURL: string,
  handleDiscardFile: () => void,
}

const FileThumbnail: React.FC<Props> = ({fileURL, handleDiscardFile}) => {
  const [canPreviewFile, setCanPreviewFile] = useState<Boolean>(false);
 
  return (
    <div className={classes.thumbnail_wrapper}>
      <Button 
        className="transparent app-primary"
        onClick={() => setCanPreviewFile(!canPreviewFile)}
      >
        <img src={fileURL} alt="thumbnail" />
      </Button>
      <Button
        content="Discard and upload new"
        onClick={handleDiscardFile}
        className="transparent app-primary"
      />
      {canPreviewFile && (
        <PreviewJobs 
          jobs={[{file: fileURL, id: 1, cost: "", title: "Uploaded File" }]} 
          open={canPreviewFile}
          closeAction={() => setCanPreviewFile(!canPreviewFile)} 
        />
      )}
    </div>
  )
}


FileThumbnail.prototype={
  fileURL: PropTypes.string,
  handleDiscardFile: PropTypes.func.isRequired
}

export default FileThumbnail;
