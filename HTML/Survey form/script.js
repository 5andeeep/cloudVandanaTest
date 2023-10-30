
function submitForm(){
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const dateOfBirth = document.querySelector("#dateOfBirth").value;
    const male = document.querySelector("#male");
    const female = document.querySelector("#female");
    const profession = document.querySelector("#profession").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phoneNumber").value;
    const country = document.querySelector("#countries").value;
    let gender = "";
    // logic to get value of gender and gender is not selected then need to show alert to select gender
    if(male.checked==true){
        gender = male.value;
    }
    else if(female.checked==true){
        gender = female.value;
    }
    else if(male.checked==false && female.checked==false){
        alert("please select gender!");
    }
    else{
        alert(`
        Full name: ${firstName} ${lastName}
        Date of birth: ${dateOfBirth}
        Country: ${country}
        Gender: ${gender}
        Profession: ${profession}
        Email: ${email}
        Mobile number: ${phone}
    `);
    }
}
