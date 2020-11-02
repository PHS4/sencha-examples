/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Demo.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    data: {
        name: 'ExtJS Grid Demos',

        toolbar: true,
        description: true,
        demo: true,
        source: true,
        navigation: true,

        filter: '',

        currentIndex: 1,
        currentDemo: null
    },

    stores: {
        nav: {
            groupField: 'category',

            sorters: [{
                property: 'category', 
                direction: 'ASC'
            }, {
                property: 'title',
                direction: 'ASC'
            }],

            fields: [
                'id',
                'title',
                'category',
                'description',
                'slug',
                'categorySlug',
                'iconCls',
                'className',
                'xtype',
                'path',
                'folder',
                'file',
                'extension',
                'requires',
                'searchable',
            ],

            data: [],
            
            proxy: {
                type: 'memory',
                reader: 'json'
            }
        },

        files: {
            groupField: 'folder',

            storeId: 'files',

            fields: [
                'file'
            ],

            data: [],

            proxy: {
                type: 'memory',
                reader: 'json'
            }
        }
    }
});