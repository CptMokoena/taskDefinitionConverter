import fs from "fs";

function readFile(path: string) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err: any, data: any) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

const main = async function() {
    const data = await readFile('docker-compose.yaml')
    console.log(data);
}

main()