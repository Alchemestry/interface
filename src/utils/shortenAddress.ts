export const shortenAddress = (address: string, fromStart = 4, fromEnd = 4) =>
  address.slice(0, 2 + fromStart) +
  '...' +
  address.slice(address.length - fromEnd, address.length);
