# ExtJS Classic

Hover over a cell to see the full contents.


Generate an app of the same name (Demo) with sencha cmd
-------------------------------------------------------

```shell
sencha generate app -ext@7.2 -classic Demo ./Demo

cd Demo

sencha app watch
```

Then open http://localhost:1841 in the browser.

To generate a new set of files in your project
---------------------------------------------

```bash
PKG_NAME=example; # the folder name to be created in app/view
CLS_NAME=Example; # The name of the class. Starts with an uppercase letter

mkdir app/view/$PKG_NAME &&

touch \
    ./app/view/$PKG_NAME/$CLS_NAME"Store.js" \
    ./app/view/$PKG_NAME/$CLS_NAME"StoreModel.js" \
    ./app/view/$PKG_NAME/$CLS_NAME"View.js" \
    ./app/view/$PKG_NAME/$CLS_NAME"ViewModel.js" \
    ./app/view/$PKG_NAME/$CLS_NAME"ViewController.js" \
    ./app/view/$PKG_NAME/data.json
```