//Root route for API
const ROOT_URL = `http://169.254.237.138:3090/`;

//Login route
export const POST_LOGIN = `${ROOT_URL}signin`;

//Otp verify routes
export const POST_OTP = `${ROOT_URL}verifyotp`;
export const POST_RESEND_OTP = `${ROOT_URL}resendotp`;
