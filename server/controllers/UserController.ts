import User from '../models/User';
import { Request, Response, NextFunction } from 'express';
import { Timestamp } from 'bson';
import { Document } from 'mongoose';

interface IUser extends Document {
  _id: String,
  password: String,
  email: String,
  username: String,
  name: String,
  timestamp: Timestamp
}

/**
 * GET /api/v1/users/
 * Get full users list
 */
export function getUsersList(req: Request, res: Response, next: NextFunction) {
  const id: String = req.params.id;

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
export function getUserById(req: Request, res: Response, next: NextFunction) {
  const id: String = req.params.id;

  User.findById(id)
  .then((user: IUser = <IUser>{}) => {
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
export function createUser(req: Request, res: Response, next: NextFunction) {
  const name = req.body.name;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const user: IUser = new User({
    name,
    username,
    email,
    password
  }) as IUser;

  user.save()
  .then((user: IUser = <IUser>{}) => {
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
export function updateUser(req: Request, res: Response, next: NextFunction) {
  const id: String = req.params.id;

  User.findByIdAndUpdate(id, req.body)
  .then((user: IUser = <IUser>{}) => {
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
export function deleteUser(req: Request, res: Response, next: NextFunction) {
  const id: String = req.params.id;

  User.findByIdAndRemove(id)
  .then((user: IUser = <IUser>{}) => {
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
export function livenessProbe(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({ server_status: "API server alive." });
}

/**
 * GET /api/v1/readiness
 * Kubernetes readinessProbe
 */
export function readinessProbe(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({ server_status: "API Ready." });
}