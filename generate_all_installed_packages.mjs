import fs from 'fs'

const obj = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
const dependencies = obj['dependencies']

let packs = Object.keys(dependencies)
fs.writeFileSync('installed_packages.txt', '')
for (let pack of packs){
    let res = (pack +" - " + dependencies[pack]["version"] + '\n')

    fs.appendFileSync('installed_packages.txt', res )
}
