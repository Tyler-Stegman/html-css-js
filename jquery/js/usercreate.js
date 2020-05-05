let url = "http://localhost:8080";

$().ready( ()=>{
    
    $("#save").click( () => {
        let newUser = {};
       newUser.id = Number($("#eid").val());
       newUser.userName = $("#eusername").val();
       newUser.password = $("#epassword").val();
       newUser.firstName = $("#efirstname").val();
       newUser.lastName = $("#elastname").val();
       newUser.phoneNumber = $("#ephone").val();
       newUser.email = $("#eemail").val();
       newUser.reviewer = $("#eisreviewer").prop("checked");
       newUser.admin = $("#eisadmin").prop("checked");
       console.log("User:", newUser);
       $.ajax({
            method: "POST",
            url: `${url}/users/`,
            data: JSON.stringify(newUser),
            contentType: "application/json"
       })
            .done( (res) => {
                console.log("User added!", res);
            })
            .fail( (err) => {
                console.error(error);
            })
    });
} );