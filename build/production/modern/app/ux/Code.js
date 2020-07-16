Ext.define('Demo.ux.Code', {
    extend: 'Ext.Panel',
    alias: 'widget.code',

    scrollable: true,

    html: '',

    layout: 'fit',

    config: {

        url: null,

        value: null,

        filename: null,

        file: null,

        language: 'json',

    },

    initialize: function () {

        var me = this;
        Ext.apply(me, {});

        me.callParent(arguments);

        if (me.config.url) {
            me.load();
        } else if (me.value) {
            me.setValue(me.value);
        } else {
            me.setValue('// No Data');
        }
    },

    clear: function () {
        this.setHtml('');
    },

    setValue: function (value) {

        this.value = value;

        var lang = this.getLanguage();

        var text;

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
            this.setBodyStyle('background-color: white;');
            this.setHtml(
                '<div class="rendered-markdown" style="user-select: text; padding: 10px; background-color: white;">' +
                text +
                '</div>'
            );
        } else {
            this.setBodyStyle('background-color: #272822;');
            this.setHtml(
                '<pre>' +
                '<code style="user-select: text; width: 100%; height: 100%;" class="code-block language-' + lang + '">' +
                text +
                '</code>' +
                '</pre>'
            );
        }

        this.highlight();
    },

    highlight: function () {

        var dom = this.el && this.el.dom;

        if (!dom) return;

        var code = Ext.dom.Query.select('code, .rendered-markdown');

        if (this.getLanguage() == 'markdown') {
            Prism.highlightAllUnder(this.el.dom.querySelector('.rendered-markdown'));
        } else {
            Prism.highlightAll(code);
        }
    },

    renderMarkdown: function (text) {

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

    convertHTML: function (str) {
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

    getFileExtension() {
        var path = this.getUrl();

        if (!path) return;
        return path.substr(path.lastIndexOf('.') + 1);
    },

    getFileType: function (ext) {
        ext = this.getFileExtension();
        switch (ext) {
            case 'xml':
                return 'xml';
            case 'html':
                return 'html';
            case 'json':
            case 'js':
            case 'javascript':
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

    // /**
    //  * Loads the text of the file into the Source View.
    //  * @param {*} btn 
    //  */
    load: function () {
        // console.log(arguments.callee.name);
        this.clear();
        var path = this.getUrl();
        var file = path.split('/').pop();
        var language = this.getFileType(file.substr(file.lastIndexOf('.') + 1));

        /**
         * Show a mask while loading the file to be displayed
         */
        this.mask('Loading');

        /**
         * Update the Window title
         */

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