const fs = require('fs');
const path = require('path');
var program = require('commander');
// level=(e,m,h)
// number=(1,2,3...)

program
  .option('-l, --level [level]', '(e,m,h) difficulty level of the challenge you want to run')
  .option('-n, --num [num]', 'challenge number')
  .parse(process.argv)

let challengeLevelFolder;
switch (program.level) {
    case 'e':
        challengeLevelFolder = 'easy';
        break;
    case 'm':
        challengeLevelFolder = 'medium';
        break;
    case 'h':
        challengeLevelFolder = 'hard';
        break;
    default:
        throw 'Level not found'
}
const levelPath = path.join(__dirname,'/content/challenges', challengeLevelFolder);
// console.log(levelPath)
const challenge = fs.readdirSync(levelPath).find(fn => {
    return fn.split(' ')[0] === program.num;
});

if (challenge == null) {
    throw 'Challenge not found'
}

console.log(path.join(levelPath, challenge))

const fullPath =  path.join(levelPath, challenge);
