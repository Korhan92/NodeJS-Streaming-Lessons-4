const fs = require('fs')
const myFile = "video.mp4"

var path = require("path")
//Get File Extension
var myFileExt = path.extname(myFile)
console.log(myFileExt)
// console.log(path.extname("video.mp4"))

const myReadStream = fs.creatReadStream(myFile)

const myWriteStream = fs.createWriteStream("newVideo" + myFileExt)

myReadStream.pipe(myWriteStream)

myWriteStream.on('finish', ()=>{
    console.log("Finished writeStream...")
})