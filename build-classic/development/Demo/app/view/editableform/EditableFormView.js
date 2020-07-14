/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html
 */
Ext.define('Demo.view.editableform.EditableFormView', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Demo.view.editableform.EditableFormViewController',
        'Demo.view.editableform.EditableFormViewModel',
        'Demo.view.editableform.EditableFormStore',
        'Demo.view.editableform.EditableFormStoreModel',
    ],

    xtype: 'editable-editableformview',
    controller: 'editable-editableformview',
    viewModel: {
        type: 'editable-editableformview'
    },
    
    category: 'Editing',
    description: 'Show a form populated by data from the record. Edits made can be seen in the row.',
    
    title: 'Form Editing',
    iconCls: 'x-fa fa-edit',


    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.panel.Panel.html#cfg-dockedItems
     */
    dockedItems: [{
        dock: 'right',

        /**
         * https://docs.sencha.com/extjs/7.2.0/classic/Ext.form.Panel.html
         */
        xtype: 'form',
        iconCls: 'x-fa fa-building',
        width: 300,

        /**
         * Update the title based on the grid selection
         */
        bind: {
            category: '',
    title: 'Edit {selection.name}' 
        },
        
        bodyPadding: 10,
        
        /**
         * https://docs.sencha.com/extjs/7.2.0/classic/Ext.layout.container.Anchor.html
         */
        layout: 'anchor',
        
        defaults: {
            /**
             * https://docs.sencha.com/extjs/7.2.0/classic/Ext.layout.container.Anchor.html#cfg-anchor
             */
            anchor: '100%',
            labelAlign: 'top'
        },

        /**
         * Binding could also be used to set these form fields.
         */
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Company',
            name: 'name'
        }, {
            xtype: 'textareafield',
            fieldLabel: 'Description',
            name: 'desc'
        }, {
            xtype: 'numberfield',
            fieldLabel: 'Price',
            name: 'price',
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Change',
            name: 'priceChange',
        }, {
            xtype: 'displayfield',
            fieldLabel: '% Change',
            name: 'priceChangePct',
        }, {
            xtype: 'datefield',
            fieldLabel: 'Last Updated',
            name: 'priceLastChange',
        }],

        /**
         * https://docs.sencha.com/extjs/7.2.0/classic/Ext.panel.Panel.html#cfg-buttons
         */
        buttons: [{
            text: 'Save',
            handler: 'save'
        }]
    }],

    store: { type: 'editableformstore' },
    
    headerBorders: true,
    gridLines: true,
    columnLines: true,
    frame: false,
    
    // specify the name of the property to bind the selection to in the ViewModel
    bind: {
        selection: '{selection}'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html#cfg-columns
     */
    columns: [{
        text: 'Company',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Description',
        dataIndex: 'desc',
        flex: 1
    }, {
        text: 'Price',
        dataIndex: 'price',
        formatter: 'usMoney',
        width: 95,
    }, {
        text: 'Change',
        dataIndex: 'priceChange',
        width: 80,
    }, {
        text: '% Change',
        dataIndex: 'priceChangePct',
        width: 100,
    }, {
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")',
        width: 115,
    }]
});
