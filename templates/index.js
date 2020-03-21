$("#form").submit(function (e) {
    e.preventDefault()

    let result = '';

    var query = $("#search").val();

    var API_KEY = "9fc569739c6b933018a28657aee355fd"

    var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
    console.log(url);

    $.get(url, function(data){
        
        $("#result").html('')
        console.log(data)

        data.organic_results.forEach(res => {
            
            result = `
                <h1>${res.title}</h1><br><a target="_blank" href="${res.url}">${res.url}</a>
                <p>${res.snippet}</p>
                <a href="${res.domain}">${res.domain}</a>
            `
            $("#result").append(result)

        });
    })
})