# Example Info

Generate an app of the same (Demo) name with sencha cmd

```shell
$ sencha generate app -ext@7.2 -classic Demo ./Demo

$ cd Demo

$ sencha app watch
```

Open http://localhost:1841 in the browser.

To generate a new set of files in your project

```shell
mkdir -p app/view/_example_

cd app/view/_example_

touch \
    ExampleStore.js \
    ExampleStoreModel.js \
    ExampleView.js \
    ExampleViewModel.js \
    ExampleViewController.js \
    data.json
```

