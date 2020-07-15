
Ext.define('Demo.view.rowexpand.RowExpanderView', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.rowexpand.RowExpanderViewController',
        'Demo.view.rowexpand.RowExpanderViewModel',
        'Demo.view.rowexpand.RowExpanderStore',
        'Demo.view.rowexpand.RowExpanderStoreModel'
    ],

    xtype: 'rowexpand-rowexpandergrid',
    controller: 'rowexpand-rowexpandergrid',
    viewModel: {
        type: 'rowexpand-rowexpandergrid'
    },

    iconCls: 'x-fa fa-stream',
    title: 'Row Expander',
    category: 'Row Operations',
    description: 'Additional data displayed on expandable row body.',

    store: { 
        type: 'rowexpanderstore'
    },

    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: false,

    /**
     * https://docs.sencha.com/extjs/6.5.3/modern/Ext.grid.plugin.RowExpander.html
     */
    plugins: [{
        ptype: 'rowexpander', 
        id: 'rowexpander',
        rowBodyTpl: new Ext.XTemplate(
            '<p><b>Company:</b> {name}</p>',
            '<p><b>Change:</b> {change:this.formatChange}</p>',
            '<p><b>Description:</b> {desc}</p>',
            {
                formatChange: function (v) {
                    var color = v >= 0 ? 'green' : 'red';
                    return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
                }
            }
        )
    }],

    columns: [{
        text: 'Company', 
        dataIndex: 'name', 
        flex: 1
    }, { 
        text: 'Description',
        dataIndex: 'desc',
        flex: 2
    }, { 
        text: 'Price', 
        formatter: 'usMoney', 
        dataIndex: 'price', 
        width: 100 
    }, { 
        text: 'Change', 
        dataIndex: 'priceChange', 
        width: 100 
    }, { 
        text: '% Change', 
        dataIndex: 'priceChangePct', 
        width: 100 
    }, { 
        text: 'Last Updated', 
        formatter: 'date("m/d/Y")', 
        dataIndex: 'priceLastChange', 
        width: 100
    }]
});
