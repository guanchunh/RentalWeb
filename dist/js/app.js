$(document).ready(function() {
      $('#sign_btn').click((event) => {
        event.preventDefault()
        $.get('/register_test', {
          username: $('#signup input[name=username]').val(),
          email: $('#signup input[name=email]').val(),
          password: $('#signup input[name=password]').val(),
          //confirmed_password: $('#signup input[name=confirm]').val(),
        }, (data) => {
          console.log(data)
        })
      })
});
