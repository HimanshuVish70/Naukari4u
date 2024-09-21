import jwt from "jsonwebtoken"; //This line imports the jsonwebtoken library, which is used to create, sign, and verify JSON Web Tokens (JWTs)

const isAuthenticated = async (req, res, next) => { //This line defines an asynchronous middleware function named isAuthenticated
    try {
        const token = req.cookies.token; //This line retrieves the token from the cookies of the incoming request
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        };
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log(error);
    }
}
export default isAuthenticated;

//In summary, this code defines a middleware function that checks if a user is authenticated by verifying a JWT stored in the cookies. If the token is valid, it attaches the user ID to the request object and allows the request to proceed. If the token is missing or invalid, it sends an appropriate error response.