/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.compactlayout.CompactLayoutViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.compact-layout-viewmodel',

    stores: {
        salesdata: {
            fields: [
                { name: 'company', type: 'string' },
                { name: 'country', type: 'string' },
                { name: 'person', type: 'string' },
                {
                    name: 'date', type: 'date', dateFormat: 'c',
                    convert: function (value, record) {

                        var dt = new Date(value);
                        return Ext.Date.format(dt, 'Y');

                    }
                },
                { name: 'value', type: 'float', allowNull: true },
                { name: 'quantity', type: 'float', allowNull: true }
            ],
            proxy: {
                // load using HTTP
                type: 'ajax',
                limitParam: null,
                url: 'app/view/compactlayout/data.json',
                // the return will be JSON, so lets set up a reader
                reader: {
                    type: 'json'
                }
            },
            autoLoad: true
        }
    }
});