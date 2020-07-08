/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.groupedcolumns.GroupedColumnsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grouped-columns-viewmodel',
    stores:{
        companies:{
            model: 'Demo.view.groupedcolumns.GroupedColumnsStoreModel', 
            sorters: {
                property: 'name',
                direction: 'DESC'
            },
            autoLoad: true,
            
            proxy: {
                type: 'ajax',
                url: 'app/view/groupedcolumns/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});
