/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.flexibleselection.FlexibleSelectionView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.flexibleselection.FlexibleSelectionViewController',
        'Demo.view.flexibleselection.FlexibleSelectionViewModel',
        'Demo.view.flexibleselection.FlexibleSelectionStoreModel',
        'Ext.util.Format'
    ],

    xtype: 'flexibleselection',
    controller: 'flexibleselection-grid',
    viewModel: {
        type: 'flexibleselection-grid-viewmodel'
    },

    category: 'Selection',
    title: 'Flexible Selection',
    iconCls: 'x-fa fa-table',
    description:'Select multiple rows/cells by dragging your mouse/finger across the grid.',

    rowNumbers: true,
    columnLines: true,
    itemRipple: true,

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.plugin.Clipboard.html
         */
        clipboard: true,
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.selection.Replicator.html
         */
        selectionreplicator: true
    },

    selectable: {
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        extensible: 'both'
    },
    bind: {
        store: '{companies}'
    },
    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 95,
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 80,
        sortable: true,
        cell: {
            encodeHtml: false
        },
        renderer: 'renderChange'
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        cell: {
            encodeHtml: false
        },
        width: 100,
        sortable: true,
        renderer: 'renderPercent'
    }],
    signTpl: '<span style="' +
        'color:{value:sign("red", "green")}"' +
        '>{text}</span>'
});
