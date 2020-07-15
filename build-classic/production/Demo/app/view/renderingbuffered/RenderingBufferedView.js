
Ext.define('Demo.view.renderingbuffered.RenderingBufferedView',{
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.renderingbuffered.RenderingBufferedViewController',
        'Demo.view.renderingbuffered.RenderingBufferedViewModel',
        'Demo.view.renderingbuffered.RenderingBufferedStore',
        'Demo.view.renderingbuffered.RenderingBufferedStoreModel'
    ],

    xtype: 'rendering-buffered-bufferedgrid',
    controller: 'rendering-buffered-bufferedgrid',
    viewModel: {
        type: 'rendering-buffered-bufferedgrid'
    },

    iconCls: 'x-fa fa-infinity',
    title: 'Infinite Scrolling',
    category: 'Rendering & Scrolling',
    description: 
        'A BufferedRenderer is instantiated which will monitor the scrolling in ' + 
        'the grid, and refresh the view\'s rows from the page cache as needed. It ' + 
        'will also pull new data into the page cache when scrolling of the view ' + 
        'draws upon data near either end of the prefetched data.',
    
    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.data.BufferedStore.html
     */
    store: {
        type: 'renderingbufferedstore'
    },
    
    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.filters.Filters.html
     */
    plugins: {
        gridfilters: true
    },

    columns: {
        
        defaults: {
            /**
             * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.filters.filter.String.html
             */
            filter: {
                type: 'string'
            }
        },

        items: [{
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
            /**
             * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.filters.filter.Number.html
             */
            filter: {
                type: 'number'
            }
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
    }
});
