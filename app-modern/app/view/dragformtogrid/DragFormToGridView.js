/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.Panel.html
 */
Ext.define('Demo.view.dragformtogrid.DragFormToGridView', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.plugin.dd.DragZone',
        'Ext.plugin.dd.DropZone',

        'Demo.view.dragformtogrid.DragFormToGridViewModel',
        'Demo.view.dragformtogrid.DragFormToGridViewController'
    ],

    xtype: 'grag-form-to-grid',
    controller: 'dragformtogrid',
    viewModel: {
        type: 'drag-form-to-grid-viewmodel'
    },

    category: 'Drag and Drop',
    title: 'Drag Form to Grid',
    description: 'Drag form items to a grid.',

    layout: {
        type: 'box',
        pack: 'space-around',
        align: 'stretch'
    },

    responsiveConfig: {
        'width < 565': {
            layout: {
                vertical: true
            }
        },
        'width >= 565': {
            layout: {
                vertical: false
            }
        }
    },
    
    items: [{
        xtype: 'list',
        shadow: true,
        width: 300,
        margin: '20px 10px 20px 20px',
        
        scrollable: 'y',
        bind: {
            store: '{patient}'
        },
        reference: 'patientView',

        items: {
            xtype: 'titlebar',
            title: 'Patients From',
            docked: 'top'
        },
        selectable: {
            drag: true
        },
        itemTpl: [
            '<table class="patient-source" style="width: 100%;">',
                '<tbody>',
                    '<tr>',
                        '<th class="patient-label" style="text-align:right;">Name</th>',
                        '<td class="patient-name">{name}</td>',
                    '</tr>',
                    '<tr>',
                        '<th class="patient-label" style="text-align:right;">Address</th>',
                        '<td class="patient-name">{address}</td>',
                    '</tr>',
                    '<tr>',
                        '<th class="patient-label" style="text-align:right;">Telephone</th>',
                        '<td class="patient-name">{telephone}</td>',
                    '</tr>',
                '</tbody>',
            '</table>'
        ]
    }, {
        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
         */
        xtype: 'grid',
        flex: 1,
        shadow: true,
        margin: '20px 20px 20px 10px',
        title: 'Hospitals Grid',
        reference: 'hospitalView',
        variableHeights: true,

        bind: {
            store: '{hospital}'
        },
        
        selectable: {
            drag: true
        },

        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-itemConfig
         */
        itemConfig: {
            viewMode: true,
            body: {
                cls: 'hospital-target',
                tpl: [
                    '<div class="empty-txt" style="width: 100%; margin: 2px 0px; background: #eee; padding: 2px; border: 1px solid lightgray;">',
                        '<div style="display: inline-block; margin:2px 4px; padding: 5px 8px; border:1px solid transparent;">',
                            'Drop patients here',
                        '</div>',
                        '<tpl if="patients">',
                            '<tpl for="patients">',
                                '<div class="name-tag x-tooltiptool" style="background:#eee; padding: 5px 8px; border:1px solid lightgray; border-radius:35px; display:inline-flex; align-items:center; margin:2px 4px; font-size:13px;">',
                                    '<span>{.}</span>',
                                    '<span index="{# - 1}" style="color:red; padding:3px;" class="remove-icon x-icon-el x-font-icon x-tool-type-close"></span>',
                                '</div>',
                            '</tpl>',
                        '</tpl>',
                    '</div>',
                ].join('')
            }
        },
        
        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
         */
        columns: [{
            dataIndex: 'name',
            text: 'Name',
            flex: 1
        }, {
            dataIndex: 'address',
            text: 'Address',
            flex: 1
        }, {
            dataIndex: 'telephone',
            text: 'Telephone',
            flex: 1
        }],

        listeners: {
            element: 'element',
            delegate: ['.remove-icon'],
            tap: 'onRemoveTapped'
        }
    }]
});