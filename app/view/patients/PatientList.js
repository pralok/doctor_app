Ext.define('WireFrameOne.view.patients.PatientList',{
    extend : 'Ext.Panel',
    requires: ['WireFrameOne.view.ToolBar','Ext.dataview.List','WireFrameOne.store.PatientStore'],
    xtype : 'patientlist',
    config : {
        fullscreen : true,
        items : [{
            xtype : 'toolbarmenu',
            title : 'Patient List'
        },{
            xtype : 'list',
            itemId : 'Patients',
            height : '100%',
            itemTpl : '{pName} <div class="record {flag}"></div>',
            store : 'PatientStore',
            grouped : true,
            indexBar : true
        }]
    },
    initialize : function(){
        console.log('created patient listview');
    }
})
