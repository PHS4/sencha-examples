Ext.define('Demo.view.speadsheetlocking.SpreadsheetLockingStore', {
    extend: 'Ext.data.Store',
    alias: 'store.spreadsheetlockingstore' ,

    model: 'Demo.view.speadsheetlocking.SpreadsheetLockingStoreModel',
    // alias: 'store.monthlysales',

    data: (function () {
        var data = [],
            thisYear = new Date().getYear() + 1900,
            mod = 0x7fffFFFF,
            // return integer [min,max)
            rand = function (min, max) {
                var r = (seed = ((seed * 214013) + 2531011) % mod) / mod; // [0, 1)

                return Math.floor(r * (max - min)) + min;
            },
            seed = 13,
            year;

        for (year = 1900; year <= thisYear; ++year) {
            data.push([
                year, // id
                year,
                rand(-10, 100),
                rand(-10, 100),
                rand(-10, 200),
                rand(-10, 200),
                rand(-10, 200),
                rand(-10, 300),
                rand(-10, 300),
                rand(-10, 300),
                rand(-10, 600),
                rand(-10, 500),
                rand(-10, 200),
                rand(-10, 100)
            ]);
        }

        return data;
    }())
});