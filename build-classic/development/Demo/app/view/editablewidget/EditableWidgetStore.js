Ext.define('Demo.view.editablewidget.EditableWidgetStore', {
    extend: 'Ext.data.Store',
    alias: 'store.editablewidgetstore',

    model: 'Demo.view.editablewidget.EditableWidgetStoreModel',
    autoLoad: true,
    
    proxy: {
        type: 'ajax',
        url: 'app/view/editablewidget/data.json',
        reader: {
            type: 'json'
        }
    }
});
