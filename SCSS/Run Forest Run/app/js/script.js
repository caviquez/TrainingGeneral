/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: style.scss
 */
/*
 * Author:      cviquez@intelligentsense.com
 * Date:        03/05/2019
 * Description: Run Forest Run using AJAX
 */

var companies_list;
/*In this section the promise is created using the library XMLHttpRequest 
The data is obtain from this JASON https://api.myjson.com/bins/uptto
*/

var insert_agent = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.status === 200 && this.readyState == 4) { //200 means that the request has succeeded.
            resolve(request.response);
        }
    }
    request.open('GET', 'https://api.myjson.com/bins/uptto', true);
    request.send();
    
});
var tmpl = document.getElementById("agent-tmpl").innerHTML;

/*In this section the promise is consumed*/
var obtain_agent = function () {
    insert_agent
        .then(function(data) {
            var box = document.getElementById("agent-container");
            var html = Mustache.to_html(tmpl, JSON.parse(data));
            box.innerHTML = html;
            companies_list = JSON.parse(data);
        }).catch((error) => {
            console.log(error.message);
        });
}


/*This function has the purpose of take the input agent 
fron the search bar and fine the agent on agents list*/
function search_agent ()  {
    var input = document.getElementById('search_input').value;
    var company = {"companies": []};
    company.companies = companies_list.companies.filter(elem => elem.name.toLowerCase().includes(input.toLowerCase()));
    var box = document.getElementById("agent-container");
    var html = Mustache.to_html(tmpl, company);
    box.innerHTML = html;
}

window.onload = obtain_agent;
