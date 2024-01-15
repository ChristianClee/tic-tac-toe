export function getPathServer():string {
  const currentDomain = window.location.host;
  const homeDomain = process.env.REACT_APP_HOME_PATH;
  const developmentPath = process.env.REACT_APP_DEVELOPMENT_URL;
  const productionPath = process.env.REACT_APP_PRODUCTION_URL;
  
  switch (currentDomain) {
    case homeDomain:
      //@ts-ignore
      return developmentPath;
    default:
      //@ts-ignore
      return productionPath;
  }
}

