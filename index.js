const title = document.getElementById("title");
const fullname = document.getElementById("fullname");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const address = document.getElementById("address")
const pic = document.querySelector("img")



    const url = "https://randomuser.me/api/"
    const getData = () =>{
        fetch (url).then ((response) =>{
            return response.json()
           
        }).then((data) =>{
            console.log(data);
            pic.src = `${data.results[0].picture.large}`
            fullname.innerHTML = `Name: ${data.results[0].name.first}`;
            title.innerHTML = `Title: ${data.results[0].name.title}`;
            phoneNumber.innerHTML = ` Number: ${data.results[0].phone}`;
            email.innerHTML = `Email: ${data.results[0].email}`
            address.innerHTML = `Address: ${data.results[0].location.street}`



        }) 
    }
    getData()


