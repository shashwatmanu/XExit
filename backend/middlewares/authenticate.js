import jwt from "jsonwebtoken";

export default function (req, res, next) {
    const token = req.header("Authorization");
    if(!token) return res.status(401).json({error: "Access denied"});
    try {
        const user = jwt.verify(token, 'samplesecret');
        req.user= {
            _id: user.userId
        }
        next()
    } catch (error) {
        res.status(401).json({error: 'Invalid token'})
    }
}