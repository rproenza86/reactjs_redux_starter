const config = {
  apiServer: {
    protocol: process.env.API_SERVICE_PTCL || 'http',
    host: process.env.API_SERVICE_HOST || 'localhost',
    port: process.env.API_SERVICE_PORT || '3002',
    version: process.env.API_SERVICE_VERION || 'api/v1',
  }
};

export default config;