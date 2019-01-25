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
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="thumbnail avatar" src="${user.avatar_url}">
                            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}"> View Profile </a>
                            </div>
                        <div class="col-md-9">
                            <span class="label label-default">Public Repos: ${user.public_repos}</span>
                            <span class="label label-primary">Public Gist: ${user.public_gists}</span>
                            <span class="label label-success">Followers: ${user.followers}</span>
                            <span class="label label-info">Following: ${user.following}</span>
                            <br><br>

                            <ul class="list-group">
                                <li class ="list-group-item">Company: ${user.company}</li>
                                <li class ="list-group-item">Website/Blog: ${user.blog}</li>
                                <li class ="list-group-item">Location ${user.location}</li>
                                <li class ="list-group-item">Member Since: ${user.created_at}</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            `)
        });
    });
});











