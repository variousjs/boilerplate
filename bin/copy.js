import fs from 'fs'
import _package from '../package.json' with { type: 'json' }
import packageLock from '../package-lock.json' with { type: 'json' }

const files = ['.gitignore', 'package-lock.json', 'package.json']

_package.name = 'variousjs'
_package.version = '0.1.0'
_package.private = true

packageLock.name = 'variousjs'
packageLock.version = '0.1.0'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { prepublishOnly, ...rest } = _package.scripts
_package.scripts = rest

delete _package.bin
delete _package.publishConfig
delete _package.repository
delete _package.keywords
delete _package.bugs
delete _package.homepage

fs.writeFileSync('package.json.copy', JSON.stringify(_package, null, 2))
fs.writeFileSync('package-lock.json.copy', JSON.stringify(packageLock, null, 2))

files.forEach((name) => {
  const copyName = `${name}.copy`

  try {
    if (name !== 'package.json' && name !== 'package-lock.json') {
      fs.copyFileSync(name, copyName, fs.constants.COPYFILE_FICLONE)
    }
  } catch (e) {
    console.log(e.message)
  }
})
