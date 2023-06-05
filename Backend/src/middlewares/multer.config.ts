import multer from "multer";


export default multer({
    limits:{
        fileSize: 5*1024*1024, // 5 Mb
    },
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: function (_req, file, cb) {
          cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
        }
    }),
    fileFilter: (_req, file, cb) => {
        // Check the file extension
        const ext = file.originalname.split('.').pop() as string;      
        if (['jpg', 'jpeg', 'png'].includes(ext)) {
            cb(null, true); // Accept the file
        } else {
            cb(new Error ('Invalid File Extension!')); // Reject the file
        }
    }
})