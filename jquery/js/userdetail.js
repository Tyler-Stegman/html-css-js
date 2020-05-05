let url = "http://localhost:8080";

$().ready( ()=>{

    $("#get").click( () => {
        let userId = $("#userid").val();
        $.getJSON(`${url}/users/${userId}`)
        .done((res)=>{
            let jsonresp = res;
            display(jsonresp);
            console.log(res);
        } )
    } );
} );

const display = (jsonresp) => {
    let user = jsonresp.data;
    $("#eid").text(user.id);
    $("#eusername").text(user.userName);
    $("#epassword").text(user.password);
    $("#efullname").text(user.firstName + " " + user.lastName);
    $("#ephonenumber").text(user.phoneNumber);
    $("#eemail").text(user.email);
    $("#eisreviewer").text(user.reviewer);
    $("#eisadmin").text(user.admin);
}