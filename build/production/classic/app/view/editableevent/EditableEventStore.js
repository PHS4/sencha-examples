Ext.define('Demo.view.editableevent.EditableEventStore', {
    extend: 'Ext.data.Store',
    alias: 'store.editableeventstore',

    model: 'Demo.view.editableevent.EditableEventStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/editableevent/data.json',
        reader: {
            type: 'json'
        }
    }
});
