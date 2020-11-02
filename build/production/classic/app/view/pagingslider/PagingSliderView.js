
Ext.define('Demo.view.pagingslider.PagingSliderView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.ux.SlidingPager',
        
        'Demo.view.pagingslider.PagingSliderViewController',
        'Demo.view.pagingslider.PagingSliderViewModel',
        'Demo.view.pagingslider.PagingSliderStore',
    ],

    xtype: 'paging-slider-grid',
    controller: 'paging-slider-grid',
    viewModel: {
        type: 'paging-slider-grid'
    },

    category: 'Rendering & Scrolling',
    title: 'Paging Slider',
    iconCls: 'x-fa fa-sliders-h',
    description: 'Drag the slider in the paging toolbar to load records based on the `pageSize` configuration.',

    /**
     * See Demo.store.Users for additional configuration related to paging.
     */
    store: {
        type: 'pagingsliderstore'
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
            'ux-slidingpager': true
        }
    }
});
