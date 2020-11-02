
Ext.define('Demo.view.pagingtoolbar.PagingToolbarView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.toolbar.Paging',

        'Demo.view.pagingtoolbar.PagingToolbarViewController',
        'Demo.view.pagingtoolbar.PagingToolbarViewModel',
        'Demo.view.pagingtoolbar.PagingToolbarStore'
    ],

    xtype: 'paging-toolbar-pagingtoolbargrid',
    controller: 'paging-toolbar-pagingtoolbargrid',
    viewModel: {
        type: 'paging-toolbar-pagingtoolbargrid'
    },

    iconCls: 'x-fa fa-table',
    title: 'Paging Toolbar',
    category: 'Rendering & Scrolling',
    description: 'Click the next and previous buttons in the paging toolbar to load records based on the `pageSize` configuration.',

    /**
     * See Demo.store.Users for additional configuration related to paging.
     */
    store: {
        type: 'pagingtoolbarstore'
    },

    columns: [{
        text: 'First Name',
        width: 150,
        dataIndex: 'firstName'
    }, {
        text: 'Last Name',
        width: 150,
        dataIndex: 'lastName'
    }, {
        text: 'Id',
        width: 50,
        dataIndex: 'id',
    }, {
        text: 'Title',
        flex: 1,
        dataIndex: 'title'
    }, {
        text: 'Address',
        flex: 1,
        dataIndex: 'address'
    }, {
        text: 'Company',
        flex: 1,
        dataIndex: 'company'
    }],

    bbar: {
        /**
         * https://docs.sencha.com/extjs/7.2.0/classic/Ext.toolbar.Paging.html
         */
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",
        items: ['-', {
            ui: 'orange',
            bind: '{expanded ? "Hide Preview" : "Show Preview"}',
            pressed: '{expanded}',
            enableToggle: true
        }]
    }
});
