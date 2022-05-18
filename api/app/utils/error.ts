const Error = (status: number, message: string) => ({
  status,
  message,
  isExpected: true,
});

export const ERRORS = {
  USER: {
    NOT_FOUND: Error(404, 'User not found'),
  },
  AUTH: {
    TOKEN_NOT_FOUND: Error(401, 'Token not found'),
    INVALID_TOKEN: Error(403, 'Invalid token'),
  },
};