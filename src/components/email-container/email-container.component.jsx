import React from "react";
import {
  EmailContainerSection,
  InputContainer,
  LabelContainer,
  Button,
  Message,
} from "./email-container.styles";

import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import {
  selectIsEmailEmpty,
  selectErrorMessage,
} from "../../redux/email/email.selectors";

import { connect } from "react-redux";
import { emailData } from "../../redux/email/email.utils";
import { setCurrentEmail } from "../../redux/email/email.actions";

const EmailContainer = ({
  error,
  emptyEmail,
  setCurrentEmail,
  history,
  match,
}) => {
  const onClickHandler = (event) => {
    setCurrentEmail(event);

    if (emailData(event)) {
      return history.push(`${match.url}sign-up`);
    }
  };

  return (
    <EmailContainerSection>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <InputContainer inputData={emptyEmail}>
        <input type="email" name="user_email" />

        <LabelContainer>Email address</LabelContainer>
        <Message message={emptyEmail}>{error}</Message>
        <Button type="submit" onClick={onClickHandler}>
          Get Started &#10095;
        </Button>
      </InputContainer>
    </EmailContainerSection>
  );
};

const mapStateToProps = createStructuredSelector({
  emptyEmail: selectIsEmailEmpty,
  error: selectErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentEmail: (email) => dispatch(setCurrentEmail(email)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EmailContainer)
);
