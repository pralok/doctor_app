Ext.define('WireFrameOne.store.MessageStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.MessageModel','Ext.data.proxy.Rest'],
    alias : 'store.messageStore',
    config : {
        storeId : 'messageStore',
        model : 'WireFrameOne.model.MessageModel',
        autoLoad : true,
        proxy : {
          type : 'localstorage'          
        }
    },
    initialize : function(){
      console.log('====creating store=====');
    }
})


/*
url : 'messages.json',
type : 'rest',
method : 'POST',
reader : {
    type : 'json',
    rootProperty : 'messages'
}

*/
