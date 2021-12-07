const fs = require('fs')
const package = require('../package.json')
const packageLock = require('../package-lock.json')

const files = ['.gitignore', 'package-lock.json', 'package.json']

package.name = 'variousjs'
package.version = '0.1.0'
package.private = true

packageLock.name = 'variousjs'
packageLock.version = '0.1.0'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { prepublishOnly, ...rest } = package.scripts
package.scripts = rest

delete package.bin
delete package.publishConfig
delete package.repository
delete package.keywords
delete package.bugs
delete package.homepage

fs.writeFileSync('package.json.copy', JSON.stringify(package, null, 2))
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
