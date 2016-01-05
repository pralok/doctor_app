Ext.define('WireFrameOne.store.NotificationStore',{
    extend : 'Ext.data.Store',
    requires : ['WireFrameOne.model.NotificationModel','Ext.data.proxy.Rest'],
    alias : 'store.notificationStore',
    config : {
        storeId : 'notificationStore',
        model : 'WireFrameOne.model.NotificationModel',
        autoLoad : true
        /*,
        proxy : {
            url : 'notifications.json',
            type : 'rest',
            method : 'POST',
            reader : {
                type : 'json',
                rootProperty : 'notifications'
            }
        }
        */
    },
    initialize : function(){
      console.log('====creating store=====');
    }
})
