const fs = require('fs')

const files = ['.gitignore', 'package-lock.json', 'package.json']
const { COPY_ENV } = process.env

files.forEach((name) => {
  const copyName = `${name}.copy`

  try {
    if (COPY_ENV === 'publish') {
      fs.copyFileSync(name, copyName, fs.constants.COPYFILE_FICLONE)
    }

    if (COPY_ENV === 'init') {
      fs.copyFileSync(copyName, name, fs.constants.COPYFILE_FICLONE)
    }
  } catch (e) {
    console.log(e.message)
  }

  if (COPY_ENV === 'init') {
    try {
      fs.unlinkSync(copyName)
    } catch (e) {
      console.log(e.message)
    }
  }
})
