Ext.define('Demo.view.widgets.WidgetStoreModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'name' },
        { name: 'progress', type: 'float' },
        'mode',
        'sequence1',
        'sequence2',
        'sequence3',
        'sequence4',
        'sequence5',
        'sequence6',
        'sequence7'
    ]
});
