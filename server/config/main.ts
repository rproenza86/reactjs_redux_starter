const mongoURI = process.env.MONGO_SERVICE_HOST || "localhost:27017/blog-api";

 const config = {

  // mongodb locations
  db: `mongodb://${mongoURI}`,

  // port
  port: process.env.PORT || 3002,

  // test environment
  test_env: 'test',
  test_db: 'blog-api-test',
  test_port: 3022,

  // secret for jwt
  secret: process.env.secret || 'local_super_secret'
};

export default config;