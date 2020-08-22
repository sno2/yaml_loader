import { YamlLoader } from "./../mod.ts";

const yamlLoader = new YamlLoader();

const yamlFileData = await yamlLoader.parseYamlFile("./test2.yaml");

console.log(yamlFileData["calling-birds"]);
