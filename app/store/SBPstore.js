Ext.define('WireFrameOne.store.SBPstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.ReportModel'],
    alias : 'store.SBPstore',
    config : {
        storeId : 'SBPstore',
        model : 'WireFrameOne.model.ReportModel',
        filters : { property : "type", value : "type5"},
        autoLoad : true
    }
})
