export const generateUniqueId = () => {
  const randomInt = Math.floor((1 + Math.random()) * 10000);
  return randomInt.toString(16).substring(0, 7);
};
