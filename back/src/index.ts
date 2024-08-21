import { app } from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

// connectDB();

app.listen(PORT, ():void => {
	console.log(`microservice running at port ${PORT}`);
})