interface Env {
  domain: string;
  production: boolean;
}

export const environment: Env = {
  production: true,
  domain: 'https://chibi-server.vercel.app/api/',
};
