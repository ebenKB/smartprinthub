import React, { useEffect, useState, Suspense, lazy } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import DefaultRoutes from '../../routes/default-routes';
import AppLoader from '../AppLoader/AppLoader';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import { Dimmer, Loader } from "semantic-ui-react";
const SignIn = lazy(() => import('../Signin/Signin'));
const Signup = lazy(() => import("../../pages/Auth/signup/Signup"))

const CompanyRouteSelector = () => {
  const params = useParams();
  const history = useHistory();
  console.log("Params", params)
  console.log("History", history.location);
  const [company, setCompany] = useState({ isURLPresent: false, isCheckingURL: true, })

  const getCompanyUrl = () => {
    const companyURL = history.location.pathname.split("/")[1];
    console.log("Company url", companyURL)
    setTimeout(() => {
      setCompany({
        ...company,
        isURLPresent: true,
        isCheckingURL: false,
      })
    }, 2000)
  }

  useEffect(() => {
    getCompanyUrl();
  }, []);

  const getRoute = () => {
    if (company.isURLPresent) {
      // forward slash anything, preceeded by these characters and ends with forward slah e.g. /example-123_test/
      const subdirs = history.location.pathname.split(/\/[a-zA-Z0-9-_/\s]*\//);
      console.log("Sub dir", subdirs)
      const companySubDir = subdirs[1];
      switch(companySubDir) {
        case "signin": {
          return <SignIn />
        }

        case "login": {
          return <SignIn />
        }

        default: {
          return <PageNotFound />
        }
      }

      // console.log("Getting routes")
      // {DefaultRoutes.map((route, index) => (
      //   <Route
      //     key={index}
      //     path={route.path}
      //     exact={route.exact}
      //   >
      //     <Suspense fallback={<AppLoader />}>
      //       <route.main />
      //     </Suspense>
      //   </Route>
      // ))}
      
    } else if (!company.isCheckingURL){
      return <PageNotFound />
    }
  }

  return (
    <div>
      {company.isCheckingURL && (
      <Dimmer active inverted>
        <Loader size="massive"></Loader>
      </Dimmer>
      )}
      {getRoute()}
    </div>
  )
}
export default CompanyRouteSelector;
