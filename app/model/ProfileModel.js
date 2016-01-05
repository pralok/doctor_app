Ext.define('WireFrameOne.model.ProfileModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['userID','name', 'degrees', 'specialities','address','contact'],
        proxy  : {
            url : 'UserInfo.json',
            type : 'ajax',
            reader : {
                type : 'json',
                rootProperty : 'profile'
            }
        }
    }
})