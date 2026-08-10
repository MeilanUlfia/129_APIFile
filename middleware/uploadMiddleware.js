const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedExtensions = [".jpg", ".jpeg", ".png"];

    const extension = path
        .extname(file.originalname)
        .toLowerCase();

    console.log("Nama file:", file.originalname);
    console.log("MIME type:", file.mimetype);
    console.log("Extension:", extension);

    if (allowedExtensions.includes(extension)) {
        cb(null, true);
    } else {
        cb(new Error("Hanya file JPG, JPEG, dan PNG yang diperbolehkan."));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024
    }
});

module.exports = upload;