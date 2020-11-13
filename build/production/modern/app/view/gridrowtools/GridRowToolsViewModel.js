/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.gridrowtools.GridRowToolsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grid-row-tools-viewmodel',
    stores:{
        companies:{
            model: 'Demo.view.gridrowtools.GridRowToolsStoreModel', 
            sorters: {
                property: 'name',
                direction: 'DESC'
            },
            autoLoad: true,
            
            proxy: {
                type: 'ajax',
                url: 'app/view/gridrowtools/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});
