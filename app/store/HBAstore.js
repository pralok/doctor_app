Ext.define('WireFrameOne.store.HBAstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.ReportModel'],
    alias : 'store.HBAstore',
    config : {
        storeId : 'HBAstore',
        model : 'WireFrameOne.model.ReportModel',
        filters : { property : "type", value : "type1"},
        autoLoad : true
    }
})
