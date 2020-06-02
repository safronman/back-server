const fs = require('fs');

exports.readJsonFromFile = (pathname)=> {
    return new Promise((resolve, reject) => {
        fs.readFile(pathname, function (err, buf) {
            if (err) {
                reject()
            } else {
                resolve(JSON.parse(buf.toString()));
            }
        });

    })
}
exports.writeJsonToFile = (pathname, data)=> {
    return new Promise((resolve, reject) => {
        fs.writeFile("db.json", JSON.stringify(data), (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        });
    })
}


