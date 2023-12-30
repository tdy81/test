$(document).ready(function(){

    $('button').click(function (e){
        e.preventDefault();

        var r = $('#input').val();

        if(r === '435') {
            console.log('ok')

            $('#output').show()
        }
        else {
            console.log('ko')
        }
    })

});