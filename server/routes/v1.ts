import * as express from 'express';
import { 
  getUserById,  
  updateUser, 
  deleteUser, 
  livenessProbe, 
  readinessProbe,
  getUsersList 
} from '../controllers/UserController';
import { 
  signingIn,
  signingUp
} from '../controllers/AuthenticationController';
import { authdRequest, signingIn as signingInRequest} from '../services/passport';

// server middleware helpers
const requireAuth = authdRequest.authenticate('jwt', { session: false });
const requireSigningIn = signingInRequest.authenticate('local', { session: false });

export default (app) => {

  // api routes
  const apiRoutes = express.Router();
  const userRoutes = express.Router();

  /********************************
  === user endpoints
  ********************************/

  // append user routes to api routes
  apiRoutes.use('/users', userRoutes);

  /**
   * GET /api/v1/users/
   * Get full users list
   */
  userRoutes.get('/', requireAuth, getUsersList);

  /**
   * GET /api/v1/users/:id
   * Get user by id
   * @param id          // user id
   * @param requireAuth // auth middleware handler
   * @param getUserById // endpoint handler
   */
  userRoutes.get('/:id', requireAuth, getUserById);

  /**
   * POST /api/v1/users
   * Create user
   */
  userRoutes.post('/', signingUp);

  /**
   * POST /api/v1/signin
   * SignIn endpoint
   * @param username User name: unique identifier
   * @param password Plane password string 
   */
  userRoutes.post('/signin', requireSigningIn, signingIn);

  /**
   * PUT /api/v1/users/:id
   * Update user by id 
   */
  userRoutes.put('/:id', requireAuth, updateUser);

  /**
   * DELETE /api/v1/users/:id
   * Update user by id 
   */
  userRoutes.delete('/:id', requireAuth, deleteUser);

  /**
   * GET /api/v1/readiness
   * Kubernetes readinessProbe
   */
  apiRoutes.get('/readiness', readinessProbe);

  /**
   * GET /api/v1/healthz
   * Kubernetes livenessProbe
   */
  apiRoutes.get('/healthz', livenessProbe);

  /********************************
  === append apiRoutes to app
  ********************************/

  app.use('/api/v1', apiRoutes);

};