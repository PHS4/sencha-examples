
Ext.define('Demo.view.rowbody.RowBodyView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Widget',
        'Ext.grid.plugin.RowWidget',

        'Demo.view.rowbody.RowBodyViewController',
        'Demo.view.rowbody.RowBodyViewModel',
        'Demo.view.rowbody.RowBodyStore',
        'Demo.view.rowbody.RowBodyStoreModel',
        'Demo.view.rowbody.OrderModel'
    ],

    xtype: 'rows-rowbody-rowbodygrid',
    controller: 'rows-rowbody-rowbodygrid',
    viewModel: {
        type: 'rows-rowbody-rowbodygrid'
    },

    category: 'Widget Integration',
    title: 'Row Body Widget',
    iconCls: 'x-fa fa-check',

    store: { type: 'rowbodystore' },
    
    columns: [{
        text: 'Id',
        dataIndex: 'id'
    }, {
        text: 'Name',
        dataIndex: 'name',
        flex: 1,
        hideable: false
    }, {
        width: 140,
        text: 'Phone',
        dataIndex: 'phone'
    }],
    
    leadingBufferZone: 8,
    trailingBufferZone: 8,

    plugins: {
        rowwidget: {
            // The widget definition describes a widget to be rendered into the
            // expansion row. It has access to the application's ViewModel
            // hierarchy. Its immediate ViewModel contains a record and
            // recordIndex property. These, or any property of the record
            // (including association stores) may be bound to the widget.
            //
            // See the Order model definition with the association declared to
            // Company. Every Company record will be decorated with an "orders"
            // method which, when called yields a store containing associated
            // orders.
            widget: {
                xtype: 'grid',
                autoLoad: true,
                height: 300,
                bind: {
                    store: '{record.orders}',
                    title: 'Orders for {record.name}'
                },
                columns: [{
                    text: 'Order Id',
                    dataIndex: 'id',
                    width: 75
                }, {
                    text: 'Procuct code',
                    dataIndex: 'productCode',
                    width: 265
                }, {
                    text: 'Quantity',
                    dataIndex: 'quantity',
                    xtype: 'numbercolumn',
                    width: 100,
                    align: 'right'
                }, {
                    xtype: 'datecolumn',
                    format: 'Y-m-d',
                    width: 120,
                    text: 'Date',
                    dataIndex: 'date'
                }, {
                    text: 'Shipped',
                    xtype: 'checkcolumn',
                    dataIndex: 'shipped',
                    width: 75
                }]
            }
        }
    }    
});
