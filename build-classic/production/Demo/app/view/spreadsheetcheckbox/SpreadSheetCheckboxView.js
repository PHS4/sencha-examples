/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.spreadsheetcheckbox.SpreadSheetCheckboxView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.spreadsheetcheckbox.SpreadSheetCheckboxViewController',
        'Demo.view.spreadsheetcheckbox.SpreadSheetCheckboxViewModel',
        'Demo.view.spreadsheetcheckbox.SpreadSheetCheckboxStore',
        'Demo.view.spreadsheetcheckbox.SpreadSheetCheckboxStoreModel'
    ],

    xtype: 'spreadsheet-checkbox-grid',
    controller: 'spreadsheet-checkbox-grid',
    viewModel: {
        type: 'spreadsheet-checkbox-grid'
    },
    
    title: 'Spreadsheet Selection',
    category: 'Selection',
    description: 'Select rows and cells like in a Spreadsheet',

    store: {
        type: 'spreadsheetcheckboxstore'
    },

    selModel: {
        type: 'spreadsheet',
        // Disables sorting by header click, though it will be still available via menu
        columnSelect: true,
        checkboxSelect: true,
        pruneRemoved: false,
        extensible: 'y'
    },

    // Enable CTRL+C/X/V hot-keys to copy/cut/paste to the system clipboard.
    plugins: [{
        ptype: 'clipboard',
        selectionreplicator: true
    }],

    listeners: {
        selectionchange: 'onSelectionChange'
    },

    tools: [{
        type: 'refresh',
        handler: 'onRefresh',
        tooltip: 'Reload Data'
    }],

    tbar: [{
        xtype: 'component',
        html: 'Selectable: '
    }, {
        text: 'Rows',
        enableToggle: true,
        toggleHandler: 'toggleRowSelect',
        pressed: true
    }, {
        text: 'Cells',
        enableToggle: true,
        toggleHandler: 'toggleCellSelect',
        pressed: true
    }, {
        text: 'Columns',
        enableToggle: true,
        toggleHandler: 'toggleColumnSelect',
        pressed: true
    }, '->', {
        xtype: 'component',
        reference: 'status'
    }],

    columns: [
        { text: 'Year', dataIndex: 'year', width: 70, align: 'right' },
        { text: 'Jan', dataIndex: 'jan', width: 65, align: 'right' },
        { text: 'Feb', dataIndex: 'feb', width: 65, align: 'right' },
        { text: 'Mar', dataIndex: 'mar', width: 65, align: 'right' },
        { text: 'Apr', dataIndex: 'apr', width: 65, align: 'right' },
        { text: 'May', dataIndex: 'may', width: 65, align: 'right' },
        { text: 'Jun', dataIndex: 'jun', width: 65, align: 'right' },
        { text: 'Jul', dataIndex: 'jul', width: 65, align: 'right' },
        { text: 'Aug', dataIndex: 'aug', width: 65, align: 'right' },
        { text: 'Sep', dataIndex: 'sep', width: 65, align: 'right' },
        { text: 'Oct', dataIndex: 'oct', width: 65, align: 'right' },
        { text: 'Nov', dataIndex: 'nov', width: 65, align: 'right' },
        { text: 'Dec', dataIndex: 'dec', width: 65, align: 'right' }
    ],

    forceFit: true,

    viewConfig: {
        columnLines: true,
        trackOver: false
    }
});
