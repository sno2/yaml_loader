// Copyright 2020-present Carter Snook. All rights reserved. MIT license.

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { YamlLoader } from "../mod.ts";

const yamlLoader = new YamlLoader();

Deno.test("Loading test1.yaml", async function (): Promise<void> {
  const yamlFileData = await yamlLoader.parseYamlFile("./test1.yaml");

  const correctFileData = {
    items: [1, 2, 3, 4, 5],
    names: ["one", "two", "three", "four"],
  };

  assertEquals(yamlFileData, correctFileData);
});

Deno.test("Loading test2.yaml", async function (): Promise<void> {
  const yamlFileData = await yamlLoader.parseYamlFile("./test2.yaml");

  const correctFileData = {
    doe: "a deer, a female deer",
    ray: "a drop of golden sun",
    pi: 3.14159,
    xmas: true,
    "french-hens": 3,
    "calling-birds": ["huey", "dewey", "louie", "fred"],
    "xmas-fifth-day": {
      "calling-birds": "four",
      "french-hens": 3,
      "golden-rings": 5,
      partridges: { count: 1, location: "a pear tree" },
      "turtle-doves": "two",
    },
  };

  assertEquals(yamlFileData, correctFileData);
});
