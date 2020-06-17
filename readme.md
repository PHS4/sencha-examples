# ExtJS Grid Demos

Demo file structure:

```
app-classic/
    model/ - dont use
    store/ - dont use
    view/
        main/
        someexample/
            readme.md    - description and any info that might be handy.
            data.json    - a copy of any static data used.
            SomeExampleStore.js          - Ext.data.Store (usually)
            SomeExampleStoreModel.js     - Ext.data.Model
            SomeExampleView.js           - Ext.grid.Panel (classic)
            SomeExampleViewModel.js      - Ext.app.ViewModel
            SomeExampleViewController.js - Ext.app.ViewController
```

When you create a new view package and reload the app the new view should automatically 
be added to the navigation on startup. This is done in the `main/MainViewController.js`

The `requires` array is used by the Demo app in a less traditional way. It determines 
which JS files are includeded in the Source Code panel in the app. The `readme.md` and 
`data.json` files are assumed to be present and added on when the navigation data is 
generated. 

```javascript
    requires: [
        'Demo.view.someexample.SomeExampleStore',
        'Demo.view.someexample.SomeExampleStoreModel',
        'Demo.view.someexample.SomeExampleViewModel',
        'Demo.view.someexample.SomeExampleViewController',
    ],
```

You can't use the build versions of the app for deployment. They need to be in a non 
minified state so for now just publish the entire workspace. 

## New App 

```shell

sencha generate app -ext@7.2 -classic Demo app-classic

sencha generate app -ext@7.2 -modern Demo app-modern

```

## New View Package

```

sencha generate view -n="someexample.SomeExampleView" -b="Ext.grid.Grid"; 

sencha generate view -n="someexample.SomeExampleStore" -b="Ext.data.Store"; 

sencha generate view -n="someexample.SomeExampleStoreModel" -b="Ext.data.Model"; 

touch \
    app/view/someexample/readme.md \
    app/view/someexample/data.json

# or just copy one that already exists to new location
```

## Classic

```
cd app-classic 

sencha app build -dev && sencha app watch
```

## Modern

```
cd app-modern 

sencha app build -dev && sencha app watch
```

### TODO:

- copy code from classic to modern and change what is needed for it to work.
- some code used for running the demos could probably be shared in package.
