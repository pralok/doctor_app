Ext.define('WireFrameOne.store.DBPstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.ReportModel'],
    alias : 'store.DBPstore',
    config : {
        storeId : 'DBPstore',
        model : 'WireFrameOne.model.ReportModel',
        filters : { property : "type", value : "type6"},
        autoLoad : true
    }
})
