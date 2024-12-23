interface Env {
  domain: string;
  baseUrl: string;
  production: boolean;
}

export const environment: Env = {
  production: false,
  domain: 'http://localhost:3000/',
  baseUrl: 'http://localhost:4200/'
};
