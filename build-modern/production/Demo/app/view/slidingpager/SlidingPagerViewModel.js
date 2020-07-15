/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.slidingpager.SlidingPagerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sliding-pager-viewmodel',

    requires: [
        'Ext.data.proxy.JsonP'
    ],

    stores: {
        threads: {
            idProperty: 'threadid',

            fields: [
                'title', 'forumtitle', 'forumid', 'username',
                { name: 'replycount', type: 'int' },
                { name: 'lastpost', mapping: 'lastpost', type: 'date', dateFormat: 'timestamp' },
                'lastposter', 'excerpt', 'threadid'
            ],

            proxy: {
                // load using script tags for cross domain, if the data in on the same domain as
                // this page, an HttpProxy would be better
                type: 'jsonp',
                url: 'https://www.sencha.com/forum/topics-browse-remote.php',
                reader: {
                    rootProperty: 'topics',
                    totalProperty: 'totalCount'
                },
                // sends single sort as multi parameter
                simpleSortMode: true
            },
            autoLoad: true,
            pageSize: 20,
            remoteSort: true,

            sorters: [{
                property: 'lastpost',
                direction: 'DESC'
            }]
        }
    }
});