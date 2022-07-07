import express from 'express'
import { loginRouter } from '../routes/login.js';
import passport from 'passport';

const app = express();

// Middlewares
app.use(express.json());
app.use("/auth", loginRouter);
app.use(passport.initialize());

app.listen(3000, () => console.log("http://localhost:3000"));