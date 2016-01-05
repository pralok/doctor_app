Ext.define('WireFrameOne.view.patients.PatientInfo',{
    extend : 'Ext.form.Panel',
    requires : ['Ext.Toolbar','Ext.Img','Ext.field.Text','Ext.field.TextArea'],
    xtype : 'patInfo',
    config :{
        fullscreen : true,
        scrollable : true,
        items : [{
            xtype: 'toolbar',
            items: [{
                xtype: 'spacer'
            },{
                xtype: 'button',
                //align: 'right',
                text: 'close',
                ui: 'decline',
                action: 'hide'
            }]
        },{
            itemId: 'PatientImage',
            xtype: 'img',
            src: 'user.jpeg',
            width: '200px',
            height: '200px',
            style: 'margin: auto;margin-top:15px;margin-bottom:15px;'
        },{
            xtype: 'textfield',
            label: 'Name',
            name: 'name',
            readOnly : true
        }, {
            xtype: 'textfield',
            label: 'Age',
            name: 'age',
            readOnly : true
        },{
            xtype: 'textareafield',
            label: 'Address',
            name: 'address',
            readOnly : true
        }, {
            xtype: 'textfield',
            label: 'Contact',
            name: 'contact',
            readOnly : true
        }]
    }
})