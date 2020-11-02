/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.editablewidget.EditableWidgetView', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Widget',
        'Ext.grid.plugin.RowWidget',

        'Demo.view.editablewidget.EditableWidgetViewController',
        'Demo.view.editablewidget.EditableWidgetViewModel',
        'Demo.view.editablewidget.EditableWidgetStoreModel',
        'Demo.view.editablewidget.EditableWidgetStore',
    ],

    xtype: 'editable-editablewidgetview',
    controller: 'editable-editablewidgetview',
    viewModel: {
        type: 'editable-editablewidgetview'
    },

    category: 'Widget Integration',
    title: 'Widget Editing',
    iconCls: 'x-fa fa-cubes',

    store: { type: 'editablewidgetstore' },
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: false,

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        flex: 1,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'textfield',
            bind: '{record.name}'
        }
    }, {
        text: 'Price',
        flex: 1,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'sliderfield',
            labelWidth: 90,
            bind: {
                fieldLabel: '{record.price:usMoney}',
                value: '{record.price}'
            }
        }
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 80,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'displayfield'
        }
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        width: 100,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'displayfield'
        }
    }, {
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")',
        width: 140,
        xtype: 'widgetcolumn',
        widget: {
            xtype: 'datefield'
        }
    }],

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
                bind: {
                    store: '{record.orders}',
                    category: '',
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
