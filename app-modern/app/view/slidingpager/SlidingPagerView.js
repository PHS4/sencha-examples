/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.slidingpager.SlidingPagerView', {
    extend: 'Ext.grid.Grid',


    requires: [
        'Demo.view.slidingpager.SlidingPagerViewController',
        'Demo.view.slidingpager.SlidingPagerViewModel',
        'Ext.grid.plugin.PagingToolbar'
    ],

    xtype: 'sliding-pager',
    controller: 'slidingpager',
    viewModel: {
        type: 'sliding-pager-viewmodel'
    },

    iconCls: 'x-fa fa-sliders-h',
    category: 'Rendering and Scrolling',
    title: 'Sliding Pager',
    description: 'The sliding pager is a specialized toolbar that is bound to a Ext.data.Store and provides automatic paging control.',

    plugins: {
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.plugin.PagingToolbar.html
         */
        gridpagingtoolbar: true
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-rowNumbers
     */
    rowNumbers: {
        text: 'Index'
    },

    bind: {
        store: '{threads}'
    },
    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Topic',
        dataIndex: 'title',
        flex: 1,
        sortable: false,
        renderer: 'renderTopic',
        cell: {
            encodeHtml: false
        }
    }, {
        text: 'Author',
        dataIndex: 'username',
        width: 100,
        hidden: true
    }, {
        text: 'Replies',
        dataIndex: 'replycount',
        width: 80,
        align: 'right'
    }, {
        text: 'Last Post',
        dataIndex: 'lastpost',
        width: 150,
        renderer: 'renderLast',
        cell: {
            encodeHtml: false
        }
    }]
});