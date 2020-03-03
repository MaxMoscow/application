var i;
var xhr;
var html          = '';
var show          = true;
var pickerOptions =
{
yearSuffix:        '',
dateFormat:        'dd.mm.yy 00:00:00',
timeFormat:        'hh:mm:ss',
prevText:          'Предыдущий',
nextText:          'Следующий',
currentText:       'Сегодня',
monthNames:      [ 'Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь' ],
dayNamesMin:     [ 'Вс','Пн','Вт','Ср','Чт','Пт','Сб' ],
mask:              '99.99.9999 99:99:99',
showOn:            'both',
buttonText:        'Выберите дату',
buttonImage:       '/images/calendar.png',
showAnim:          'fadeIn',
showMonthAfterYear: false,
showOtherMonths:    true,
selectOtherMonths:  true,
buttonImageOnly:    true,
firstDay:           1
};

function hMenuDraw ( Menu, Admin )
{
for ( i=0; i<Menu.length; i++ )
    {
    if  ( Menu[i][0] == '' && Menu[i+1] )
        html += '<div class="hLine"></div>';
    else
        {
        if  ( Menu[i][1] == 0 )
            {
            hMenuCreateItem('hL0',Admin);
            html += '<div class="hB1">';
            }
        if  ( Menu[i][1] == 1 && Menu[i][0] != '' )
            {
            if  ( Menu[i+1] && Menu[i+1][1] == 2 )
                {
                hMenuCreateItem('hL12',Admin);
                if  ( Menu[i][2] > 0 ) { show = true;  html += '<div class="hB2">'; }
                else                   { show = false; html += '</div>'; }
                }
            else
                {
                hMenuCreateItem('hL1',Admin);
                html += '</div>';
                }
            if  ( Menu[i+1] && Menu[i+1][1] == 0 ) html += '</div></div>';
            }
        if  ( Menu[i][1] == 2 && Menu[i][0] != '' && show )
            {
            hMenuCreateItem('hL2',Admin);          html += '</div>';
            if  ( Menu[i+1] && Menu[i+1][1] == 1 ) html += '</div></div>';
            if  ( Menu[i+1] && Menu[i+1][1] == 0 ) html += '</div></div></div></div>';
            }
        }
    }
    $('#hMenu').html ( html );
}
function hMenuCreateItem ( Class, Admin )
{
if  ( Menu[i][2] < 0 )
    {
    html += '<div class="hL' + Menu[i][1] + 'h">';
    html += Menu[i][0];
    }
if  ( Menu[i][2] > 0 )
    {
    html += '<div class="' + Class +  '">';
    if ( Class != 'hL0' ) html += '<a href="' + Menu[i][3] + '" class="hL' + Menu[i][1] + 'a"><div>' + Menu[i][0] + '</div></a>';
    else                  html += Menu[i][0];
    }
}
function vMenuDraw ( vMenu )
{
    for ( i=0; i<vMenu.length; i++ )
        {
        if  ( vMenu[i][1] == 0 )
            {
            html += '<div class="vL0"><div class="vLa"';
            if  ( vMenu[i+1] && vMenu[i+1][1] == 1 ) html += ' onclick=ShowHide(\'id'+(i+1)+'\')';
            html += '>' + vMenu[i][0] + '</div>';
            }
        if  ( vMenu[i][1] == 1 && vMenu[i][0] != '' )
            {
            if  ( vMenu[i-1] && vMenu[i-1][1] == 0 ) html += '<div id="id'+i+'" style="display:block;">';
            html += '<div class="vL1"';
            if  ( vMenu[i+1] && vMenu[i+1][1] == 2 ) html += ' onClick=ShowHide("id'+(i+1)+'")';
            html += '><a href="' + vMenu[i][3] + '" class="vLa">' + vMenu[i][0] + '</a></div>';
            }
        if  ( vMenu[i+1] && vMenu[i+1][1] == 0 ) html += '</div></div>';
        }
    $('#vMenu').html ( html );
}
function ShowHide ( n )
{
    if  ( n.data ) n = n.data.p;
    $(n).toggle();
    return false;
}
function getStatus ( status, mode )
{
    img = '/images/status_unknown.gif';
    if  ( mode == 2 )
        {
        if  ( status==0  ) img = '/images/status_normal.gif';
        if  ( status==1  ) img = '/images/status_info.gif';
        if  ( status==2  ) img = '/images/status_minor.gif';
        if  ( status==4  ) img = '/images/status_critical.gif';
        if  ( status==8  ) img = '/images/status_info.gif';
        if  ( status==16 ) img = '/images/status_info.gif';
        if  ( status==32 ) img = '/images/status_normal.gif';
        }
    else
    if  ( mode == 1 )
        {
        if  ( status==1 ) img = '/images/status_normal.gif';
        if  ( status==2 ) img = '/images/status_critical.gif';
        if  ( status==6 ) img = '/images/status_minor.gif';
        if  ( status==8 ) img = '/images/status_info.gif';
        }
    else
        {
        if  ( status>0  ) img = '/images/status_critical.gif';
        if  ( status==0 ) img = '/images/status_normal.gif';
        }
    return '<img src="' + img + '">';
}
function Pager ( p )
{
var list = params.split(',');
    if  ( p.data ) p = p.data.p;
    if  ( p == 0 ) list[0] = 1;
    if  ( p == 1 ) if ( list[0]>1     ) list[0]--;
    if  ( p == 2 ) list[0] = $('#pager-2').val();
    if  ( p == 3 ) if ( list[0]<pages ) list[0]++;
    if  ( p == 4 ) list[0] = pages;
    $('#pager-2').val ( list[0] );
    $('#pager-2').focus();
    $('#wait').width ( $('#list').width() );
    $('#wait').show();
    params = list.join ( ',' );
    $.post ( url + params, null, outputList, 'json' );
    return false;
}
function sendFile ( event )
{
    event.preventDefault();
    event.stopPropagation();
    if  ( event.originalEvent.dataTransfer.files )
        {
        $('#wait').show();
        files = event.originalEvent.dataTransfer.files;
        file  = files[0];
        fData = new FormData();
        xhr   = new XMLHttpRequest();
        xhr.open             ( 'post',        '/service/upload' , true      );
        xhr.onreadystatechange = stateChange;
        xhr.setRequestHeader ( 'X-File-Name', encodeURIComponent(file.name) );
//      fData.append         ( 'file',        file                          );
//      xhr.send             ( fData );
        xhr.send             ( file  );
        }
}
function stateChange ( event )
{
    if  ( xhr.readyState == 4 && xhr.status == 200 ) Pager ( 0 );
    $('#file').val ( null );
}
function init()
{
var list =
    $('<div>',   {'class':'list'}                                  ).appendTo('#content');
    $('<div>',   {'id':'wait'}                                     ).appendTo(list);
    $('<table>', {'id':'list'}                                     ).appendTo(list);
    $('<div>',   {'id':'add','class':'center' }                    ).appendTo(list);
    $('<input>', {'id':'filter-1',type:'button',value:'Поиск'}     ).appendTo('#filter').click ( {'p':'#filter-3'}, ShowHide );
    $('<input>', {'id':'filter-2',type:'text',disabled:'disabled'} ).appendTo('#filter');
    $('<span>',  {'class':'ui-icon ui-icon-seek-first'}            ).appendTo('#pager').click  ( {'p':0}, Pager );
    $('<span>',  {'class':'ui-icon ui-icon-seek-prev'}             ).appendTo('#pager').click  ( {'p':1}, Pager );
    $('<input>', {'id':'pager-2',type:'text'} ).appendTo('#pager'  ).change                    ( {'p':2}, Pager );
    $('<span>',  {'class':'ui-icon ui-icon-seek-next'}             ).appendTo('#pager').click  ( {'p':3}, Pager );
    $('<span>',  {'class':'ui-icon ui-icon-seek-end'}              ).appendTo('#pager').click  ( {'p':4}, Pager );
    $('.datePicker').datepicker ( pickerOptions );
    Pager ( 0 );
}
function YesNo ( url )
{
    if  ( confirm('Вы уверены?') ) window.location = url;
    return true;
}
