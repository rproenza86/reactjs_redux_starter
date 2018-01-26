import User from '../models/User';
import config from './../config/main';
import { IUser } from '../common/types';
// import { use as passportUse } from 'passport';
import * as passport from 'passport';
import { Timestamp } from 'bson';
import { Strategy as jwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import * as jwt from 'jwt-simple';

/**
 * JWT Strategy
 */
interface IPayload {
    sub: String,
    iat: Timestamp
}

// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

/**
 * Create JWT Strategy
 * @param payload the {
                        sub: tokenSubject,
                        iat: issueAtTime
                        } 
    used to create the encoded token
 * @param done callback used depending of the auth process result
 */
const jwtLogin = new jwtStrategy(jwtOptions, (payload: IPayload, done: any) => {
    User.findById(payload.sub)
    .then( (user: IUser = <IUser>{}) => {
        if(user) 
            done(null, user);
        else    
            done(null, false);
    })
    .catch((err) => {
        return done(err, false);
    })
});

// Tell passport to use this strategy
export const authdRequest = passport.use(jwtLogin);

/**
 * END of JWT Strategy
 */




/**
 * Local Strategy
 */
const localOptions = {
    usernameField: 'username'
    // passwordField: 'passwd',
    // session: false
};
const localLogin = new LocalStrategy(localOptions, (username: String = '', password: string = '', done) => {
    User.findOne({username: username}, (err: any, userFound: IUser) => {
        if(err) return done(err);
        if(!userFound) return done(null, false);
         
        userFound.comparePassword(password, (err, isMatch): any => {
            if(err) return done(err);
            if(!isMatch) 
                return done(null, false);
            else
                return done(null, userFound);
        });
    });
});
export const  signingIn =  passport.use(localLogin)
/**
 * END of Local Strategy
 */

// const passports = {
    // signingUp: signingUpStrategy
// }