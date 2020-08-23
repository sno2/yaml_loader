import { YamlLoader } from "../mod.ts";

const yamlLoader = new YamlLoader();

const yamlFileData = await yamlLoader.parseYamlFile("./test2.yaml");

if (yamlFileData["calling-birds"][1] == "dewey") {
  console.log("✅ Test 2 Passed");
} else {
  console.error("Test 2 Failed");
}
