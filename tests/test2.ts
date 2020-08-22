import { YamlLoader } from "https://deno.land/x/yaml_loader/mod.ts";

const yamlLoader = new YamlLoader();

const yamlFileData = await yamlLoader.parseYamlFile("./test2.yaml");

console.log(yamlFileData["calling-birds"]);
