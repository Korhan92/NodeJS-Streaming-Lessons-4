const fs = require('fs')

const file = 'video.mp4'
var count = 0
let progress=0

const myReadStream = fs.createReadStream(file)

fs.Stats(file,(err,data)=>{
    const total = data.size
    console.log("Total File Size: ", total,"byte")
})

myReadStream.on('data',(chunk)=>{
    progress+=chunk.length
    // console.log(++count,'A data(chunk) came in!Size:',chunk.length )
    // console.log("Size",progress)
    var per = (Math.round((100*progress)/total))+"%";
    console.log(per)
})

myReadStream.on('end' , ()=>{console.log("Data reading finished.")})