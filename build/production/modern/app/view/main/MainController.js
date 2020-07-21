/**
 * https://docs.sencha.com/extjs/7.2.0/modern/Ext.app.ViewController.html
 */
Ext.define('Demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    init: function () {
        // if user is coming to the app without a hash, 
        // then update the hash to trigger router.
        if (!window.location.hash) {
            this.updateHash('demo code structure', 'demoviewmainmain');
        }
        this.preConfiguredView();

        var vm = this.getViewModel();

        var store = vm.getStore('nav');

        store.setData(this.getFileInfo())
    },

    preConfiguredView: function () {
        var vm = this.getViewModel();
        var params = new URLSearchParams(window.location.search || window.location.hash.split('?').pop());

        vm.set('demo', (params.get('demo') == 'false'));
        vm.set('source', (params.get('source') == 'false'));
        vm.set('toolbar', (params.get('toolbar') == 'false'));
        vm.set('navigation', (params.get('navigation') == 'false'));
        vm.set('description', (params.get('description') == 'false'));
       
    },
    currentSelectionChange: function (t, record, e) {
        /**
         * Don't proceed if the record is empty. This is 
         * for initial load most times.
         */

        if (Ext.Object.isEmpty(record)) {
            return;
        }

        /**
         * Expand the row with the selected item
         */
        var selected = Ext.ComponentQuery.query('rowheader[name~=rowheader_name]');
        
        for(var v=0; v < selected.length; v++){
            if(selected[v].getGroup().data._groupValue === record.data.category){
                selected[v].getGroup().expand()
            }
        }
         /**
         * End Expand the row with the selected item
         */


        var data = record.data;

        var modernDemo = this.getView().down('#modernDemo');
        var demoSource = this.getView().down('#demoSource');
        var descPanel = this.getView().down('#descPanel');
        var demo;
    
        /**
         * values extracted from the record
         */
        var {
            className,
            requires,
            categorySlug,
            slug
        } = data;

        /**
       * Create a new class instance unless it's the 
       * main view then do something custom. If this isn't done
       * you get a cool infinity mirror situation. Try it out.
       */
        
        if (className === 'Demo.view.main.Main') {
            demo = Ext.create({
                xtype: 'code',
                url: 'readme.md'
            });
        } else {
            demo = Ext.create(className, {
                padding: 0,
                bodyPadding: 0,
                margin: 0
            });
            
        }

        /**
         * Remove all items from the component but don't destroy as it has a chain reaction for 
         * required classes I think.
         */
        modernDemo.removeAll(false, false);

        /**
         * Add the demo class instance to the panel.
         */
        modernDemo.add(demo);
       
        /**
         * Clear and add the source code tabs to the tabpanel.
         */
        demoSource.removeAll();

        /**
         * Create a new array of the requires AND the 
         * current view + a data.json file that may or 
         * may not exist in the view package directory.
         */
        var files = requires;
        files.forEach(path => {
            let filename = path.split('/').pop().replace(/(.js|.json)$/, '');
            /**
             * If the file path doesn't start with app/ then we want to skip it
             * since it is most likely a framework class and not relevant for 
             * the reader.
             */

            if (!path.startsWith('app/')) return;
            /**
             * For each file in the files array add a new `code`
             * component for displaying the source code.
             * 
             * Conditionally, handle differently if the main view 
             * files are getting loaded. 
             */

            if (className === 'Demo.view.main.Main' && path.endsWith('data.json')) {
                demoSource.add(Ext.create({
                    xtype: 'code',
                    value: this.getFileInfo(),
                    title: this.fileToTitle(filename)
                }));

            } else {
                demoSource.add(Ext.create({
                    xtype: 'code',
                    url: path,
                    title: this.fileToTitle(filename),
                    language: path.substr(path.lastIndexOf('.') + 1)
                }));
            }

        });


        descPanel.setHtml('<h2 style="color: #111111;">' + record.data.title + '</h2><p>' + record.data.description + '</p>')
        demoSource.setActiveItem(0);
       
        var catSlug;
        if(categorySlug.charAt(0) === '-'){
            catSlug = categorySlug.slice(1);
        }else{
            catSlug = categorySlug;
        }
        this.updateHash(catSlug, slug);
    },
    listen: {
        global: {
            unmatchedroute: 'onUnmatchedRoute'
        }
    },

    routes: {
        '/': 'onUnmatchedRoute',
        '/:category': 'routeCategory',
        '/:category/:demo': 'routeDemo'
    },

    /**
     * When no route is matched just load the main view example
     */
    onUnmatchedRoute: function (token) {
        this.route('demo code structure', 'demoviewmainmain');
    },

    routeCategory: function (category) {
        this.route(category, null);
    },

    routeDemo: function (category, demo) {
        this.route(category, demo);
    },

    route: function (category, demo) {

        var grid = this.getView().down('#navigation');
        var vm = this.getViewModel();
        var store = vm.getStore('nav')
        var collection = store;

        if (category) {
            collection = store.query('categorySlug', category);
        }

        if (demo) {
            collection = store.query('slug', demo);
        }

        if (!collection.length) {
            Ext.Msg.alert('404', 'The URL was not found. Instead loading the application Main View.');
            return this.onUnmatchedRoute()
        }
        grid.setSelection(collection.first());

    },
    prevDemo: function () {

        var grid = this.getView().down('#navigation');
        var index = grid.getStore().getDataSource().indexOf(grid.getSelection());
        
        index = index - 1;

        if (index >= 0) {
            var record = grid.getStore().getDataSource().items[index];
            grid.setSelection(record);
        }
    },

    nextDemo: function () {

        var grid = this.getView().down('#navigation');
        var index = grid.getStore().getDataSource().indexOf(grid.getSelection());
      
        index = index + 1;

        if (index < grid.getStore().getDataSource().getCount()) {
            var record = grid.getStore().getDataSource().items[index];
            grid.setSelection(record);
        }
    },

    updateHash: function (category, demo) {
        window.location.hash = `#/${category}/${demo}`;
    },

    copyToClipboard: function () {

        var tabpanel = this.getView().down('#demoSource');
        var activeTab = tabpanel.getActiveItem();
        if (!activeTab) {
            return console.log('No active tab to copy from.')
        }
        var node = activeTab.el.dom.querySelector('pre code');
        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand("copy");
    },

    /**
     * !!!!!!!!!!!!!!!!!!!! :WARNING: !!!!!!!!!!!!!!!!!!!!
     * This won't really work when building for testing or production 
     * since all files get concatenated and/or minified.
     */
    getFileInfo: function () {
        console.time('build-nav')

        var files = Object.keys(Ext.ClassManager.classes)
            /**
            * Filter the class list to only the classes with the 
            * namespace of view and exclude all except the views.
            */
            .filter(className => (new RegExp('Demo.view.').test(className) && !new RegExp('(_|Controller|Model|Store|Raw|Code)').test(className)))
            /**
             * Loop over each and build create some metadata about 
             * each one to be saved as a record in the nav store.
             */
            .map((className, index) => {
                var clazz = Ext.ClassManager.get(className);
                var aliases = Ext.ClassManager.getAliasesByName(className);
                var config = clazz && clazz.prototype ? clazz.prototype.config : null;

                var title = typeof config.title === 'object' ? className : config.title;

                var demoSlug = this.titleToSlug(title);

                var category = clazz.prototype.category != '' ? clazz.prototype.category : 'Misc.';

                var categorySlug = this.titleToSlug(category);


                var description = clazz.prototype.description != '' ? clazz.prototype.description : title;

                var xtype = aliases && aliases.length ? aliases[0].replace('widget.', '') : 'no-xtype';
                var iconCls = clazz.prototype.iconCls || 'x-fa fa-table';
                var filePath = Ext.Loader.getPath(className);
                var pathParts = filePath.split('/');
                var file = pathParts.pop();
                var folder = pathParts.join('/');
                var extension = file.substr(file.lastIndexOf('.') + 1);
                var packageName  = pathParts.pop();
                
                // Sencha CMD failed to build unless I buried below into a rediculous # of steps.
                // -------------------------------------------------------------------------------
                // var reqClasses = Demo.view[packageName];
                // var requires = Object.keys(Demo.view[packageName]).map(cls => {
                //    return Ext.Loader.getPath('Demo.view.' + packageName + '.' + cls);
                // });
                // -------------------------------------------------------------------------------
                
                var requires = [];
                var reqClasses = Object.keys(Ext.ns(Ext.String.format('Demo.view.{0}', packageName)));
                reqClasses.forEach((cls) => {
                    // also overly complicated because of sencha cmd.
                    var requiredClassname = Ext.String.format('Demo.view.{0}.{1}', packageName, cls);
                    var requiredFilePath = Ext.Loader.getPath(requiredClassname);
                    requires.push(requiredFilePath);                    
                });

                /**
                * Since the requires are used to determine the source 
                * code files but requires only wants js files.
                */
              
                if (folder === 'app/view/xmldatagrid') {
                    folder = folder + '/data.xml'
                } else {
                   folder = folder + '/data.json'
                }
              
                requires.push(folder);

                var record = {
                    id: index,
                    title: title,
                    slug: demoSlug,
                    category: category,
                    categorySlug: categorySlug,
                    iconCls: iconCls,
                    className: className,
                    xtype: xtype,
                    path: filePath,
                    folder: folder,
                    file: file,
                    extension: extension,
                    description: description,
                    requires: requires,
                    searchable: filePath.split('/').join(' ') + ' ' + title
                };
                return record;
            });

        console.timeEnd('build-nav');
        return files;

    },

    /**
    * Pass in a filename and if the name contains View, Controller, Model 
    * or Store it returns just that text. If no matches are found returns 
    * the input value as a safety net.
    */
    fileToTitle: function (filename) {
        var results = filename.match(/(View|Controller|Model|Store)/g, '');
        if (results) return results.join('');
        return filename;

    },

    /**
    * Converts a string of text to a `url-friendly-string`
    */
    titleToSlug: function (string) {
        return string.toLowerCase().replace(/ +/g, '-').replace(/[^\w-]+/g, '').replace(/[-]+/g, '-');
    },

    onCollapse: function (t) {
        Ext.ComponentQuery.query('#clipboard')[0].setHidden(true);
    },
    onExpand: function (t) {
        Ext.ComponentQuery.query('#clipboard')[0].setHidden(false);
    }
});
