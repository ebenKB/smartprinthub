import React, { ReactElement} from "react";
import { Button } from "semantic-ui-react";
import './style.scss';

interface Props {
  children: Object,
  icon: ReactElement,
  classes: Object,
  size: any,
  onClick: any,
  isLoading: boolean,
}
/** 
 * @param {*} classes Semantic ui default classes
 * @param {*} icon The icon to render
 * @param {*} children The content of the button
 * @returns Semantic UI button with a static icon
*/

const ButtonWithFixedIcon: React.FC<Props> = ({ children, icon, classes, size, onClick, isLoading, ...rest  }) => {
  return (
    <Button 
      className={`fixed_button-wrapper 
      ${classes}`} 
      size={size}
      onClick={onClick}
      loading={isLoading}
      { ...rest }
    >
      <span className="fixed-icon">
        {icon}
      </span>
      {children}
    </Button>
  )
}

export default ButtonWithFixedIcon;