
Ext.define('Demo.view.rowexpandlocked.RowExpanderLockedColumnView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.rowexpandlocked.RowExpanderLockedColumnViewController',
        'Demo.view.rowexpandlocked.RowExpanderLockedColumnViewModel',
        'Demo.view.rowexpandlocked.RowExpanderLockedColumnStore',
        'Demo.view.rowexpandlocked.RowExpanderLockedColumnStoreModel'
    ],

    xtype: 'rowexpandlocked-rowexpanderlockedcolumnsgrid',
    controller: 'rowexpandlocked-rowexpanderlockedcolumnsgrid',
    viewModel: {
        type: 'rowexpandlocked-rowexpanderlockedcolumnsgrid'
    },

    iconCls: 'x-fa fa-layer-group',
    title: 'Row Expander & Locked Columns',
    category: 'Row Operations',
    description: 'Row Expansion with Locked Columns.',

    store: { type:  'rowexpanderlockedcolumnstore' },
    
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: false,

    columns: [{
        text: 'Company',
        dataIndex: 'name',
        locked: true,
        width: 230
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
    }],

    plugins: {
        rowexpander: {
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
        }
    }
});
