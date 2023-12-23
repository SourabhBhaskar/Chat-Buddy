const uploadFilesRouter = require("express").Router();
const { upload } = require("../middlewares/multer.middleware");


uploadFilesRouter.post('/image',upload.single('image'), (req, res) => {
    console.log(req.file);
})

uploadFilesRouter.post('/audio', (req, res) => {

})

uploadFilesRouter.post('/video', (req, res) => {

})


module.exports = { uploadFilesRouter };