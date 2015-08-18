Ext.define('WireFrameOne.store.PatientStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.PatientModel'],
    config : {
        storeId: 'PatientStore',
        model : 'WireFrameOne.model.PatientModel',
        autoLoad : true,
        grouper: {
            groupFn: function(record) {
                return record.get('pName')[0].toUpperCase();
            },
            sortProperty: 'pName'
        },
        sorters: {
            property: 'pName',
            direction: 'ASC'
        }
    }
})