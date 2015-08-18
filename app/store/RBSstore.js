Ext.define('WireFrameOne.store.RBSstore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.ReportModel'],
    alias : 'store.RBSstore',
    config : {
        storeId : 'RBSstore',
        model : 'WireFrameOne.model.ReportModel',
        filters : { property : "type", value : "type4"},
        autoLoad : true
    }
})
