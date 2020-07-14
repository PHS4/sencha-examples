Object.keys(Ext.ClassManager.classes)
    .filter(className => (new RegExp('Demo.view.').test(className) && !new RegExp('(_|Controller|Model|Store|Raw|Code)').test(className)))
    .map((className, index) => {
        return { 
            [className]: { 
                requires: Object.keys(Demo.view[className.split('.')[2]]).map(cls => {
                    return Ext.Loader.getPath(`Demo.view.${cls}`);
                })
            }
        }
    });