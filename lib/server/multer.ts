import path from 'path'
import multer from 'multer'

export const createUploader = (options?: multer.Options): multer.Multer => {
  const storage =
    process.env.NODE_ENV === 'development' ? devStorage : prodStorage
  return multer({ storage, ...options })
}

const devStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./public/uploads/`)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`,
    )
  },
})

const prodStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./public/uploads`)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`,
    )
  },
})
