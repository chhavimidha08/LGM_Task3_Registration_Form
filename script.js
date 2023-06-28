let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#img").value;
    var generatedurl1='photo.jpeg';
    //console.log(generatedurl);

    //storing the data in objects getting from form
    const data={
        name: document.getElementById("name").value,
        img: generatedurl1,
        email: document.getElementById("email").value,
        webstelink: document.getElementById("websitelink").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);

    //Card Template
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
    <img src="${generatedurl1}" alt="photo.jpeg" width="150" height="150">
        <div class="NameContainer">${data.name}</div>
        <a href="mailto:chhavimidha08@ieee.org">${data.email}</a><br>
        <a href="www.chhavimidha08.com">${data.webstelink}</a>
        <div class="SkillContainer">${data.skills}</div>
     `;
        console.log(newlist);
        output.appendChild(newlist);

        let input=document.querySelectorAll('input');
        input.forEach(input => {
            Input.value ='';
        });
})