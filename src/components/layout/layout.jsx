/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'semantic-ui-react';
import Header from '../header/header';
import HeaderOffset from '../header/header-offset';
import './layout.scss';
import Navigation from '../NavLinks/NavLinks';
import { useDispatch, useSelector } from 'react-redux';
import { selectAppProgress, selectMenuState, toggleNavMenu } from 'redux/slices/app';
import CustomLinearProgress from 'components/LinearProgress/LinearProgress';

const Layout = ({ children }) => {
	const dispatch = useDispatch();
	const hasToggleMenu = useSelector(selectMenuState);
	const appProgress = useSelector(selectAppProgress);

  return (
		<div>
		{appProgress && appProgress.status && (
			<div className="app_progress">
				<CustomLinearProgress progressEvent={appProgress}/>
			</div>
		)}
		<div className={`${hasToggleMenu ? 'app-container__shrink' : 'app-container'} layout`}>
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
						hasShrunk={hasToggleMenu}
						handleToggleAction={() => dispatch(toggleNavMenu())}
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
