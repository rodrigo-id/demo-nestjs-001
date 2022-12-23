export default () => ({
  port: process.env.PORT || 3000,
  clientCredentials: {
    id: process.env.CLIENT_ID || '123-456',
    key: process.env.KEY_ID || 'asdasds',
  },
});
