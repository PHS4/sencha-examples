/**
 * Not used by this demo.
 */
Ext.define('Demo.view.property.PropertyStore', {
    extend: 'Ext.data.Store',
    alias: 'store.propertystore' ,
    model: 'Demo.view.property.PropertyStoreModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'app/view/property/data.json',
        reader: {
            type: 'json'
        }
    }
});
