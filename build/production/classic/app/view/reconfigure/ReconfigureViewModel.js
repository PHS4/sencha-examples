Ext.define('Demo.view.reconfigure.ReconfigureViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.advanced-reconfigure',

    data: {

        rawData: null,

        sampleData: {},

        fieldsData: [],

        selection: {
            name: 'Choose a Data Souce',
            url: 'http://...',
            root: undefined
        }
    }
});
