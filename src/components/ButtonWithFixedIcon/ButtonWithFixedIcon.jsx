import React from "react";
import { Button } from "semantic-ui-react";
import './style.scss';

/**
 * 
 * @param {*} classes Semantic ui default classes
 * @param {*} icon The icon to render
 * @param {*} children The content of the button
 * @returns Semantic UI button with a static icon
 */
const ButtonWithFixedIcon = ({children, icon, classes, ...rest }) => {
  return (
    <Button className={`fixed_button-wrapper ${classes}`} { ...rest }>
      <span className="fixed-icon">
        {icon}
      </span>
      {children}
    </Button>
  )
}

export default ButtonWithFixedIcon;
