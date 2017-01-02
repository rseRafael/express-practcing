//Creating a directory search engine
let fs = require("fs");
function setSearchEngine(app, path, publicDir, ){
  let str = `<div style="border: 5px solid black">\n<ul>`
  fs.readdir(publicDir,
    (err, files)=>{
      files.forEach((file)=>{
        if(file.indexOf(".")!== -1){
          str+= `<li><a href=${"public/" + file}>${file}</a></li>`
        }
        else{
          str += `<li><ul>${file}`
          //the possible directory
          let psbDir = file;
          fs.readdir(publicDir+ psbDir, (err, files)=>{
            files.forEach()
          })
        }
      });
    }

  )
}

function fileOrDirectory(file, publicDir){
  let fs = require("fs");
  let arr = [];
  fs.readdir(publicDir, (err, files)=>{
    files.forEach(file=>{
      if(file.indexOf(".") !== -1){
        arr.push(`<li><a href=${"public/" + file}>${file}</a></li>`);
      }
      else {
        let arr2 = [];
        arr2.push(`<li><ul><li>${file}</li>`);
        publicDir = publicDir + "/" + file;
        fs.readdir(publicDir + "/" + file, (err, files)=>{
          if(err){
            return
          }
          files.forEach((file)=>{
            if(file.indexOf(".")!== -1){
              arr2.push(`<li><a href=${publicDir + file}>${file}</a></li>`);
            }
            else{

            }

            arr2.push(``)
          }
        })
      }
    })
  })
}
