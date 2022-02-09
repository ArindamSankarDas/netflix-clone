// Verifying Email
const verifyEmail = (value) => {
  const symbolAt = value.indexOf("@");
  const dot = value.indexOf(".");

  if (symbolAt < 1 || dot <= symbolAt + 2 || dot === value.length - 1) {
    return false;
  } else {
    return true;
  }
};

// This Triggers when there is a change in event
export const eventChange = (eventData) => {
  const input = eventData.nativeEvent.target.parentElement.children;
  const inputVal = input[0].value;

  if (inputVal.length === 0) {
    return false;
  } else {
    return verifyEmail(inputVal);
  }
};

// This displays the error based on the received information
export const eventContent = (eventData) => {
  const input = eventData.nativeEvent.target.parentElement.children;
  const inputVal = input[0].value;

  if (inputVal.length === 0) {
    return "Email is required.";
  } else if (!verifyEmail(inputVal)) {
    return "Please enter a valid email address.";
  }
};

export const emailData = (eventData) => {
  const input = eventData.nativeEvent.target.parentElement.children;
  const inputVal = input[0].value;

  if (inputVal.length === 0) {
    return;
  } else {
    return verifyEmail(inputVal);
  }
};
