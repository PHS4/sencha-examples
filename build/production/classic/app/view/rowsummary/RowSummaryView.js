
Ext.define('Demo.view.rowsummary.RowSummaryView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.rowsummary.RowSummaryViewController',
        'Demo.view.rowsummary.RowSummaryViewModel',
        'Demo.view.rowsummary.RowSummaryStore',
        'Demo.view.rowsummary.RowSummaryStoreModel'
    ],

    xtype: 'summary-summarygrid',
    controller: 'summary-summarygrid',
    viewModel: {
        type: 'summary-summarygrid'
    },

    title: 'Summary',
    category: 'Row Operations',
    description: '',

    store: {
        type: 'rowsummarystore'
    },

    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 1
    }],
    
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        items: [{
            tooltip: 'Toggle the visibility of the summary row',
            text: 'Toggle Summary',
            enableToggle: true,
            pressed: true,
            handler: 'toggleSummaryRow'
        }]
    }],

    /**
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.feature.Grouping.html
     */
    features: [{
        id: 'group',
        ftype: 'groupingsummary',
        groupHeaderTpl: '{name}',
        hideGroupedHeader: false,
        enableGroupingMenu: true
    }],

    columns: [{
        text: 'Task',
        flex: 1,
        tdCls: 'task',
        sortable: true,
        dataIndex: 'description',
        hideable: false,
        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.feature.Summary.html
         */
        summaryType: 'count',
        /**
         * https://docs.sencha.com/extjs/7.3.1/classic/Ext.grid.column.Column.html#cfg-summaryRenderer
         */
        summaryRenderer: 'summaryRenderer'
    }, {
        header: 'Project',
        dataIndex: 'project',
        width: 180,
        sortable: true
    }, {
        header: 'Due Date',
        dataIndex: 'due',
        width: 136,
        sortable: true,
        renderer: Ext.util.Format.dateRenderer('m/d/Y'),
        summaryType: 'max',
        summaryRenderer: Ext.util.Format.dateRenderer('m/d/Y'),
        field: {
            xtype: 'datefield'
        }
    }, {
        header: 'Estimate',
        dataIndex: 'estimate',
        width: 100,
        sortable: true,
        renderer: function (value, metaData, record, rowIdx, colIdx, store, view) {
            return value + ' hours';
        },
        summaryType: 'sum',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return value + ' hours';
        },

        field: {
            xtype: 'numberfield'
        }
    }, {
        header: 'Rate',
        dataIndex: 'rate',
        width: 120,
        sortable: true,

        renderer: Ext.util.Format.usMoney,
        summaryRenderer: Ext.util.Format.usMoney,
        summaryType: 'average',
        
        field: {
            xtype: 'numberfield'
        }
    }, {
        id: 'cost',
        dataIndex: 'cost',
        header: 'Cost',
        width: 100,
        sortable: false,
        groupable: false,
        
        renderer: function (value, metaData, record, rowIdx, colIdx, store, view) {
            return Ext.util.Format.usMoney(record.get('estimate') * record.get('rate'));
        },
        
        summaryType: function (records, values) {
            var i = 0,
                length = records.length,
                total = 0,
                record;

            for (; i < length; ++i) {
                record = records[i];
                total += record.get('estimate') * record.get('rate');
            }

            return total;
        },
        
        summaryRenderer: Ext.util.Format.usMoney
    }]
});
