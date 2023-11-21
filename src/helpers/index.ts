export const sleep = (seconds: number) =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

export const consoleTime = (message?: any, ...optionalParams: any[]) => {
  const now = new Date();
  console.log(now.toLocaleTimeString(), message, ...optionalParams);
};
