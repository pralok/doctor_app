onViewPatients = function(){
  Ext.Viewport.hideMenu('left');

  var me = this;
  me.passRefID('PatientStore');
  Ext.create('WireFrameOne.view.patients.PatientList');

  /*
  if( this.getPatientList() === undefined) {
    me.passRefID('PatientStore');
    Ext.create('WireFrameOne.view.patients.PatientList');
  }
  */
  var PatientList = this.getPatientList();
  this.changeView(PatientList);
}
