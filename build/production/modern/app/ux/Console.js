Ext.define('Demo.ux.Console', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.console',
    
    ui: 'console',
    
    autoShow: true,
    closable: true,
    resizable: true,
    closeAction: 'hide',

    dock: 'bottom',

    width: '100%',
    height: 400,

    iconCls: 'x-fa fa-terminal',
    title: 'Console',

    /**
     * temp storage for selections during reload.
     */
    selected: null,

    runner: null,

    config: {
        task: null,
        interval: 3000
    },

    scrollable: true,
    
    store: {
        type: 'logs'
    },

    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        items: [
            {
                xtype: 'textfield',
                name: 'FILTER',
                itemId: 'filterField',
                fieldLabel: 'Filter (case sensitive)',
                labelAlign: 'right',
                labelWidth: 200,
                flex: 1,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onFilter'
                }
            },
            {
                xtype: 'tbspacer'
            },
            {
                xtype: 'button',
                text: 'Clear',
                itemId: 'clearButton',
                ui: 'red',
                iconCls: 'x-fa fa-ban',
                handler: 'clear'
            }
        ]
    }],
    
    allowDeselect: true,

    plugins: {
        gridfilters: true
    },

    viewConfig: {
        headerBorders: true,
        gridLines: true,
        rowLines: true,
        columnLines: true,
        loadMask: false,
        preserveScrollOnRefresh: true
    },

    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: 'timestamp',
            dataIndex: 'timestamp',
            xtype: 'datecolumn',
            width: 150,
            renderer: 'renderLogs'
        },
        {
            text: 'type',
            dataIndex: 'type',
            width: 100,
            renderer: 'renderLogs',
            filter: 'list'
        },
        {
            text: 'class',
            dataIndex: 'class',
            width: 300,
            renderer: 'renderLogs',
            filter: 'list'
        },
        {
            text: 'method',
            dataIndex: 'method',
            width: 200,
            renderer: 'renderLogs',
            filter: 'list'
        },
        {
            text: 'message',
            dataIndex: 'message',
            flex: 300,
            renderer: 'renderLogs',
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for...'
                }
            }
        },
        {
            text: 'params',
            dataIndex: 'args',
            flex: 400,
            renderer: 'renderLogs'
        }
    ],

    defaultListenerScope: true,

    listeners: {
        render: 'onGridRender',
        viewready: 'onViewReady',
    },

    initialize: function () {
        var me = this;

        Ext.applyIf(me, {
            store: Log.store,
        });

        me.callParent(arguments);
    },

    onViewReady: function () {
        this.store.on('add', function () {
            this.getView().scrollBy(0, 999999, true);
        }, this);
    },

    renderLogs: function (value, metaData, record, rowIndex, colIndex, store, view) {
        /**
         * Add tooktips
         */
        metaData.tdAttr = Ext.String.format('data-qtip="{0}"', value);
        metaData.tdStyle += 'font-family: monospace;';
                
        if (record.get('type') === 'ERROR') {
            metaData.tdStyle += 'background-color: red; color: white;';
        }
        if (colIndex == 1) {
            value = Ext.util.Format.date(value, 'h:i:s:u');
        }

        return value;
    },

    onFilter: function (field) {    
        this.filter(field.getValue());
    },

    filter: function (value) {
    
        var me = this;
        var store = me.getStore();
        var filterField = me.down('#filterField');

        value = value == undefined ? filterField.getValue() : value;

        store.clearFilter(true);
        store.filterBy(function (record) {
            return new RegExp(value, 'gm').test(Object.values(record.getData()).join(' '));
        });
    },

    load: function (params) {
    
        var me = this;
        var store = me.getStore();
        
        if (store.getProxy().type) {

            me.getStore().load({
                params: params || {},
                scope: me,
                callback: function () {
                    this.onUpdate()
                }
            });
        } else {
            me.onUpdate();
        }
    },

    onUpdate: function () {

        /**
         * if there's a selection in the console don't scroll down 
         * automatically on load.
         */
        if (this.autoUpdate()) {
            this.getView().scrollBy(0, 999999, true);
        }

        /**
         * Apply filters when new data comes in.
         */
        this.filter();
    },

    clear: function (btn) {
        this.store.removeAll();
    },

    onEnableServerLogs: Ext.emptyFn,

    onRefresh: Ext.emptyFn,

    onGridRender: Ext.emptyFn,

    onDockChange: Ext.emptyFn,

    onDestroy: Ext.emptyFn
});

