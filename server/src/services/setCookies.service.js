import config from "../config/config.js";

export const setTokenCookie = (res, token) => {
  res.cookie('token', token, {
    httpOnly: true,
    secure:config.NODE_ENV === 'production', // for HTTPS
    sameSite: 'Lax', // or 'Strict' if more secure
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
};
