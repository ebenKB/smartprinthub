import React, { useContext } from 'react';
import { FileHandlerContext, FileHandlerProvider } from '../../context/FileHandlerContext';
import FileItemHandler from '../FileItemHandler/FileItemHandler';
import './FileHandler.scss';


const FileHandler = ({ file }) => {
	const {setFiles} = useContext(FileHandlerContext)
	setFiles(file)
	
	return (
		<div className="file-handler__wrapper">
			<div className="file-handlder__item">
				<FileItemHandler />
			</div>
		</div>
	)
}


export default FileHandler;
