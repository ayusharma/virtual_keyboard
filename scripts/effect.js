//javascript document
//alert($('.second_table tr:nth-child(1) td:nth-child(1)').text());
$('document').ready(function(){
    var str =0;
    $('#keyboard').click(function(){
        if(str==0){
            $('.key').animate({top:0},500);
            str = 1;
        }
        else {
            $('.key').animate({top:-174},500);
            str=0
        }
    });
});

//keyboard inside functionalities
$('document').ready(function(){
    var strt = 2;
   $('.second_table tr:nth-child(4) td:nth-child(10)').click(function(){
       if(strt==2){
            $(this).css('background-color','#D05603');
            $('.second_table tr td').css('text-transform','uppercase');
            strt=3;
        } 
        else {
            $(this).css('background-color','#333');
            $('.second_table tr td').css('text-transform','lowercase');
            strt=2;
        }
    });
    //keyboard inputs to form values
    var string= $('#password').val();
    $('.second_table tr td').click(function(){
        if($(this).text()=='del' || $(this).text()=='DEL') {
            var count =$('#password').val().length;
            var ch_replace = $('#password').val();
            var replace = ch_replace.substring(0,count-1);
            string = replace;

        }else if(strt == 3){
                 if($(this).text()=='caps' || $(this).text()=='CAPS') {
                        var count =$('#password').val().length;
                        var ch_replace = $('#password').val();
                        string = ch_replace;
                }   
                else {
                        var temp = $(this).text();
                        string = string+temp.toUpperCase();
                }
        }
        else {
            if($(this).text()=='caps' || $(this).text()=='CAPS') {
                        var count =$('#password').val().length;
                        var ch_replace = $('#password').val();
                        string = ch_replace;
                }   
                else {
                        var temp = $(this).text();
                        string = string+temp;
                }
        }
        $('#password').val(string);
    });
});

//to unhide the password 

$('document').ready(function(){
    $('#button').mouseenter(function(){
        $('#password').attr('type','text');
    }).mouseleave(function(){
         $('#password').attr('type','password');
    });
});

//alert($('.first_table').height());