/**
 * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html
 */
Ext.define('Demo.view.editablepopup.EditablePopupView', {
    extend: 'Ext.grid.Grid',

    requires: [
        'Demo.view.editablepopup.EditablePopupViewController',
        'Demo.view.editablepopup.EditablePopupViewModel',
        'Demo.view.editablepopup.EditablePopupStoreModel',
    ],

    xtype: 'editable-popup',
    controller: 'editablepopup',
    viewModel: {
        type: 'editable-popup-viewmodel'
    },

    category: 'Editing',
    title: 'Popup Editing',
    iconCls: 'x-fa fa-window-restore',
    description: 'Display a popup form populated by data from the selected record. Edits made can be seen in the row.',

    columnLines: true,

    /**
     * specify the name of the property to bind the selection to in the ViewModel.
     * In this case we are calling it `{selection}`.
     */
    bind: {
        selection: '{selection}',
        store: '{companies}'
    },

    /**
     * https://docs.sencha.com/extjs/7.3.1/modern/Ext.grid.Grid.html#cfg-columns
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
    items: [
        /**
         * https://docs.sencha.com/extjs/7.3.1/modern/Ext.Dialog.html
         */
        {
            xtype: 'dialog',
            layout: 'fit',
            width: 400,
            closable: true,
            closeAction: 'hide',
            title: 'Edit',
            iconCls: 'x-fa fa-building',
            items: [{
                xtype: 'formpanel',
                width: 300,
                bodyPadding: 10,
                items: [{
                    xtype: 'textfield',
                    label: 'Company',
                    bind: {
                        value: '{selection.name}'
                    }
                }, {
                    xtype: 'textareafield',
                    label: 'Description',
                    bind: {
                        value: '{selection.desc}'
                    }
                }, {
                    xtype: 'numberfield',
                    label: 'Price',
                    bind: {
                        value: '{selection.price}'
                    }
                }, {
                    xtype: 'datefield',
                    label: 'Last Updated',
                    bind: {
                        value: '{selection.priceLastChange}'
                    }
                }],

                buttons: [{
                    text: 'Save',
                    handler: 'saveForm'
                }]

            }]

        }]
});
