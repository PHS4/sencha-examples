/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.menugridrow.MenuGridRowViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.menu-grid-row-viewmodel',
    stores:{
        companies:{
            model: 'Demo.view.menugridrow.MenuGridRowStoreModel', 
            sorters: {
                property: 'name',
                direction: 'ASC'
            },
            autoLoad: true,
            
            proxy: {
                type: 'ajax',
                url: 'app/view/menugridrow/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});
