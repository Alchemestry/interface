export const timeout = (ms = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));
