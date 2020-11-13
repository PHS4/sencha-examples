/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.locked.Grid.html
 */
Ext.define('Demo.view.lockedcolumn.LockedColumnView', {
    extend: 'Ext.grid.locked.Grid',
   
    requires: [
         'Demo.view.lockedcolumn.LockedColumnViewController',
         'Demo.view.lockedcolumn.LockedColumnViewModel',
         'Demo.view.lockedcolumn.LockedColumnStoreModel'

    ],
    xtype: 'locked-column',
    controller: 'lockedcolumn',
    viewModel: {
        type: 'locked-column-viewmodel'
    },

    iconCls: 'x-fa fa-lock',
    category: 'Column Operations',
    title: 'Locked Column',
    description:'Lock grid columns to enable horizontal scrolling independent from the other grid columns.',
    
    bind:{
        store:'{companies}'
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.locked.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        locked:'left',
        flex: 1,
        minWidth: 100,
        dataIndex: 'name'
    }, {
        text: 'Price',
        locked:'left',
        minWidth: 100,
        dataIndex: 'trend',
        formatter: 'usMoney'
    }, {
        text: 'Change',
        width: 90,
        dataIndex: 'change',
        renderer: 'renderChange',
        cell: {
            encodeHtml: false
        }
    }, {
        text: '% Change',
        width: 100,
        dataIndex: 'pctChange',
        renderer: 'renderPercent',
        cell: {
            encodeHtml: false
        }
    }, {
        text: 'Last Updated',
        width: 125,
        dataIndex: 'lastChange',
        formatter: 'date("m/d/Y")'
    }],
    signTpl: '<span style="' +
            'color:{value:sign("red", "green")}"' +
        '>{text}</span>'
});