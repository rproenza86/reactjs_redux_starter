import User from '../models/User';
import { Request, Response, NextFunction } from 'express';
import config from './../config/main';
import { IUser } from '../common/types';
const jwt = require('jwt-simple');

function encodeTokenForUser (user: IUser) {
  const issueAtTime = new Date().getTime(); // timestamp
  const tokenSubject = user.id;

  return jwt.encode({
                      sub: tokenSubject,
                      iat: issueAtTime
                    }, config.secret);
}

/**
 * POST /api/v1/signin
 * SignIn endpoint
 * @param req.user User model object returned from the comparePassword's 'done' function
 */
export function signingIn(req: Request, res: Response, next: NextFunction) {
  const userData =  {
    name: req.user.name,
    username: req.user.username,
    email: req.user.email
  };

  if(userData.email)
    res.send({ 
      ...userData, 
      token: encodeTokenForUser(req.user),
      success: true
    });
  else  
    res.status(422).json({ error: 'Authentication error: Incorrect username or password', success: false });
}



/**
 * POST /api/v1/users
 * Create user
 */
export function signingUp(req: Request, res: Response, next: NextFunction) {
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
      const responseData = {
        name: user.name,
        token: encodeTokenForUser(user),
        success: true
      };

      res.status(201).json(responseData);
    })
    .catch((err) => {
      res.status(500).json({ err, success: false });
    });

  });
}
