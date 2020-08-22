import { YamlLoader } from "./../mod.ts";

const yamlLoader = new YamlLoader();

const yamlFileData = await yamlLoader.parseYamlFile("./test1.yaml");

console.log(yamlFileData.items);
