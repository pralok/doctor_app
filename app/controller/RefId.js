Ext.define('WireFrameOne.controller.RefId',{
    extend : 'Ext.app.Controller',
    config : {
        stores : ['SessionStore']
    },
    passRefId : function(){
        var mySessionStore = Ext.getStore('SessionStore');
        var myRefId = mySessionStore.getAt(0).getData().refID;
        return myRefId;
    }
});
