import Passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

Passport.use(new LocalStrategy((username, password, done) => {
	
}));
