/* eslint-disable react/prop-types */
import React from 'react';
import { Label } from 'semantic-ui-react';
import './Divider.scss';

const Divider = ({
  title, type, classes = '', isNumbered = false, number = '',
}) => {
  const getForm = () => {
    if (isNumbered) {
      return (
	<div className={`divider__wrapper ${classes}`}>
		<div>
			<Label size="big" circular className="success">
				{number}
			</Label>
		</div>
		<div className={`divider ${type} bold  ${type === 'faint' ? 'p-b-4' : 'p-b-8'}`}>{title}</div>
	</div>
      );
    }
    return (
	<div className={`divider ${type} ${classes} bold  ${type === 'faint' ? 'p-b-4' : 'p-b-8'}`}>{title}</div>
    );
  };

  return (
    getForm()
  );
};


export default Divider;
