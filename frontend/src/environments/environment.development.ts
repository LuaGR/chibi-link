interface Env {
  domain: string;
  production: boolean;
}

export const environment: Env = {
  production: false,
  domain: 'https://chibi-server.vercel.app/api/',
};
