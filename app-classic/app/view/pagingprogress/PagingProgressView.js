
Ext.define('Demo.view.pagingprogress.PagingProgressView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.pagingprogress.PagingProgressViewController',
        'Demo.view.pagingprogress.PagingProgressViewModel',
        'Demo.view.pagingprogress.PagingProgressStore'
    ],

    xtype: 'paging-progress-grid',
    controller: 'paging-progress-grid',
    viewModel: {
        type: 'paging-progress-grid'
    },

    category: 'Paging',
    title: 'Progress Bar Pager',
    iconsCls: 'x-fa fa-battery-quarter',

    /**
     * See Demo.store.Users for additional configuration related to paging.
     */
    store: {
        type: 'pagingprogressstore'
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

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.toolbar.Paging.html
     */
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        plugins: {
            'ux-progressbarpager': true
        }
    }
});
