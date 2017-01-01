let express = require("express");
let fs = require("fs");
let tools = require("/home/rafael/Code-Projects/Nodejs-Tools/nodejs-tools.js");
let app = express();
app.use("/public",express.static('/home/rafael/Public'));
app.get("/", (req, res)=>{
  res.send("<h1>Welcome to this empty page</h1>");
})
    .get("/profile", (req, res)=>{
        let obj = tools.parseURL(req.url);
        res.json(obj);
      })
    .get("/public", (req, res)=>{
      fs.readdir("/home/rafael/Public", (err, files)=>{
        if(err){
          console.log("An error has occured");
          console.log(err);
        }
        else{
          console.log(tools.dissectObj(files)) ;
          let str = `<div style="display:flex; flex-Direction: column; justify-Content: center; align-Items: center; background-color:rgba(10, 150, 255, 1); width: '50%'; border: 1px solid red;"\n`;
          files.forEach(
            (file)=>{
              if(typeof file === "string"){
                str += `\t<a href="/public/${file}">${file}</a>\n`
              }
            }
          );
          str += "</div>\n";
          console.log(str);
          res.send(str);
        }
      });
    });
app.listen(8080, ()=>{console.log("http://127.0.0.1:8080/ is running.")});
