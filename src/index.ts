import { parseYamlToJson } from "./utils";

const main = async function() {
    const dockerCompose = await parseYamlToJson('docker-compose.yaml');
    console.log(dockerCompose);

    const ecsParams = await parseYamlToJson('ecs-params.yaml');
    console.log(ecsParams);
}

main()