Ext.define('WireFrameOne.store.ProfileStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.ProfileModel'],
    alias : 'store.profileStore',
    config : {
        storeId : 'profileStore',
        model : 'WireFrameOne.model.ProfileModel',
        autoLoad : true
    }
})