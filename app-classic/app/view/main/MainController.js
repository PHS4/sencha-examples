/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Demo.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

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
     * When the data in currentDemo changes call currentSelectionChange
     * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html#cfg-bindings
     */
    bindings: {
        currentSelectionChange: '{currentDemo}'
    },


    init: function () {
        // if user is coming to the app without a hash, 
        // then update the hash to trigger router.
        if (!window.location.hash) {
            this.updateHash('demo code structure', 'demoviewmainmain');
        }
        this.preConfiguredView();

        window.addEventListener('copy', this.onClipboardEvent.bind(this));
        window.addEventListener('paste', this.onClipboardEvent.bind(this));
    },


    afterRender: function () {
        var vm = this.getViewModel();
        var store = vm.getStore('nav');

        store.setData(this.getFileInfo());
    },

    /**
     * when the app loads this method will look at url parameters to 
     * determine if certain panels should be hidden or visible.
     * Useful if embedding the demo app in a web page and space is 
     * limited or to help focus the view on a specific section.
     */
    preConfiguredView: function () {
        var vm = this.getViewModel();
        var params = new URLSearchParams(window.location.search || window.location.hash.split('?').pop());

        vm.set('demo', (params.get('demo') == 'false'));
        vm.set('source', (params.get('source') == 'false'));
        vm.set('toolbar', (params.get('toolbar') == 'false'));
        vm.set('navigation', (params.get('navigation') == 'false'));
        vm.set('description', (params.get('description') == 'false'));
    },

    prevDemo: function () {
        var vm = this.getViewModel();
        var store = vm.getStore('nav');
        var total = (store.count() - 1);
        var currentIndex = vm.get('currentIndex') - 1;
        // console.log('prev index:', currentIndex);
        if (currentIndex <= 0) {
            currentIndex = total;
        }
        var nextRecord = store.getAt(currentIndex);
        // vm.set('currentIndex', currentIndex);
        vm.set('currentDemo', nextRecord);
    },
    
    nextDemo: function () {
        var vm = this.getViewModel();
        var store = vm.getStore('nav');
        var total = (store.count() - 1);
        var currentIndex = vm.get('currentIndex') + 1;
        // console.log('next index:', currentIndex);
        if (currentIndex >= total) {
            currentIndex = 0;
        }
        var nextRecord = store.getAt(currentIndex);
        // vm.set('currentIndex', currentIndex);
        vm.set('currentDemo', nextRecord);
    },

    /**
     * Doesn't need to be called directly. If a selection is made via 
     * any process this will get called by the binding event.
     * 
     * @param {Ext.data.Model} record
     * @returns {void}
     */
    currentSelectionChange: function (record) {
        
        /**
         * Don't proceed if the record is empty. This is 
         * for initial load most times.
         */
        if (Ext.Object.isEmpty(record)) return;


        var demoContainer = this.getView().down('#classicDemo');
        var demoSource = this.getView().down('#demoSource');
        var demo;

        /**
         * values extracted from the record
         */
        var {
            className,
            requires,
            categorySlug,
            slug
        } = record.getData();
        
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
                margin: 0,
                frame: false
            });
        }

        /**
         * Remove all items from the component but don't destroy as
         * it has a chain reaction for required classes.
         */
        demoContainer.removeAll(false, false);
        demoContainer.add(demo);
        demoSource.removeAll(true);
        
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
             * Special Condition if the Main view
             * files are getting loaded.
             */
            if (className === 'Demo.view.main.Main' && path.endsWith('data.json')) {

                demoSource.add(Ext.create({
                    xtype: 'code',
                    value: this.getFileInfo(),
                    title: this.fileToTitle(filename),
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

        /**
         * Select the first tab by default
         */
        demoSource.setActiveTab(0);

        var catSlug;
        if (categorySlug.charAt(0) === '-'){
            catSlug = categorySlug.slice(1);
        } else {
            catSlug = categorySlug;
        }

        this.updateHash(catSlug, slug);

        var currentIndex = this.getViewModel().getStore('nav').find('id', record.getId());
        
        console.log('currentIndex:', currentIndex);

        this.getViewModel().get('currentIndex', currentIndex);
    },

    /**
     * When no route is matched just load the main view example
     * 
     * @param {string} token
     * @returns {void}
     */
    onUnmatchedRoute: function (token) {
        this.route('demo code structure', 'demoviewmainmain');
    },

    /**
     * @param {string} category
     * @returns {void}
     */
    routeCategory: function (category) {
        this.route(category, null);
    },

    /**
     * @param {string} category
     * @param {string} demo
     * @returns {void}
     */
    routeDemo: function (category, demo) {
        this.route(category, demo);
    },
    
    /**
     * @param {string} category
     * @param {string} demo
     * @returns {void}
     */
    route: function (category, demo) {
    
        var grid = this.getView().down('#navigation');
        var vm = this.getViewModel();
        var store = vm.getStore('nav');
        var collection = store;
        
        /**
         * Filter nav store to matching categories.
         */
        if (category) {
            collection = store.query('categorySlug', category);
        }
        
        /**
         * Filter nav store to matching demo.
         */
        if (demo) {
            collection = store.query('slug', demo);
        }

        /**
         * If there's not any matches then tell the user. 
         */
        if (!collection.length) {
            Ext.Msg.alert('404', 'The URL was not found. Instead loading the application Main View.');
            return this.onUnmatchedRoute();
        }

        /**
         * Load/Display the top match. 
         */
        var record = collection.first();

        vm.set('currentDemo', record);
        vm.set('currentIndex')

        /**
         * Scroll (and/or expand category group) the grid to the selected demo.
         */
        grid.ensureVisible(record, {
            animate: true,
            select: false,
            highlight: true
        });
    },

    /**
     * Updates the URL hash value.
     * 
     * @param {string} category the category
     * @param {string} demo the demo title
     * @returns {void}
     */
    updateHash: function (category, demo) {
        window.location.hash = `#/${category}/${demo}`;
    },

    /**
     * Copies code to clipboard.
     * 
     * @returns {void}
     */
    copyToClipboard: function () {
        var tabpanel = this.getView().down('#demoSource');
        var activeTab = tabpanel.getActiveTab();
        if (!activeTab) {
            return console.log('No active tab to copy from.')
        }
        var node = activeTab.getEl().dom.querySelector('pre code');
        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(node);

        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand("copy");
    },

    /**
     * Shows a toast for Copy/Paste events
     * 
     * @param {Event} e
     * @returns {void}
     */
    onClipboardEvent: function (e) {
        var message = '';
        switch (e.type) {
            case 'copy':
                message = 'Copied to Clipboard';
                break;
            case 'paste':
                message = 'Paste from Clipboard';
                break;
        }
        Ext.toast(message);
    },

    /**
     * Handles navigation filtering/searching.
     * 
     * @param {Ext.data.field.TextField} field
     * @param {string} newValue
     * @param {string} oldValue
     * @returns {void}
     */
    filterNavigation: function (field, newValue, oldValue) {
        
        var store = this.getViewModel().getStore('nav');

        store.filter({
            disableOnEmpty: true,
            property: 'searchable',
            operator: 'like',
            value: newValue
        });
    },
    
    /**
     * Pass in a filename and if the name contains View, Controller, Model 
     * or Store it returns just that text. If no matches are found returns 
     * the input value as a safety net.
     * 
     * @param {string} filename
     * @returns {string}
     */
    fileToTitle: function (filename) {
        var results = filename.match(/(View|Controller|Model|Store)/g, '');
        if (results) return results.join('');
        return filename;
    },

    /**
     * Converts a string of text to a `url-friendly-string`
     * 
     * @param {string} string
     * @returns {string} slug
     */
    titleToSlug: function (string) {
        return string.toLowerCase().replace(/ +/g, '-').replace(/[^\w-]+/g, '').replace(/[-]+/g, '-');
    },

    /**
     * Generates the file list data used by the navigation from metadata 
     * found in the framework. It might be a bit overwhelming to look at,
     * but just know it's to automatically identify each demo based on the 
     * applications known structure.
     * 
     * @returns {object[]} files
     */
    getFileInfo: function () {

        var files = Object.keys(Ext.ClassManager.classes)
            /**
             * Filter the class list to only the classes with the 
             * namespace of view and exclude all except the views.
             */
            .filter((className) => (new RegExp('Demo.view.').test(className) && !new RegExp('(_|Controller|Model|Store|Raw|Code)').test(className)))
            /**
             * Loop over each and build create some metadata about 
             * each one to be saved as a record in the nav store.
             */
            .map((className, index) => {

                var clazz     = Ext.ClassManager.get(className);
                var aliases   = Ext.ClassManager.getAliasesByName(className);
                var config    = clazz && clazz.prototype ? clazz.prototype.config : null;
                var title     = typeof config.title === 'object' ? className : config.title;
                var demoSlug  = this.titleToSlug(title);
                // where do these come from? The Panel prototype was 
                // modified to add two extra properties.
                var category     = clazz.prototype.category != '' ? clazz.prototype.category : 'Misc.';
                var categorySlug = this.titleToSlug(category);
                var description  = clazz.prototype.description != '' ? clazz.prototype.description : title;
                var xtype        = aliases && aliases.length ? aliases[0].replace('widget.', '') : 'no-xtype';
                var iconCls      = config.iconCls || 'x-fa fa-table';
                var filePath     = Ext.Loader.getPath(className);
                var pathParts    = filePath.split('/');
                var file         = pathParts.pop();
                var folder       = pathParts.join('/');
                var extension    = file.substr(file.lastIndexOf('.') + 1);
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
                requires.push(folder + '/data.json');
        
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
                    searchable: (filePath.split('/').join(' ') + ' ' + title)
                };
                
                return record;
            });

        return files;
    }
});
