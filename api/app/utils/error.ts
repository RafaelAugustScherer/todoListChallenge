const Error = (status: number, message: string) => ({
  status,
  message,
  isExpected: true,
});

export const ERRORS = {
  USER: {
    NOT_FOUND: Error(404, 'User not found'),
  },
};