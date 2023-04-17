import {sqlQuery} from "../../server.js";

window.addEventListener('load', function() {
    let team = sqlQuery("SELECT * FROM admins;");
    $( "#team" ).append( "<p style='margin-top: 30px;'>"+ team + "</p>" );
})

