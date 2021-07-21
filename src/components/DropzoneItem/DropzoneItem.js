/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Button, Input } from 'semantic-ui-react';
import { ReactComponent as Menu } from '../../svg/menu.svg';
import { ReactComponent as PowerPointIcon } from '../../svg/pptx.svg';
import { ReactComponent as PDFIcon } from '../../svg/pdf.svg';
import { ReactComponent as JPEGIcon } from '../../svg/jpg.svg';
import { ReactComponent as EXCELIcon } from '../../svg/excel.svg';
import { ReactComponent as WORDIcon } from '../../svg/word.svg';
import { ReactComponent as CSVIcon } from '../../svg/csv.svg';
import { ReactComponent as ALTIcon } from '../../svg/file.svg';
import {
  PDF, EXCEL, WORD, JPEG, CSV, PPTX,
} from '../../utils/fileTypes';


const DropzoneItem = ({
  file, handleFileUpdate, deleteFile, idx,
}) => {
  const [canEditTitle, setTitleEditable] = useState(false);
  /**
   * This fonunction is used to delete files that the user has uploaded
   * @param {*} fileToDelete the file to delete
   */
  const handleDelete = (fileToDelete) => {
    deleteFile(fileToDelete);
  };

  // this function returns the appropriate icon based on the file type
  const getFileIcon = () => {
    const { data: { type } } = file;
    if (type === PDF) {
      return (<PDFIcon className="dark medium  icon logo w-full" />);
    }

    if (type === WORD) {
      return (<WORDIcon className="dark medium icon w-full" />);
    }

    if (type === CSV) {
      return (<CSVIcon className="dark medium icon w-full" />);
    }

    if (type === JPEG) {
      return (<JPEGIcon className="dark medium icon w-full" />);
    }

    if (type === EXCEL) {
      return (<EXCELIcon className="dark medium icon w-full" />);
    }

    if (type === PPTX) {
      return (<PowerPointIcon className="dark medium icon w-full" />);
    }

    return (<ALTIcon className="dark medium logo" />);

  };

  const updateFile = (e) => {
    const newFile = { ...file, title: e.target.value };
    handleFileUpdate(file, newFile);
  };

  const getTitle = () => {
    if (canEditTitle) {
      return (<Input value={file.title} onChange={updateFile} name="title" />
      );
    }
    return <div className="bold xsm-caption">{file.title}</div>;
  };

  return (
	<div className="dropzone-item">
		<div>
			<Menu className="small logo" />
		</div>
		<div>
			{getTitle()}
			<div className="light-caption xsm-caption">
				{file && file.name}
			</div>
		</div>
		<div className="w-full">
			{getFileIcon()}
		</div>
		<Button.Group basic size="mini" className="dropzone-cta">
			<Button onClick={() => setTitleEditable(true)} type="Button">EDIT</Button>
			<Button
				onClick={() => handleDelete(idx)}
			>
				DELETE
			</Button>
		</Button.Group>
	</div>
  );
};

DropzoneItem.propTypes = {
  idx: PropTypes.number.isRequired,
  file: PropTypes.object.isRequired,
  deleteFile: PropTypes.func.isRequired,
  handleFileUpdate: PropTypes.func.isRequired,
};
export default DropzoneItem;
