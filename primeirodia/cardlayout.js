Ext.onReady(function() {

    var handleNav = function(btn) {
        var activeItem   = myWin.layout.activeItem;
        var index        = myWin.items.indexOf(activeItem);
        var numItems     = myWin.items.getCount();
        var indicatorEl  = Ext.getCmp('indicator').el;

        if (btn.text == 'Forward' && index < numItems - 1) {
            index++;
            myWin.layout.setActiveItem(index);
            index++;
            indicatorEl.update(index + ' of ' + numItems);
        }
        else if (btn.text == 'Back' && index > 0) {
            myWin.layout.setActiveItem(index - 1);
            indicatorEl.update(index + ' of ' + numItems);
        }
    };

    var myWin = Ext.create('Ext.window.Window', {
        height       : 200,
        width        : 300,
        autoScroll   : true,
        id           : 'myWin',
        title        : 'A Window with a Card layout',
        layout       : 'card',
        activeItem   : 0,
        defaults     : { border : false },
        items        : [
            {
                xtype       : 'form',
                title       : 'General info',
                bodyStyle   : 'padding: 5px',
                defaultType : 'field',
                layout      : {
                    type : 'anchor'
                },
                defaults : {
                    labelWidth  : 50
                },
                items       : [
                    {
                        fieldLabel : 'Name',
                        anchor     : '-10'
                    },
                    {
                        xtype      : 'numberfield',
                        fieldLabel : 'Age',
                        width      : 100
                    },
                    {
                        xtype      : 'combo',
                        fieldLabel : 'Location',
                        anchor     : '-10',
                        store      : [ 'Here', 'There', 'Anywhere' ]
                    }
                ]
            },
            {
                xtype  : 'panel',
                title  : 'Bio',
                layout : 'fit',
                items  : {
                    xtype     : 'textarea',
                    emptyText : 'Tell us about yourself'
                }
            },
            {
                title : 'Congratulations',
                html  : 'Thank you for filling out our form!'
            }
        ],
        dockedItems : [
            {
                xtype : 'toolbar',
                dock  : 'bottom',
                items : [
                    {
                        text    : 'Back',
                        handler : handleNav
                    },
                    '-',
                    {
                        text    : 'Forward',
                        handler : handleNav
                    },
                    '->',
                    {
                        xtype  : 'box',
                        id     : 'indicator',
                        style  : 'margin-right: 5px',
                        autoEl :  {
                            tag  : 'div',
                            html : '1 of 3'
                        }
                    }

                ]
            }
        ]

    });

myWin.show();
});