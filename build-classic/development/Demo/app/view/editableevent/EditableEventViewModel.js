Ext.define('Demo.view.editableevent.EditableEventViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.datasourceview',

    data: {
        selection: {
            name: 'Data Sources'
        }
    },

    stores: {
        dataSources: {
            fields: ['name', 'url', 'root'],
            data: [
                { name: 'JSON File', url: 'data/db.json', root: null },
                { name: 'Orders', url: 'data/orders.json', root: null },
                { name: 'Repo Issues', url: 'https://api.github.com/repos/sencha/ext-react/issues', root: null },
                { name: 'Users', url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user', root: 'users' },
                { name: 'Pokemon', url: 'https://pokeapi.co/api/v2', root: null },
                { name: 'Countries', url: 'https://restcountries.eu/rest/v2/all', root: null }
            ],
            proxy: {
                type: 'memory'
            }
        }
    }
})