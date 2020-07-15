/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.editableform.EditableFormViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.editable-form-viewmodel',
    
    data: {
        selection: null
    },
    stores:{
        companies:{
            model: 'Demo.view.editableform.EditableFormStoreModel',
            autoLoad: true,
            
            proxy: {
                type: 'ajax',
                url: 'app/view/editableform/data.json',
                reader: {
                    type: 'json'
                }
            }
        }
    }
});
