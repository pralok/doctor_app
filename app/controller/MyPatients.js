Ext.define('WireFrameOne.controller.MyPatients',{
    extend : 'Ext.app.Controller',
    config : {
        views : ['WireFrameOne.view.patients.PatientList','WireFrameOne.view.patients.PatientDetails',
        'WireFrameOne.view.patients.PatientInfo'],
        refs : {
            patientListView : 'patientlist',
            patientlist : 'patientlist #Patients',
            patientDetailsView : 'PatientDetails',
            patientInfo : 'PatientDetails toolbar button[action="show"]',
            patientInfoView : 'patInfo',
            patientInfoHideButton : 'patInfo toolbar button[action="hide"]',
            backToPatientList : 'PatientDetails toolbar button[action="back"]'
        },
        control : {
            patientlist : {
                itemtap : 'onPatientTap'
            },
            patientInfo : {
                tap : 'onPatientInfo'
            },
            backToPatientList : {
                tap : 'onBackToList'
            },
            patientInfoHideButton : {
                tap : 'onPatientInfoHide'
            }
        }
    },
    onPatientTap : function(btn, index, target, record){
        Ext.Viewport.hideMenu('left');

        var details = Ext.create('WireFrameOne.view.patients.PatientDetails');
        Ext.Viewport.animateActiveItem(details,{
            type : 'slide',
            direction : 'left'
        })
    },
    onBackToList : function(){
        var ListView = this.getPatientListView();
        Ext.Viewport.animateActiveItem(ListView,{
            type : 'slide',
            direction : 'right'
        })
    },
    onPatientInfo: function () {

        // create view
        Ext.create('WireFrameOne.view.patients.PatientInfo');

        //get patient info data and set values
        var PatInfoData = this.getPatientlist().getLastFocused().getData();
        var Name = PatInfoData.pName;
        var Age = PatInfoData.pAge;
        var Address = PatInfoData.Address;
        var Contact = PatInfoData.Contact;
        var img = PatInfoData.img;

        var InfoView = this.getPatientInfoView();
        InfoView.down('img').setSrc(img);
        InfoView.down('textfield[label="Name"]').setValue(Name);
        InfoView.down('textfield[label="Age"]').setValue(Age);
        InfoView.down('textfield[label="Address"]').setValue(Address);
        InfoView.down('textfield[label="Contact"]').setValue(Contact);

        //change view
        Ext.Viewport.animateActiveItem(InfoView,{
                direction: 'up',
                type: 'slide'
            }
        );
    },
    onPatientInfoHide : function(){
        var DetailView = this.getPatientDetailsView();
        Ext.Viewport.animateActiveItem(DetailView,{
            direction : 'down',
            type : 'slide'
        });
    }
})
