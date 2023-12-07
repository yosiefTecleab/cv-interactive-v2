

$(document).ready(function () {
    $(".registrationForm").on("submit", function (event) {
        event.preventDefault();

        let email = $("#email").val();

        let name = $("#fullName").val();
        let address = $("#address").val();
        let phone = $("#phone").val();
        let skills = $("#skills").val();
        let language = $("#language").val();
        let birthdate = $("#birthdate").val();
        let summary = $("#summary").val();
        let hobby = $("#hobby").val();
        let competence = $("#competence").val();
        let qualification = $("#qualification").val();
        let other = $("#other").val();


        $("#emailT").append(email);
        $("#nameT").text(name);
        //$("#nameT").append(name);
        $("#addressT").append(address);
        $("#phoneT").append(phone);
        $("#skillsT").append(skills);
        $("#languageT").append(language);
        $("#birthdateT").append(birthdate);
        $("#summaryT").append(summary);
        $("#hobbyT").append(hobby);
        $("#competenceT").append(competence);
        $("#qualificationT").append(qualification);
        $("#otherT").append(other);




        $(".registrationForm")[0].reset()
    });

});


function addWorkingExperiences() {
    let newNode = document.createElement("textarea");

    newNode.classList.add("experience");

    newNode.setAttribute("rows", 2);

    let weOb = document.getElementById("exp");
    let weAddButtonOb = document.getElementById("addExp");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addAnotherQualifications() {
    let nodeQual = document.createElement("textarea");
    //let nodeQual = $createElement("textarea");  
    nodeQual.classList.add("qualification");

    nodeQual.setAttribute("rows", 2);

    let qualAdd = document.getElementById("qual");
    let addBtn = document.getElementById("addQual");

    qualAdd.insertBefore(nodeQual, addBtn);
}

function createCV() {

    let wes = document.getElementsByClassName("experience");

    let str = "";

    for (let ex of wes) {
        str = str + `<li> ${ex.value} </li>`;
    }

    document.getElementById("experienceT").innerHTML = str;

    let wes2 = document.getElementsByClassName("qualification");

    let str2 = "";

    for (let ex2 of wes2) {
        str2 = str2 + `<li> ${ex2.value} </li>`;
    }

    document.getElementById("qualificationT").innerHTML = str2;




}
