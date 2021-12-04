import React from "react";
import AppMainContent from "components/app-main-content/app-main-content";
import AppLoader from "components/AppLoader/AppLoader";


const AppProgressIndicator = ({message}: {message:string}) => {
  return (
  <AppMainContent
		parentClasses="app-pad"
    aside={false}
	>
		<div className="text-center checkout__wrapper">
			<div className="caption-item">
				<AppLoader />
        <p className="m-t-10">{message}</p>
			</div>
		</div>
	</AppMainContent>
  )
}

export default AppProgressIndicator;