import express from "express"
import cors from "cors";

import dbConnection from "./helpers/dbConnect.js"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import adminRoutes from "./routes/admin.routes.js"
import authenticate from "./middlewares/authenticate.js";


try {
    await dbConnection;
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/api/auth', authRoutes)
    app.use(authenticate)
    app.use("/api/user", userRoutes);
    app.use("/api/admin", adminRoutes);


app.listen(8080, ()=>{
    console.log('Backend running on 8080')
})
} catch (error) {
    console.log(error);
}


