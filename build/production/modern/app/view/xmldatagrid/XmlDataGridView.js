/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.xmldatagrid.XmlDataGridView', {
    extend: 'Ext.grid.Grid',


    requires: [
        'Demo.view.xmldatagrid.XmlDataGridViewController',
        'Demo.view.xmldatagrid.XmlDataGridViewModel'
    ],

    xtype: 'xml-data-grid',
    controller: 'xmldatagrid',
    viewModel: {
        type: 'xml-data-grid-viewmodel'
    },

    iconCls: 'x-fa fa-table',
    category: 'Rendering and Scrolling',
    title: 'XML Data Grid',
    description: 'Load xml data into the grid.',

    bind: {
        store: '{plants}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Common Name',
        flex: 1,
        width: 200,
        dataIndex: 'common'
    }, {
        text: 'Light',
        width: 125,
        dataIndex: 'light'
    }, {
        text: 'Price',
        width: 100,
        formatter: 'usMoney',
        dataIndex: 'price'
    }, {
        xtype: 'datecolumn',
        text: 'Available',
        width: 100,
        dataIndex: 'availDate'
    }]
});