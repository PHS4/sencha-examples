Ext.define('Common.ux.Code', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.code',

    scrollable: true,

    html: '',
        // '<pre style="width: 100%; height: 100%; margin: 0;">' + 
        //     '<code style="width: 100%; height: 100%;" class="code-block language-json"></code>' +
        // '</pre>',

    cls: 'x-selectable',

    layout: 'fit',

    config: {

        url: null,

        value: null,

        filename: null,

        file: null,

        language: 'json'
    },

    initComponent: function() {
        var me = this;
        Ext.apply(me, {});

        me.callParent(arguments);
        me.on('afterrender', me.onAfterRender, me);
        this.highlight();
    },

    onAfterRender: function() {
        var me = this;

        if (me.url) {
            me.load();
        } else if (me.value) {
            me.setValue(me.value);
        } else {
            me.setValue('// No Data');
        }
    },
    
    loadData: function(callback) {
        // console.log(arguments.callee.name);
        
        this.clear();

        Ext.Ajax.request({
            url: this.getUrl(),
            scope: this,
            cors: true,
            success: function(res) {
                var data = JSON.parse(res.responseText);
                var text = res.responseText == '' ? '' : JSON.stringify(data, null, 4);

                this.setValue(text);

                if (typeof callback === 'function') {
                    callback(true, data);
                }
            },
            failure: function() {
                this.setValue('// Error Loading Data...');
                if (typeof callback === 'function') {
                    callback(false, null);
                }
            }
        });
    },

    clear: function() {
        this.setHtml('');
    },

    setValue: function(value) {
        
        this.value = value;

        var lang = this.getLanguage();
        var text;
        
        console.log('language:', lang);

        if (typeof this.value == 'object') {
            text = JSON.stringify(this.value, null, 4);
        } else if (lang == 'html') {
            text = this.convertHTML(this.value);
        } else if (lang == 'markdown') {
            text = this.renderMarkdown(this.value);
        } else {
            text = value;
        }

        if (lang == 'markdown') {
            this.setBodyStyle('background-color', 'white');
            this.setHtml(
                '<div class="rendered-markdown" style="padding: 10px; background-color: white;">' +
                    text +
                '</div>'
            );
        } else {
            this.setBodyStyle('background-color', '#2d2d2d');
            this.setHtml(
                '<pre style="margin: 0;">' +
                    '<code style="width: 100%; height: 100%;" class="code-block language-' + lang + '">' +
                        text +
                    '</code>' +
                '</pre>'
            );
        }

        this.highlight();
    },

    highlight: function() {
        
        var dom = this.el && this.el.dom;
        if (!dom) return;
        
        var code = this.el.dom.querySelector('code, .rendered-markdown');
        
        if (this.getLanguage() == 'markdown') {
            Prism.highlightAllUnder(this.el.dom.querySelector('.rendered-markdown'));
        } else {
            Prism.highlightElement(code);
           // this.wrapDocLinks();
        }
    },
    
    renderMarkdown: function (text) {
        // console.log(arguments.callee.name);
        // cdn.jsdelivr.net/highlight.js/9.1.0/styles/github.min.css (optional css)
        if (!markdownit) {
            return console.warn(`
                The markdown renderer requires a third party js file.
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/10.0.0/markdown-it.min.js"></script>
            `);
        }
        var md = markdownit();
        return md.render(text);
    },

    convertHTML: function(str) {
        // console.log(arguments.callee.name);
        // Use Object Lookup to declare as many HTML entities as needed.
        const htmlEntities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        };
        // Use map function to return a filtered str with all entities changed automatically.
        return str
            .split("")
            .map(entity => htmlEntities[entity] || entity)
            .join("");
    },

    /**
     * looks for all elements with a comment class and wraps the url in a `a` tag
     * to make clickable.
     */
    wrapDocLinks: function () {
        // console.log(arguments.callee.name);

        // find all the elements marked as comments 
        var commentBlocks = document.querySelectorAll('#' + this.getId() + ' code .token.comment');

        // this could probably be shorter but just found it somewhere online.
        var regex = /(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?/ig;
		//console.log(commentBlock.textContent)
        // for each one 
        commentBlocks.forEach(commentBlock => {
            // when the comment block contains a url then wrap so it's clickable.
            if (regex.test(commentBlock.textContent)) {
                commentBlock.innerHTML = commentBlock.innerHTML.replace(regex, function (url, args) {
                    return `<a class="docs-link" target="_blank" href="${url}">${url}</a>`;
                });
            }
        });
    },

    getFileExtension() {
        var path = this.getUrl();
        if (!path) return;
        return path.substr(path.lastIndexOf('.') + 1);
    },
    
    extToLanguage: function (ext) {
        ext = ext || this.getFileExtension();
        console.log('extionsion:', ext);
        switch (ext) {
            case 'xml':
                return 'xml';
            case 'html':
                return 'html';
            case 'json':
            case 'js':
                return 'javascript';
            case 'ts':
                return 'typescript';
            case 'css':
                return 'css';
            case 'scss':
                return 'scss';
            case 'md':
            case 'markdown':
                return 'markdown';
            case 'txt':
                return 'plaintext'
            default:
                return ext;
        }
    },

    /**
     * Loads the text of the file into the Source View.
     * @param {*} btn 
     */
    load: function () {

        var path = this.getUrl();
        var file = path.split('/').pop();
        var language = this.extToLanguage(file.substr(file.lastIndexOf('.') + 1));

        /**
         * Show a mask while loading the file to be displayed
         */
        this.mask('Loading');

        // FYI: Using fetch here because Ext.Ajax.request was
        // being too aware of what was getting loaded.
        //
        fetch(path)
            .then(res => {
                if (res.status === 404) {
                    return '// Nothing to Display';
                }
                return res.text();
            })
            .then(data => {
                this.setLanguage(language);
                this.setValue(data);
                this.unmask();
            })
            .catch(err => {
                if (this.renderered) {
                    this.setValue('//' + err.message);
                    this.unmask();
                }
            });
    }
});