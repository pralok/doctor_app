Ext.define('WireFrameOne.model.UserSession',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['SessionStatus', 'refID'],
        proxy : {
            type : 'localstorage'
        }
    }
});