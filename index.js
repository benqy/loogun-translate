const fse = require('fs-extra')

const str = fse.readFileSync('./English-resources.assets.txt', 'utf8')

const arr = str.split('\r\n')
const values = arr.map(t => t.split('=')[1])
console.log(values)
fse.writeFileSync('./words-english.txt', values.join('\n'))
