Ext.define('WireFrameOne.store.FBGstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.ReportModel'],
    alias : 'store.FBGstore',
    config : {
        storeId : 'FBGstore',
        model : 'WireFrameOne.model.ReportModel',
        filters : { property : "type", value : "type2"},
        autoLoad : true
    }
})
