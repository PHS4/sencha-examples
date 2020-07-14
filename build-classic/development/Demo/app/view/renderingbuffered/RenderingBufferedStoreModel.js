Ext.define('Demo.view.renderingbuffered.RenderingBufferedStoreModel', {
    extend: 'Ext.data.Model',
    
    fields: [
        'firstName', 'lastName', 'address', 'company', 'title',
        {
            name: 'id',
            type: 'int'
        }
    ]
});
