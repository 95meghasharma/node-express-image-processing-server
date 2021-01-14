const Router = require('express');
const multer = require('multer');
const { call } = require('ramda');
const { requests } = require('sinon');
const router = Router();
const storage = multer.diskStorage({ destination: 'api/uploads/', filename: fileName});
const upload = multer({
  fileFilter: fileFilter,
  storage: storage
});
router.post('/upload', upload.single('photo'), (request, response) => {
  if (request.fileValidationError) {
    return response.status(400, json({ error: request.fileValidationError }));
  } else {
    return response.status(201, json({ success: true }));
  }
})
function fileName(request, file, callback) {
  callback(null, file);
}

function fileFilter(request, file, callback) {
  if (file.mimetype === 'image/png') {
    request.fileValidationError = 'Wrong file type';
    callback(null, false, {error: 'Wrong file type'})
  } else {
    callback(null, true);
}
}

module.exports = router;
