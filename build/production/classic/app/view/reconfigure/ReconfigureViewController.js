/**
 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html
 */
Ext.define('Demo.view.reconfigure.ReconfigureViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.advanced-reconfigure',

    /**
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#cfg-listen
     */
    listen: {
        component: {
            'datasourceview': {

                /**
                 * Listen for custom events thrown by the DataSourceView
                 */
                loaddata: 'onLoadData',
                generategrid: 'onGenerateGrid',

                /**
                 * https://docs.sencha.com/extjs/7.2.0/classic/Ext.grid.Panel.html#event-select
                 */
                select: 'onSelect'
            }
        }
    },

    /**
     * Once the view has rendered we want to add some listeners to the raw data source
     * to allow user clicks to set the root value.
     * https://docs.sencha.com/extjs/7.2.0/classic/Ext.app.ViewController.html#method-afterRender
     * @param {*} view
     */
    afterRender: function (view) {

        Log.event(arguments.callee.name, arguments, this);
        
        var me = this;

        // Only register clicks on when a user clicks on a property in the code view.
        view.down('#raw code').getEl().on('click', e => {
            if (e.target.classList.contains('property')) me.onPropertyClick(e);
        });
    },

    /**
     * Handles the click event on json data property.
     */
    onPropertyClick: function (e) {

        Log.event(arguments.callee.name, arguments, this);
        
        var me = this;
        var record = this.getViewModel().get('selection');
        
        record.set('root', e.target.innerText.split('"').join(''));

        // after the change has been made trigger reload.
        me.loadData(record, true);
    },

    onSelect: function (view, record, index, eOpts) {
        
        Log.event(arguments.callee.name, arguments, this);
        
        this.loadData(record, true);
    },

    onLoadData: function (record) {
        
        Log.event(arguments.callee.name, arguments, this);
        
        this.loadData(record, false);
    },

    /**
     * 
     */
    onGenerateGrid: function (record) {
        this.loadData(record, true);
    },

    /**
     * Pretty much everthing hinges on this method.
     * @param {object} record a data souce record
     * @param {boolean} genGrid pass true to trigger grid generation after loading the data.
     */
    loadData: function (record, genGrid = false) {

        var vm = this.getViewModel();

        vm.set('selection', record);

        // These aren't necessary but clue the user in that something is happening.
        //
        // clear all the data
        vm.set('rawData', '// loading...');
        vm.set('sampleData', '// loading...');
        vm.set('fieldsData', '// loading...');

        // clear the grid columns
        var dynoGrid = this.getView().down('#tbdGrid');
        dynoGrid.setColumns([]);

        // Load the data.
        Ext.Ajax.request({
            url: record.get('url'),
            cors: true,
            scope: this,
            success: function (res) {

                var rawData = JSON.parse(res.responseText);
                var sampleData = this.getSample(rawData, record.get('root'));
                var fieldsData = this.flatten(sampleData.data);

                // since the getSample method will choose a root property if not provided
                // this just makes sure it is current.
                record.set('root', sampleData.rootProperty);

                // update the viewmodel with new data.
                vm.set('rawData', rawData);
                vm.set('sampleData', sampleData.data);
                vm.set('fieldsData', fieldsData);

                if (genGrid) {
                    this.generateGrid();
                }
            },
            failure: function (res) {
                console.log(res);
                vm.set('rawData', '// There was an error getting the data.');
                vm.set('sampleData', '// <- what that said');
                vm.set('fieldsData', '// <- what that said');
            }
        });
    },
    
    /**
     * Handles all of the grid reconfiguration.
     */
    generateGrid: function () {
        
        Log.event(arguments.callee.name, arguments, this);

        var fields = this.getViewModel().get('fieldsData');
        var selection = this.getViewModel().get('selection');
        var rootProperty = selection.get('root');
        var grid = this.getView().down('#tbdGrid');

        // update the grid title.
        grid.setTitle(selection.get('name') + (rootProperty ? '.' + rootProperty : ''));

        // update the grid store
        // https://docs.sencha.com/extjs/7.2.0/classic/Ext.data.Store.html
        grid.setStore({

            // we aren't using a model so we provide the fields here instead.
            fields: fields,

            // https://docs.sencha.com/extjs/7.2.0/classic/Ext.data.proxy.Ajax.html
            proxy: {
                type: 'ajax',
                url: selection.get('url'),
                reader: {
                    type: 'json',
                    rootProperty
                }
            }
        });
        
        grid.setColumns(this.generateGridColumns(fields));
        grid.reconfigure();
        grid.getStore().load();

        return grid;
    },

    /**
     * Takes fields from a model or generated by the flatter method
     * to create basic grid column config.
     * @param {array} fields 
     */
    generateGridColumns: function (fields) {

        Log.event(arguments.callee.name, arguments, this);
        
        if (!fields) fields = [];
        return fields.map((field, index) => {
            var columnType = 'gridcolumn';
            var editorType = 'displayfield';

            switch (field.type) {
                case 'array':
                    columnType = 'arraycolumn';
                    editorType = 'textfield';
                case 'date':
                    columnType = 'datecolumn';
                    editorType = 'datefield';
                case 'number':
                case 'integer':
                    columnType = 'numbercolumn';
                    editorType = 'numberfield';
                case 'auto':
                case 'string':
                default:
                    columnType = 'gridcolumn';
                    editorType = 'textfield';
                    break;
            }

            return {
                xtype: columnType,
                dataIndex: field.name,
                text: field.name.split('_').join(' ').toUpperCase(),
                width: ((field.name.length * 16) + 16),
                editor: editorType
            };
        })
    },

    /**
     * Attempts to find an object representing a single record.
     * @param {object} data parsed json data
     * @param {string} rootProperty optional target property name
     */
    getSample: function (data, rootProperty) {
        
        Log.event(arguments.callee.name, arguments, this);
        
        var type = this.getType(data);

        data = (type === 'Array') ? data[0] : data;

        if (rootProperty && data.hasOwnProperty(rootProperty)) {
            data = data[rootProperty];
        }

        if (type === 'Object') {
            for (let property in data) {
                var value = data[property];
                if (this.getType(value) === 'Array') {
                    data = value.length && value[0];
                    rootProperty = property;
                }
            }
        }

        data = (this.getType(data) === 'Array') ? data[0] : data;

        return { data, rootProperty };
    },

    /**
     * Takes an object and recurisivly maps properties and types to 
     * create an array of fields. 
     * @param {object} object data 
     */
    flatten: function (object) {

        Log.event(arguments.callee.name, arguments, this);

        var fields = [];

        for (let key in object) {
            let value = object[key];
            let type = this.getType(value) || 'auto';
            let mapping = key;
            let field = {
                name: key,
                value: value,
                type: type.toLowerCase()
            };

            if (type === 'Object') {
                let subFields = this.flatten(value).map(subField => {
                    subField.mapping = mapping + '.' + (subField.mapping || subField.name);
                    return subField;
                });
                fields.push(...subFields);
            }
            else if (type === 'Array') {

                if (value.length && this.getType(value[0]) === 'Object') {
                    let subFields = this.flatten(value[0]).map((subField, index) => {
                        subField.path = mapping + '[' + index + '].' + (subField.mapping || subField.name);
                        return subField;
                    });

                    fields.push(...subFields);

                } else {

                    fields.push(field);
                }
            }
            else {
                fields.push(field);
            }
        }

        return fields;
    },

    /**
     * checks the type of a value and returns the proper type name.
     * @param {*} value 
     */
    getType: function (value) {
        
        if (value === null || value === undefined) return undefined;
        
        return value.constructor.name;
    },

    onReloadGrid: function (e, el, header, tool) {

        Log.event(arguments.callee.name, arguments, this);

        var grid = header.up('grid');
        if (grid.store) {
            grid.store.reload();
        }
    },

    onResizeColumns: function (e, el, header, tool) {

        Log.event(arguments.callee.name, arguments, this);

        this.getView().getColumns().forEach(col => col.autoSize());
    },

    onGridRowSelect: function (view, selected) {

        Log.event(arguments.callee.name, arguments, this);

        if (selected.length) {
            Ext.Msg.alert('Row Selected', JSON.stringify(selected[0].data));
        }
    }
});
