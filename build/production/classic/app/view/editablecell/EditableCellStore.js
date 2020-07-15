Ext.define('Demo.view.editablecell.EditableCellStore', {
    extend: 'Ext.data.Store',
    alias: 'store.editablecellstore',

    model: 'Demo.view.editablecell.EditableCellStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/editablecell/data.json',
        reader: {
            type: 'json'
        }
    }
});
