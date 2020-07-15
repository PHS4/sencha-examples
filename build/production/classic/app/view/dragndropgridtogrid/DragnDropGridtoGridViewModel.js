Ext.define('Demo.view.dragndropgridtogrid.DragnDropGridtoGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dndtogrid-gridtogrid',
    
    data: {
        name: 'Demo'
    },

    stores: {
        one: {
            fields: ['name', 'column1', 'column2'],
            data: [
                { name: 'Rec 0', column1: '0', column2: '0' },
                { name: 'Rec 1', column1: '1', column2: '1' },
                { name: 'Rec 2', column1: '2', column2: '2' },
                { name: 'Rec 3', column1: '3', column2: '3' },
                { name: 'Rec 4', column1: '4', column2: '4' },
                { name: 'Rec 5', column1: '5', column2: '5' },
                { name: 'Rec 6', column1: '6', column2: '6' },
                { name: 'Rec 7', column1: '7', column2: '7' },
                { name: 'Rec 8', column1: '8', column2: '8' },
                { name: 'Rec 9', column1: '9', column2: '9' }
            ]
        },
        two: {
            fields: ['name', 'column1', 'column2'],
            data: []
        }
    }
});
