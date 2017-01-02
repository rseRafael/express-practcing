let parseURL = function(url){
  let arr = [],
      obj = {};
  if(typeof url == "string"){
    arr = url.substring(url.indexOf("?")+1, url.length)
             .split("&");
    for(var i = 0; i < arr.length; i++){
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    return obj;
  }
}


let dissectObj = function(obj, name="obj"){
  let str = "";
  if(typeof obj == 'object'){
    for(let prop in obj){
        let type = typeof obj[prop];
        str += `(${type}) ${name}[${prop}]` +( (type == "string" || type == "number" || type=="boolean")?`${obj[prop]}\n`:"\n" );
    }
    return str;
  }
  else {
    throw new Exception("TypeError", "First argument must be an object");
  }
}

exports.parseURL = parseURL;
exports.dissectObj = dissectObj;
