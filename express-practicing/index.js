let express = require("express");
let fs = require("fs");
let tools = require("/home/rafael/Code-Projects/Nodejs-Tools/nodejs-tools.js");
let app = express();
let publicDir = '/home/rafael/Public'
app.use("/public",express.static(publicDir));
app.get("/", (req, res)=>{
  res.send("<h1>Welcome to this empty page</h1>");
})
    .get("/profile", (req, res)=>{
        let obj = tools.parseURL(req.url);
        res.json(obj);
      })
    .get("/public", (req, res)=>{
      fs.readdir(publicDir, (err, files)=>{
        let arr = [];
        if(err){
          console.log("An error has occured while tring to open " + publicDir);
          console.log(err);
        }
        else{
          arr.push(`<ul>\n`);
          files.forEach(
            (file)=>{
                if(file.indexOf(".") !== -1){
                  console.log("achei um arquivo: " + file);
                  arr.push(`<li><a href=${publicDir + "/" +  file}>${file}</a></li>\n`);
                }
                else{
                  console.log("nao e um arquivo: " + file);
                  let currentDir = publicDir+"/"+file
                  fs.readdir(currentDir, (err, files)=>{
                    if(err){
                      console.log(currentDir + "is not a directory");
                      arr.push(`<li>${file}</li>\n`);
                    }
                    else{
                      console.log("nao teve erro em: " + currentDir);
                      files.forEach(
                        (file)=>{
                            if(file.indexOf(".") !== -1){
                              console.log("achei um arquivo: " + file);
                              arr.push(`<li><a href=${publicDir + file}>${file}</a></li>\n`);
                            }
                            else{
                              console.log("nao e um arquivo: " + file);
                              arr.push(`<li>${file}</li>\n`);
                            }
                          }
                        );
                    }
                  });
                }
              });
            }
          let html = arr.join("");
          console.log(html);
          res.send(html);
      });
    });
app.listen(8080, ()=>{console.log("http://127.0.0.1:8080/ is running.")});
