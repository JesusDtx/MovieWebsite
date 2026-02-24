var movieArray = [
        {'name': 'MovieA', 'Genre': 'Action','Description':"Man kills dog and out for revenge", 'Showtimes': 'Monday 5pm- 7pm'},
        {'name': 'MovieB', 'Genre': 'Thriller','Description':"Robots and transformations" ,'Showtimes': 'Monday 3pm - 6pm'},
        {'name': 'MovieC', 'Genre': 'Horror','Description':"Dumb teenagers awaken a secret monster" ,'Showtimes': 'Monday 5pm-7pm'},
    ]
    buildTable(movieArray)

    function buildTable(data){
        var table = document.getElementById("movie")

        for( var i = 0; i < data.length; i++){
            var row = `<tr> 
                <td>${data[i].name}</td>
                <td>${data[i].Genre}</td>
                <td>${data[i].Description}</td>
                <td>${data[i].Showtimes}</td>
                 </tr>`

            table.innerHTML += row

        }
    }