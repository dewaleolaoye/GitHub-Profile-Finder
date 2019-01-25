$(document).ready(function(){
    $("#searchUser").on('keypress', function(e){
        let username = e.target.value;

        // Make request to Github

        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: '120d3a664413424830f9',
                client_secret: 'e17a653f7649ebc218fc98d29a4867b186578d5e'
            }
        }).done(function(user){
            $('#profile').html(`
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">${user.name}</h3>
                </div>
                
            </div>
            `)
        });
    });
});