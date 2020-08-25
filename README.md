# yaml_loader

Yaml Loader is a [Deno module](https://deno.land/x/yaml_loader) that allows you to load yaml files and parse their contents as json.

## Features

Yaml Loader will parse your json files using the deno standard library, therefore, there aren't any third-party modules used.

## Usage

Before using yaml_loader, you must first have Deno installed. If you don't, go to the [Deno Installation page](https://deno.land/#installation) and follow those simple steps :)

All right, nown that we got that stuff over, you can just use the yaml_loader module in your project by add this simple line of code:

```ts
import { YamlLoader } from "https://deno.land/x/yaml_loader/mod.ts";
```

After that, we can start utilizing the `YamlLoader` class! The only method inside of the class that you need is `parseFile`. It is an asynchronous method, though, so remember to always await for it to be done ;) Here is an example of using the `YamlLoader`:

> There is a breaking change when updating from v0.0.0 to v0.1.0 The `parseYamlFile` method on `YamlLoader` is now named `parseFile`

```ts
import { YamlLoader } from "https://deno.land/x/yaml_loader/mod.ts";

const yamlLoader = new YamlLoader();

const parsedYamlFile = await yamlLoader.parseFile("./foo.yaml");

console.log(parsedYamlFile);
```

The above code would parse the `foo.yaml` file and set its json-ified contents to the `parsedYamlFile` constant. After that, we are just logging out the data as an object from `foo.yaml` after it is parsed.
