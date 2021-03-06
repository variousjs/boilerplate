#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

const configFiles = ['.gitignore', 'package-lock.json', 'package.json']
const ignores = [
  '.git',
  'bin',
  'node_modules',
  '.DS_Store',
]
const srcDir = path.resolve(__dirname, '../')
const files = []
const destDir = process.cwd()

function getFiles(dir) {
  fs.readdirSync(dir).forEach((name) => {
    if (ignores.includes(name)) {
      return
    }
    const filePath = path.join(dir, name)
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath)
      return
    }
    const dest = path.join(destDir, path.relative(srcDir, filePath))
    files.push({
      src: filePath,
      dest,
      destPath: path.dirname(dest),
    })
  })
}

getFiles(srcDir)

files.forEach(({ src, dest, destPath }) => {
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true })
  }

  try {
    fs.copyFileSync(src, dest, fs.constants.COPYFILE_EXCL)
  } catch (e) {
    // ignore
  }
})

configFiles.forEach((name) => {
  const copyName = `${name}.copy`

  try {
    fs.copyFileSync(copyName, name, fs.constants.COPYFILE_FICLONE)
  } catch (e) {
    console.log(e.message)
  }

  try {
    fs.unlinkSync(copyName)
  } catch (e) {
    console.log(e.message)
  }
})
