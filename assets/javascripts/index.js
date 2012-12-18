lastTag(function (lastTag) {
    $('#last_tag').html(lastTag.version);
    $.get('https://api.github.com/repos/daumeditor/DaumEditor/git/tags/' + lastTag.sha, function (result) {
        var tag = result.data;
        $('#last_tag').after(new Date(tag.tagger.date) + ')').after(' (Released at: ');
    }, 'jsonp');
});

$.get('https://api.github.com/repos/daumeditor/DaumEditor/collaborators', function (result) {
    var collaborators = result.data;
    var $list = $('<ul></ul>');
    $('#collaborators').after($list);
    collaborators.forEach(function (collaborator) {
        //var $avatar = $('<img>').addClass('avatar').attr('src', collaborator.avatar_url);
        var $link = $('<a>').attr('href', 'https://github.com/' + collaborator.login).append(collaborator.login);
        $list.append($('<li>').append($link));
    });
}, 'jsonp');
