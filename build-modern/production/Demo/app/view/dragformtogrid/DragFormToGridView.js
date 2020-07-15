/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.Panel.html
 */
Ext.define('Demo.view.dragformtogrid.DragFormToGridView', {
    extend: 'Ext.Panel',

    requires: [
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
        type: 'box'
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
        xtype: 'panel',
        title: 'Patients From',
        flex: 0.4,
        margin: '20 0 0 0',
        border: true,
        scrollable: 'y',
        items: [{
            xtype: 'dataview',
            bind: {
                store: '{patient}'
            },
            reference: 'patientView',
            itemTpl: ['<tpl for=".">',
                '<div style="border:1px solid grey; margin:5px;" class="patient-source">',
                '<table><tbody>',
                '<tr><td class="patient-label">Name</td><td class="patient-name">{name}</td></tr>',
                '<tr><td class="patient-label">Address</td><td class="patient-name">{address}</td></tr>',
                '<tr><td class="patient-label">Telephone</td><td class="patient-name">{telephone}</td></tr>',
                '</tbody></table>',
                '</div>',
                '</tpl>'
            ]
        }]
    }, {
        xtype: 'spacer',
        maxHeight: 20,
        maxWidth: 20
    }, {
        /**
        * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
         */
        xtype: 'grid',
        flex: 0.6,
        title: 'Hospitals Grid',
        margin: '20 0 0 0',
        reference: 'hospitalView',
        variableHeights: true,
        //border:true,
        style:'border:1px solid rec;',
        bind: {
            store: '{hospital}'
        },
        selectable: {
            drag: true
        },
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-itemConfig
         */
        itemConfig: {
            body: {
                cls: 'hospital-target'
            }
        },
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
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