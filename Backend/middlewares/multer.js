import multer from "multer"; //middleware for handling multipart/form-data , which is primarily used for uploading files.

const storage = multer.memoryStorage(); //is used to configure Multer to store files in memory as Buffer objects. This is useful for processing files directly in memory without saving them to disk

export const singleUpload = multer({storage}).single("file"); //This line creates a middleware function named singleUpload that handles single file uploads. The single("file") method specifies that the middleware should expect a single file upload with the form field name "file".