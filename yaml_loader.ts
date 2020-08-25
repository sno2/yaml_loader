// Copyright 2020-present Carter Snook. All rights reserved. MIT license.

import { parse as parseYaml } from "https://deno.land/std@0.63.0/encoding/yaml.ts";

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
  async parseFile(filePath: string) {
    /** Loading the file. */
    const yamlFile = await Deno.readFile(filePath);

    /** Decoding the file text. */
    const yamlText = this.decoder.decode(yamlFile);

    /** Returning parsed yaml as an object. */
    return await parseYaml(yamlText);
  }
}
