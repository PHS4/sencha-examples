/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.lockedcolumn.LockedColumnViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.locked-column-viewmodel',

    stores:{
        companies:{
            model: 'Demo.view.lockedcolumn.LockedColumnStoreModel',
            autoLoad: true,
            
            proxy: {
                type: 'ajax',
                url: 'app/view/lockedcolumn/data.json',
                reader: {
                    type: 'json'
                }
            }
        
        }
    }
});