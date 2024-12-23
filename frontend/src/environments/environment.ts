interface Env {
  domain: string;
  baseUrl: string;
  production: boolean;
}

export const environment: Env = {
  production: true,
  domain: 'https://chlk.vercel.app/',
  baseUrl: 'https://chibi-link.vercel.app/'
};
