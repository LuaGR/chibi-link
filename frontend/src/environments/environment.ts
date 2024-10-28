interface Env {
  domain: string;
  production: boolean;
}

export const environment: Env = {
  production: true,
  domain: 'http://localhost:3000/api/',
};
