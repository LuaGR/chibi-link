interface Env {
  domain: string;
  production: boolean;
}

export const environment: Env = {
  production: false,
  domain: 'http://chibi-server.vercel.app/api/',
};
