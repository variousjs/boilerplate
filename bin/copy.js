const fs = require('fs')

const files = ['.gitignore', 'package-lock.json']
const { COPY_ENV } = process.env

files.forEach((name) => {
  const copyName = `${name}.copy`

  try {
    if (COPY_ENV === 'publish') {
      fs.copyFileSync(name, copyName, fs.constants.COPYFILE_EXCL)
    }

    if (COPY_ENV === 'init') {
      fs.copyFileSync(copyName, name, fs.constants.COPYFILE_EXCL)
    }
  } catch (e) {
    // ignore
  }
})
