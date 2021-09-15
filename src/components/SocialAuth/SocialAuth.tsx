import React from "react";
import { Form, Button, Divider, Grid } from 'semantic-ui-react';
import ButtonWithFixedIcon from '../ButtonWithFixedIcon/ButtonWithFixedIcon';
import { ReactComponent as Google } from "../../images/google.svg"
import { ReactComponent as Facebook } from "../../images/facebook.svg"

const SocialAuth = () => {
  const handleContinueWithGoogle = () => {
    console.log("Handling google social auth")
  }

  const handleContinueWithFacebook = () => {
    console.log("Doing facebook social auth")
  }

 return (
  <div className="m-t-40">
  <Grid>
    <Grid.Row>
      <ButtonWithFixedIcon
        classes="fluid"
        size="large"
        onClick={handleContinueWithGoogle}
        icon={<Google className="icon medium"/>}
        isLoading={false}
      >
        <span>Continue with Google</span>
      </ButtonWithFixedIcon>
    </Grid.Row>
    <Grid.Row>
      <ButtonWithFixedIcon
        classes="fluid"
        size="large"
        onClick={handleContinueWithFacebook}
        icon={<Facebook className="icon medium"/>}
        isLoading={false}
      >
        <span>Continue with Facebook</span>
      </ButtonWithFixedIcon>
    </Grid.Row>
  </Grid>
</div>
  )
}

export default SocialAuth;
