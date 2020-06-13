/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'semantic-ui-react';
import {
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
} from '@material-ui/icons';
import './nav-toggle.scss';

const NavToggle = ({ collapsed, handleAction }) => (
	<>
		{(() => {
		  if (!collapsed) {
		    return (
			<div className={`${collapsed ? 'nav-toggle__shrink' : 'nav-toggle'}`}>
				<Button
					className="transparent"
					icon={<ArrowBackIcon />}
					onClick={() => handleAction()}
				/>
			</div>
		    );
		  }
		  return (
			<div className={`${collapsed ? 'nav-toggle__shrink' : 'nav-toggle'}`}>
				<Button
					className="transparent"
					icon={<ArrowForwardIcon />}
					onClick={() => handleAction()}
				/>
			</div>
		  );
		})()}
	</>
);

export default NavToggle;
