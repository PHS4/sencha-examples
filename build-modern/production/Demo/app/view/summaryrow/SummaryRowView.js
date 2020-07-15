/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.summaryrow.SummaryRowView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.summaryrow.SummaryRowViewController',
        'Demo.view.summaryrow.SummaryRowViewModel',
        'Demo.view.summaryrow.SummaryRowStoreModel',
        'Ext.data.summary.Average',
        'Ext.data.summary.Max',
        'Ext.grid.plugin.SummaryRow'
    ],

    xtype: 'summary-row',
    controller: 'summaryrow',
    viewModel: {
        type: 'summary-row-viewmodel'
    },

    category: 'Row Operations',
    title: 'Summary Row',
    iconCls: 'x-fa fa-table',
    description: 'A fixed row is added to the grid that summarizes each columns\'s data.',

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.SummaryRow.html
         */
        gridsummaryrow: true
    },

    columnLines: true,

    bind: {
        store: '{companies}'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        flex: 1,
        dataIndex: 'name',
        minWidth: 100,
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.column.Column.html#cfg-summaryRenderer
         */
        summaryRenderer: 'summarizeCompanies'
    }, {
        text: 'Price',
        width: 75,
        dataIndex: 'price',
        formatter: 'usMoney',
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.column.Column.html#cfg-summary
         */
        summary: 'average'
    }, {
        text: 'Change',
        width: 90,
        dataIndex: 'change',
        renderer: 'renderChange',
        summary: 'max',
        summaryRenderer: 'renderChange',
        cell: {
            encodeHtml: false
        }
    }, {
        text: '% Change',
        width: 100,
        dataIndex: 'pctChange',
        renderer: 'renderPercent',
        summary: 'average',
        summaryRenderer: 'renderPercent',
        cell: {
            encodeHtml: false
        }
    }, {
        text: 'Last Updated',
        width: 125,
        dataIndex: 'lastChange',
        formatter: 'date("m/d/Y")',
        summary: 'max'
    }],
    signTpl: '<span style="' +
        'color:{value:sign("red", "green")}"' +
        '>{text}</span>'
});
