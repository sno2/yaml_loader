import { YamlLoader } from "../mod.ts";

const yamlLoader = new YamlLoader();

const yamlFileData = await yamlLoader.parseYamlFile("./test1.yaml");

if (yamlFileData.items[2] == 3) {
  console.log("✅ Test 1 Passed");
} else {
  console.error("Test 1 Failed");
}
