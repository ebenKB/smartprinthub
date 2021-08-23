import React, { ReactElement} from "react";
import { Button } from "semantic-ui-react";
import './style.scss';

interface Props {
  children: Object,
  icon: ReactElement,
  classes: Object,
  size: any,
  onClick: any
}
/** 
 * @param {*} classes Semantic ui default classes
 * @param {*} icon The icon to render
 * @param {*} children The content of the button
 * @returns Semantic UI button with a static icon
*/

const ButtonWithFixedIcon: React.FC<Props> = ({ children, icon, classes, size, onClick, ...rest  }) => {
  return (
    <Button 
      className={`fixed_button-wrapper 
      ${classes}`} 
      { ...rest }
      size={size}
      onClick={onClick}
    >
      <span className="fixed-icon">
        {icon}
      </span>
      {children}
    </Button>
  )
}

export default ButtonWithFixedIcon;