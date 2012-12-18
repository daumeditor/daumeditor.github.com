$(function () {
	$('.navbar ul.nav > li > a').each(function (index) {
		if ($(this).attr('href') == location.pathname) {
			$(this).parent().addClass('active');
		}
	});
});

function lastTag(callback) {
    $.get('https://api.github.com/repos/daumeditor/DaumEditor/git/refs/tags', function (result) {
        tags = result.data.map(function (tag) {
            var version = tag.ref.replace(/^refs\/tags\//, '');
            return {
                version: version,
                sha: tag.object.sha,
                sort: version.split('.').reduce(function (total, i) { return total * 1000 + i; })
            };
        });
        tags.sort(function (a, b) {
            return b.sort - a.sort;
        });
        var lastTag = tags[0];
        if (lastTag) {
            callback(lastTag);
        }
    }, 'jsonp');
}
