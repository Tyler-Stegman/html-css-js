let url = "http://localhost:8080";

let jsonresp = [];

$().ready( ()=>{
    $.getJSON(`${url}/users/`)
        .done( (res)=>{
            jsonresp = res;
            display();
            console.log(res);
        } )
        .fail( (err)=> {
            console.error(err);
        });
} );

const display = () => {
    let tbody = $("tbody");
    for(let user of jsonresp.data){
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        let tdUserName = $(`<td>${user.userName}</td>`);
        let tdFullname = $(`<td>${user.firstName} ${user.lastName}</td>`);
        let tdReviewer = $(`<td>${user.reviewer ? "Yes" : "No"}</td>`);
        let tdAdmin = $(`<td>${user.admin ? "Yes" : "No"}</td>`);
        tr.append(tdId);
        tr.append(tdUserName);
        tr.append(tdFullname);
        tr.append(tdReviewer);
        tr.append(tdAdmin);
        tbody.append(tr);
    }
}