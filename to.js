const fse = require('fs-extra')

const s1 = fse.readFileSync('./English-resources.assets.txt', 'utf8')
const s2 = fse.readFileSync('./word-chinese.txt', 'utf8')

const a1 = s1.split('\r\n')
const a2 = s2.split('\r\n')

let a3 = []
console.log(a2.length)
for(var i = 0; i < a1.length; i++) {
  const k = a1[i].split('=')[0]
  a3.push(`${k}=${a2[i]}`)
  // console.log(`${k}=${a2[i]}`)
}
fse.writeFileSync('./Chinese-resources.assets.txt', a3.join('\r\n'))