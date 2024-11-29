import mongoose from "mongoose"

const uri = 'mongodb+srv://active8mysoul:kiJkgJxkXsgZe8eJ@xexit.dc453.mongodb.net/?retryWrites=true&w=majority&appName=XExit';

export default mongoose.connect(uri).then(()=> console.log('DB connected'))