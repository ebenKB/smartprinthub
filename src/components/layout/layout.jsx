/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Image, Button } from 'semantic-ui-react';
import logo from '../../images/smartprintlogo.png';
import Header from '../header/header';
import HeaderOffset from '../header/header-offset';
import './layout.scss';
import Navigation from '../navigation/navigation';

const Layout = ({ children }) => {
  const [hasShrunk, setHasShrunk] = useState(false);

  return (
	<div>
		{/* <div>
			<Header />
			<HeaderOffset />
		</div> */}
		<div className={`${hasShrunk ? 'nav-toggle__shrink' : 'nav-toggle'}`}>
			<Button
				className="transparent"
				content="x"
				icon="x"
				onClick={() => setHasShrunk(!hasShrunk)}
			/>
		</div>
		<div className={`${hasShrunk ? 'app-container__shrink' : 'app-container'} layout`}>
			<div className="nav-pane">
				<div className="nav-content">
					<div className="m-t-20">
						<Image src={logo} size="small" />
						<Navigation />
					</div>
				</div>
			</div>
			<div className="main-content">
				<div>
					<Header />
					<HeaderOffset />
					<div className="main-content__body">
						{children}
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Layout;
