$('document').ready(function(){
    $('#send_button').click(function(){
        let form = $('form').serializeArray();
        console.log(form);
        console.log(form[2].value);
        window.open(`mailto:christopher876543@gmail.com?subject=${form[1].value}&body=${form[2].value}`);
    })
})