const argumentos = process.argv.slice(2);

export const PORT = argumentos[0] || process.env.PORT;

export const clientID = argumentos[1] || process.env.FACEBOOK_CLIENT_ID;

export const clientSecret = argumentos[2] || process.env.FACEBOOK_CLIENT_SECRET;
