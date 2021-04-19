

    let fireCheck=0;
    let petCheck=0;
    $("#fire").click(function(){
        fireCheck = 1; 
    });
    $("#pet").click(function(){
        petCheck = 1;
    });
    $('#data_submit').click((event) => {
        event.preventDefault()
        var pattern=5;
        if($('#house_type').val()=="0")
        {
            pattern=0;
        }
        else if($('#house_type').val()=="1")
        {
            pattern=1;
        }
        else if($('#house_type').val()=="2,3,4")
        {
            var str=$('input[name=type]').val();
            var str1=str.indexOf('衛');
            var str2=str.indexOf('套');
            var str3=str.indexOf('雅');
            if( (str1!=-1 || str2!=-1) && str3!=-1)
            {
                pattern=2;
            }
            else if(str3!=-1)
            {
                pattern=3;
            }
            else{
                pattern=4;
            }
            
        }

        console.log($('#T2').val(),);

        $.get('/upload_house', {
            house_type: pattern,
            address: $('input[name=address]').val(),
            type: $('input[name=type]').val(),
            price:$('input[name=price]').val(),
            fire:fireCheck,
            pet:petCheck,
            house_info:$('#house_info').val(),
            picture:$('#T2').val(),

          }, (data) => {
            console.log(data)
            alert('上傳成功')
          })
    })


    $("#clear_btn").click(function(){
      
        $("#region").val(0);
        $("#house_type").val("不限");
        $('input[name=address]').val(""); 
        $('input[name=type]').val("");
        $('input[name=price]').val("");
        $('#house_info').val(""),
        $("#fire").attr("checked", false);
        $("#pet").attr("checked", false);

    });
