/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.menugridrow.MenuGridRowView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.menugridrow.MenuGridRowViewController',
        'Demo.view.menugridrow.MenuGridRowViewModel',
        'Demo.view.menugridrow.MenuGridRowStoreModel',
    ],

    xtype: 'menu-grid-row',
    controller: 'menugridrow',
    viewModel: {
        type: 'menu-grid-row-viewmodel'
    },

    category: 'Row Operations',
    title: 'Menu In Grid Row',
    iconCls: 'x-fa fa-bars',
    description: 'Add a menu to grid rows.',

    columnLines: true,
    striped: true,

    bind: {
        store: '{companies}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'Industry',
        flex: 1,
        dataIndex: 'industry'
    }, {
        width: 44,
        cell: {
            tools: {
                menu: 'onMenu'
            }
        }
    }],
    toolContextMenu: { // used by Controller
        xtype: 'menu',
        anchor: true,
        padding: 10,
        minWidth: 300,
        viewModel: {},
        items: [{
            xtype: 'component',
            indented: false,
            bind: {
                data: '{record}'
            },
            tpl:
                '<div style="width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size:14px;">{name}</div>' +
                '<div style="color: grey; width: 200px;">' +
                '<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{desc}</div>' +
                '<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{affiliation}</div>' +
                '<tpl if="phone"><div>{phone}</div></tpl>' +
                '</div>' +
                '</div>'
        }, {
            text: 'Add',
            separator: true,
            margin: '10 0 0',
            iconCls: 'x-fa fa-plus',
            handler: 'addButton'
        }]
    }
});
