Ext.define('WireFrameOne.store.NewsStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.NewsModel'],
    alias : 'store.newsStore',
    config : {
        storeId : 'newsStore',
        model : 'WireFrameOne.model.NewsModel',
        autoLoad : true
    }
})