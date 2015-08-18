Ext.define('WireFrameOne.store.SessionStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.UserSession'],
    config : {
        storId : 'SessionStore',
        model : 'WireFrameOne.model.UserSession',
        autoLoad : true
    }
});
