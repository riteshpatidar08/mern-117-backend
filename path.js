//path.join 
const path = require('path')
const joinedPath = path.join('src' , 'components',
    'index.js'
)
console.log(joinedPath)

// console.log(path.sep)

const resolvedPath = path.resolve('javascript' ,'script.js') ;

// javascript\script.js => join 
// __dirname , __filename
console.log(resolvedPath)

console.log(path.extname('script.js'))
// if(path.extname('.pdf') || path.extname('.jpg'))

console.log(path.basename('/desktop/home/script.js'))

console.log(path.parse('/desktop/script.js'))

