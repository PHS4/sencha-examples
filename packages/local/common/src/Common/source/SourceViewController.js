/**
 * https://docs.sencha.com/extjs/7.3.1/classic/Ext.app.ViewController.html
 */
Ext.define('Common.ux.source.SourceViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sourceviewcontroller',
    
    collectSourceFiles: function () {
        const sourceFiles = this.getView().down('grid').getStore().getData();

        const files = [
            { text: 'index.html', type: 'html' }
        ];

        return files;
    },

    /**
     * takes the file path and extracts the extension to help 
     * with syntax highlighting.
     */
    getFileType: function (ext) {
        switch (ext) {
            case 'xml':
            case 'html':
                return 'html';
            case 'js':
                return 'javascript';
            case 'css':
                return 'css';
            case 'scss':
                return 'scss';
            case 'txt':
            default:
                return 'plaintext'
                // return ext.replace('.', '');
        }
    },

    /**
     * Loads the text of the file into the Source View.
     * @param {*} btn 
     */
    changeSource: function(grid, record) {
        
        var file = record.get('path');
        var language = this.getFileType(record.get('extension'));
        
        /**
         * Show a mask while loading the file to be displayed
         */
        this.getView().mask('Loading');

        /**
         * Update the Window title
         */
        this.getView().setTitle('View Source - ' + file);

        // FYI: Using fetch here because Ext.Ajax.request was
        // being too aware of what was getting loaded.
        //
        fetch(file)
            .then(res => res.text())
            .then(data => {
                this.getView().down('code').setLanguage(language);
                this.getView().down('code').setValue(data);
                this.getView().unmask();
                this.wrapDocLinks();
            })
            .catch(err => {
                Ext.Msg.alert('Error', err.message);
                this.getView().down('code').setValue('//' + err.message);
                this.getView().unmask();
            });
    },

    /**
     * looks for all elements with a comment class and wraps the url in a `a` tag
     * to make clickable.
     */
    wrapDocLinks: function() {

        // find all the elements marked as comments 
        var commentBlocks = document.querySelectorAll('#' + this.getView().getId() + ' code .token.comment');

        // this could probably be shorter but just found it somewhere online.
        var regex = /(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)(?:\.(?:[a-z\x{00a1}\-\x{ffff}0-9]+-?)*[a-z\x{00a1}\-\x{ffff}0-9]+)*(?:\.(?:[a-z\x{00a1}\-\x{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?/ig;

        // for each one 
        commentBlocks.forEach(commentBlock => {
            // when the comment block contains a url then wrap so it's clickable.
            if (regex.test(commentBlock.textContent)) {
                commentBlock.innerHTML = commentBlock.innerHTML.replace(regex, function(url, args) {
                    return `<a class="docs-link" target="_blank" href="${url}">${url}</a>`;
                });
            }
        });
    }
});