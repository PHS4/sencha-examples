/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.infinitescrolling.InfiniteScrollingView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.infinitescrolling.InfiniteScrollingViewController',
        'Demo.view.infinitescrolling.InfiniteScrollingViewModel',
        'Demo.view.infinitescrolling.InfiniteScrollingStore'
    ],

    xtype: 'infinitescrolling',
    controller: 'infinite-scrolling',
    viewModel: {
        type: 'infinite-scrolling-viewmodel'
    },

    category: 'Rendering and Scrolling',
    title: 'Infinite Scrolling',
    iconCls: 'x-fa fa-infinity',
    description:'To add infinite scrolling to a grid use a virtual store. The virtual store creates and manage "active ranges" of records, which will monitor the scrolling in the grid, and refresh the view\'s rows from the page cache as needed. It will also pull new data into the page cache when scrolling of the view draws upon data near either end of the prefetched data.',
   
    scrollable: true,

    store: {
        type: 'infinitescrolling'
    },
    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'First Name',
        width: 150,
        dataIndex: 'firstName'
    }, {
        text: 'Last Name',
        width: 150,
        dataIndex: 'lastName'
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
    }]
});
