const argumentos = process.argv.slice(2);

// export const opMode = argumentos[0] || 'fork';

export const clientID = argumentos[0] || process.env.FACEBOOK_CLIENT_ID;

export const clientSecret = argumentos[1] || process.env.FACEBOOK_CLIENT_SECRET;
