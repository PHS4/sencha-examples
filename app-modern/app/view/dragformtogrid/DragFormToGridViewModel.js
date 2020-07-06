/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewModel.html
 */
Ext.define('Demo.view.dragformtogrid.DragFormToGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.drag-form-to-grid-viewmodel',
    stores: {
        patient: {
            fields: ['name', 'address', 'telephone'],
            autoLoad: true,
            
            proxy: {
                type: 'ajax',
                url: 'app/view/dragformtogrid/data.json',
                reader: {
                    type: 'json',
                    rootProperty:'patients'
                }
            }
        },
        hospital: {
            fields: ['name', 'address', 'telephone', 'patients'],
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'app/view/dragformtogrid/data.json',
                reader: {
                    type: 'json',
                    rootProperty:'hospitals'
                }
            }
        }
    }
});