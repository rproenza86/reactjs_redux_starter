import * as express from 'express';
import { 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser, 
  livenessProbe, 
  readinessProbe,
  getUsersList 
} from '../controllers/UserController';

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
  userRoutes.get('/', getUsersList);

  /**
   * GET /api/v1/users/:id
   * Get user by id
   */
  userRoutes.get('/:id', getUserById);

  /**
   * POST /api/v1/users
   * Create user
   */
  userRoutes.post('/', createUser);

  /**
   * PUT /api/v1/users/:id
   * Update user by id 
   */
  userRoutes.put('/:id', updateUser);

  /**
   * DELETE /api/v1/users/:id
   * Update user by id 
   */
  userRoutes.delete('/:id', deleteUser);

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