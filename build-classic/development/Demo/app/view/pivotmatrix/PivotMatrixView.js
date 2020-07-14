/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.pivot.Grid.html
 */
Ext.define('Demo.view.pivotmatrix.PivotMatrixView', {
    extend: 'Ext.pivot.Grid',

    requires: [
        'Demo.view.pivotmatrix.PivotMatrixViewController',
        'Demo.view.pivotmatrix.PivotMatrixViewModel',
    ],

    xtype: 'pivot-matrix-matrixgrid',
    controller: 'pivot-matrix-matrixgrid',
    viewModel: {
        type: 'pivot-matrix-matrixgrid'
    },
    
    category: 'Pivoting',
    title: 'Matrix Pivot Grid',

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.pivot.matrix.Remote.html
     */
    matrix: {
        type: 'remote',
        url: 'app/view/pivotmatrix/data.json',

        aggregate: [{
            id: 'agg1',
            dataIndex: 'value',
            header: 'Sum of value',
            aggregator: 'sum'
        }, {
            id: 'agg2',
            dataIndex: 'value',
            header: '# records',
            aggregator: 'count',
            align: 'right',
            renderer: Ext.util.Format.numberRenderer('0')
        }],

        leftAxis: [{
            id: 'person',
            dataIndex: 'person',
            header: 'Person',
            sortable: false
        }, {
            id: 'country',
            dataIndex: 'country',
            header: 'Country'
        }],

        topAxis: [{
            id: 'year',
            dataIndex: 'year',
            header: 'Year'
        }, {
            id: 'month',
            dataIndex: 'month',
            header: 'Month'
        }]
    },

    listeners: {
        pivotbeforereconfigure: 'pivotbeforereconfigure',
        pivotbeforerequest: 'pivotbeforerequest',
        pivotbuildtotals: 'pivotbuildtotals',
        pivotcolumnsbuilt: 'pivotcolumnsbuilt',
        pivotdone: 'pivotdone',
        pivotgroupcellclick: 'pivotgroupcellclick',
        pivotgroupcellcontextmenu: 'pivotgroupcellcontextmenu',
        pivotgroupcelldblclick: 'pivotgroupcelldblclick',
        pivotgroupclick: 'pivotgroupclick',
        pivotgroupcollapse: 'pivotgroupcollapse',
        pivotgroupcontextmenu: 'pivotgroupcontextmenu',
        pivotgroupdblclick: 'pivotgroupdblclick',
        pivotgroupexpand: 'pivotgroupexpand',
        pivotitemcellclick: 'pivotitemcellclick',
        pivotitemcellcontextmenu: 'pivotitemcellcontextmenu',
        pivotitemcelldblclick: 'pivotitemcelldblclick',
        pivotitemclick: 'pivotitemclick',
        pivotitemcontextmenu: 'pivotitemcontextmenu',
        pivotitemdblclick: 'pivotitemdblclick',
        pivotmodelbuilt: 'pivotmodelbuilt',
        pivotprogress: 'pivotprogress',
        pivotreconfigure: 'pivotreconfigure',
        pivotrecordbuilt: 'pivotrecordbuilt',
        pivotrequestexception: 'pivotrequestexception',
        pivotstart: 'pivotstart',
        pivotstorebuilt: 'pivotstorebuilt',
        pivottotalcellclick: 'pivottotalcellclick',
        pivottotalcellcontextmenu: 'pivottotalcellcontextmenu',
        pivottotalcelldblclick: 'pivottotalcelldblclick',
        pivottotalclick: 'pivottotalclick',
        pivottotalcontextmenu: 'pivottotalcontextmenu',
        pivottotaldblclick: 'pivottotaldblclick'
    }
});
