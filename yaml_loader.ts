import { load } from "https://deno.land/x/js_yaml_port@3.14.0/js-yaml.js";

/**
 * The class used for parsing yaml files.
 * @class
 */
export class YamlLoader {
  /**
   * Needed for parsing the file's text.
   * @private
   */
  private decoder = new TextDecoder("utf-8");

  /**
   * Takes the filePath and returns the parsed yaml as an object.
   * Requires the `--allow-read` flag.
   * @function
   * @async
   * @param filePath Location of the yaml file that is to be parsed.
   */
  async parseYamlFile(filePath: string) {
    /** Loading the file. */
    const yamlFile = await Deno.readFile(filePath);

    /** Decoding the file text. */
    const yamlText = this.decoder.decode(yamlFile);

    /** Returning parsed yaml as an object. */
    return await load(yamlText);
  }
}
