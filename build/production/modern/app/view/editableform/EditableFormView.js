/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.editableform.EditableFormView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.editableform.EditableFormViewController',
        'Demo.view.editableform.EditableFormStoreModel',
        'Demo.view.editableform.EditableFormViewModel'
    ],

    xtype: 'editable-form',
    controller: 'editableform',
    viewModel: {
        type: 'editable-form-viewmodel'
    },
    
    category: 'Editing',
    title: 'Form Editing',
    description:'Show and edit grid data with a from.',
    iconCls: 'x-fa fa-edit',

    items: [{
        docked: 'right',
        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.form.Panel.html
         */
        xtype: 'formpanel',
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
         * Binding could also be used to set these form fields.
         */
        items: [{
            xtype: 'textfield',
            label: 'Company',
            bind:{
                value:'{selection.name}'
            }
        }, {
            xtype: 'textareafield',
            label: 'Description',
            bind:{
                value:'{selection.desc}'
            }
        }, {
            xtype: 'numberfield',
            label: 'Price',
            bind:{
                value:'{selection.price}'
            }
        }, {
            xtype: 'datefield',
            label: 'Last Updated',
            bind:{
                value:'{selection.priceLastChange}'
            }
        }],

        /**
         * https://docs.sencha.com/extjs/7.2.0/modern/Ext.form.Panel.html#cfg-buttons
         */
        buttons: [{
            text: 'Save',
            handler: 'save'
        }]
    }],

    
    columnLines: true,
    
    // specify the name of the property to bind the selection to in the ViewModel
    bind: {
        selection: '{selection}',
        store:'{companies}'
    },

    /**
     * https://docs.sencha.com/extjs/7.2.0/modern/Ext.grid.Grid.html#cfg-columns
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
        text: 'Last Updated',
        dataIndex: 'priceLastChange',
        formatter: 'date("m/d/Y")',
        width: 115,
    }],
    listeners:{
        painted:'selectRecord'
    }
});
