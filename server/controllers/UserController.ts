import User from '../models/User';
import { Request, Response, NextFunction } from 'express';
import { Timestamp } from 'bson';
import { Document } from 'mongoose';
import config from './../config/main';
import { IUser } from '../common/types';

/**
 * GET /api/v1/users/
 * Get full users list
 */
export function getUsersList(req: Request, res: Response, next: NextFunction) {
  const id: String = req.params.id;

  User.find()
  .then((users) => {
    res.status(200).json({ users, success: true });
  })
  .catch((err) => {
    res.status(500).json({ err, success: false });
  })
}

/**
 * GET /api/v1/users/:id
 * Get user by id
 */
export function getUserById(req: Request, res: Response, next: NextFunction) {
  const id: String = req.params.id;

  User.findById(id)
  .then( (user: IUser = <IUser>{}) => {
    res.status(200).json({ user, success: true});
  })
  .catch((err) => {
    res.status(500).json({ err, success: false });
  })
}

/**
 * POST /api/v1/users
 * Create user
 */
export function createUser(req: Request, res: Response, next: NextFunction) {
  const {
    name,
    username,
    email,
    password
  } = req.body;

  User.findOne({email: email.toLowerCase()}, (err, alreadyExistingUser) => {
    if(err) return next(err);

    if(alreadyExistingUser) {
      return res.status(422).json({ error: `Email '${email}' is already in use`, success: false });
    }

    const user: IUser = new User({
      name,
      username,
      email,
      password
    }) as IUser;

    user.save()
    .then((user: IUser = <IUser>{}) => {
      res.status(201).json({ user, success: true });
    })
    .catch((err) => {
      res.status(500).json({ err, success: false });
    });

  });
}

/**
 * PUT /api/v1/users
 * Update user by id 
 */
export function updateUser(req: Request, res: Response, next: NextFunction) {
  const id: String = req.params.id;

  User.findByIdAndUpdate(id, req.body)
  .then((user: IUser = <IUser>{}) => {
    res.status(200).json({ user, success: true });
  })
  .catch((err) => {
    res.status(500).json({ err, success: false });
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
    res.status(204).json({ user, success: true });
  })
  .catch((err) => {
    res.status(500).json({ err, success: false });
  })
}

/**
 * GET /api/v1/healthz
 * Kubernetes livenessProbe
 */
export function livenessProbe(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({ server_status: "API server alive.", success: true });
}

/**
 * GET /api/v1/readiness
 * Kubernetes readinessProbe
 */
export function readinessProbe(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({ server_status: "API Ready.", success: true });
}