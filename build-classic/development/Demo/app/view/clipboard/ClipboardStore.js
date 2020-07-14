Ext.define('Demo.view.clipboard.ClipboardStore', {
    extend: 'Ext.data.Store',
    alias: 'store.clipboardstore',

    model: 'Demo.view.clipboard.ClipboardStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/clipboard/data.json',
        reader: {
            type: 'json'
        }
    }
});
