/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
// import logo from '../../images/smartprintlogo.png';
import Header from '../header/header';
import HeaderOffset from '../header/header-offset';
import './layout.scss';
import Navigation from '../NavLinks/NavLinks';
// import NavToggle from '../nav-toggle/nav-toggle';

const Layout = ({ children }) => {
  const [hasShrunk, setHasShrunk] = useState(false);

  return (
	<div>
		<div className={`${hasShrunk ? 'app-container__shrink' : 'app-container'} layout`}>
			<div className="nav-pane">
				<div className="nav-content">
					<div className="m-t-20 text-center" style={{margin: "auto", width: "100%"}}>
						<Image
							src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/fingerprint.png" 
							size="mini"
							style={{ margin: "auto", marginTop: "20px" }}
						/>
						<div className="app-primary p-l-20 bold" style={{ color: 'white' }}>
							[Thumbprint] Logo
						</div>
						<Navigation />
					</div>
				</div>
			</div>
			<div className="main-content">
				<div>
					<Header
						hasShrunk={hasShrunk}
						handleToggleAction={() => setHasShrunk(!hasShrunk)}
					/>
					<HeaderOffset />
					<div className="main-content__bodys">
						{children}
					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Layout;
