import fs from "fs";
import yaml from "js-yaml";

function readFile(path: string): Promise<string> {
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

export async function parseYamlToJson(path: string): Promise<object> {
    const rawDockerCompose = await readFile(path)
    return yaml.load(rawDockerCompose) as object
}