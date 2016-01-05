Ext.define('WireFrameOne.model.PatientModel',{
    extend : 'Ext.data.Model',
    config : {
        fields : ['patientId','img','pName','pAge','Address','Contact','flag']

        /*
        proxy : {
            url : 'patientData.json',
            type : 'ajax',
            reader : {
                type : 'json',
                rootProperty : 'data'
            }
        }
        */
    },
    initialize : function(){
        console.log('loading store');
    }
})
