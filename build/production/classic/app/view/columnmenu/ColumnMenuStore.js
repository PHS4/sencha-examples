Ext.define('Demo.view.columnmenu.ColumnMenuStore', {
    extend: 'Ext.data.Store',
    alias: 'store.columnmenustore',
    
    model: 'Demo.view.columnmenu.ColumnMenuStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/columnmenu/data.json',
        reader: {
            type: 'json'
        }
    }
});
