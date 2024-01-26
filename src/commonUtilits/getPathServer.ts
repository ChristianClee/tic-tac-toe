class ServerPath {
  private devDomain: string;
  private prodDomain: string;
  private ws: string;
  private http: string;
  private serverPort: string;
  private currentDomain: string;
  private homeDomain: string;
  private domain: boolean;

  constructor() {
    this.devDomain = process.env.REACT_APP_DEVELOPMENT_DOMAIN || "";
    this.prodDomain = process.env.REACT_APP_PRODUCTION_DOMAIN || "";
    this.ws = process.env.REACT_APP_WS || "";
    this.http = process.env.REACT_APP_HTTP || "";
    this.serverPort = process.env.REACT_APP_PORT || "";
    this.currentDomain = this.getCurrentDomainPath();
    this.homeDomain = process.env.REACT_APP_HOME_PATH || "";
    this.domain = this.currentDomain === this.homeDomain;
  }
  getCurrentDomainPath(): string {
    return window.location.host?.split(":")[0];
  }

  Http():string {
    const domain = this.getDomain();
    return this.http + domain + this.serverPort;
  }

  Ws():string {
    const domain = this.getDomain()
    return this.ws + domain + this.serverPort;
  }

  getDomain():string {
    let domain;
    if (this.domain) {
      domain = this.devDomain;
    } else {
      domain = this.prodDomain;
    }
    return domain
  }
}

export const serverPath = new ServerPath()