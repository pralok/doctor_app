Ext.define('WireFrameOne.store.PPGstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.ReportModel'],
    alias : 'store.PPGstore',
    config : {
        storeId : 'PPGstore',
        model : 'WireFrameOne.model.ReportModel',
        filters : { property : "type", value : "type3"},
        autoLoad : true
    }
})
