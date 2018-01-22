import User from '../models/User';

/**
 * GET /api/v1/users/
 * Get full users list
 */
export function getUsersList(req, res, next) {
  const id = req.params.id;

  User.find()
  .then((users) => {
    res.status(200).json({ users });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

/**
 * GET /api/v1/users/:id
 * Get user by id
 */
export function getUserById(req, res, next) {
  const id = req.params.id;

  User.findById(id)
  .then((user) => {
    res.status(200).json({ user });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

/**
 * POST /api/v1/users
 * Create user
 */
export function createUser(req, res, next) {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const user = new User({
    name,
    username,
    email,
    password
  });

  user.save()
  .then((user) => {
    res.status(201).json({ user });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

/**
 * PUT /api/v1/users
 * Update user by id 
 */
export function updateUser(req, res, next) {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body)
  .then((user) => {
    res.status(200).json({ user });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

/**
 * DELETE /api/v1/users/:id
 * Update user by id 
 */
export function deleteUser(req, res, next) {
  const id = req.params.id;

  User.findByIdAndRemove(id)
  .then((user) => {
    res.status(204).json({ user });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}

/**
 * GET /api/v1/healthz
 * Kubernetes livenessProbe
 */
export function livenessProbe(req, res, next) {
  res.status(200).json({ server_status: "API server alive." });
}

/**
 * GET /api/v1/readiness
 * Kubernetes readinessProbe
 */
export function readinessProbe(req, res, next) {
  res.status(200).json({ server_status: "API Ready." });
}