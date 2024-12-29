const fileInput = document.getElementById('fileinput');
const imagePreview = document.getElementById('image-preview');

fileInput.addEventListener('change', (e) => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        imagePreview.src = event.target.result;
        imagePreview.style.display = 'block';
    };

    reader.readAsDataURL(file);
    });

   function addTask(){

    let myname= document.getElementById("name");
    let fname= document.getElementById("fname");
    let email= document.getElementById("email");
    let num= document.getElementById("num");
    let institute= document.getElementById("institute");
    let degree= document.getElementById("options");
    let date = document.getElementById("date")
    let cnic= document.getElementById("cnic");
    let paragraph=document.getElementById("paragraph");

    
   
    if(myname.value,fname.value,email.value,num.value,institute.value,degree.value,cnic.value===''){
        alert("you must right something")
    }
    else{
    let showname=document.getElementById("shownn");
    showname.innerHTML=myname.value ;
    let showfname=document.getElementById("shownf");
    showfname.innerHTML="f/name: "+fname.value ;
    let showemail=document.getElementById("showne");
    showemail.innerHTML="email: "+email.value ;
    let shownum=document.getElementById("shownnu");
    shownum.innerHTML="contact: "+num.value ;
    let showinstitute=document.getElementById("showni");
    showinstitute.innerHTML="institute: "+institute.value ;
    let showdegree=document.getElementById("showno");
    showdegree.innerHTML="Degree: "+degree.value ;
    let showndate=document.getElementById("shownd");
    showndate.innerHTML="DATE: "+date.value ;
    let showcnic=document.getElementById("shownc");
    showcnic.innerHTML="CNIC: "+cnic.value ;
    let showparagraph=document.getElementById("shownp");
    showparagraph.innerHTML="details: "+paragraph.value ;
    let showimg = document.getElementById("showimg");
    showimg.innerHTML = '<img src="' + imagePreview.src + '">';
    }
    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');
    let div3 = document.getElementById('div3');
    let target=document.getElementById('show');
    
    div1.addEventListener('click', () => {
        target.style.display = 'block'; 
        target.style.backgroundImage = div1.style.backgroundImage;
        console.log('Div was clicked')
    });
    div2.addEventListener('click', () => {
        target.style.display= 'block';
        target.style.backgroundImage = div2.style.backgroundImage;
        console.log('Div was clicked')
    });
    div3.addEventListener('click', () => {
        target.style.display= 'block';
        target.style.backgroundImage = div3.style.backgroundImage;
        console.log('Div was clicked')
    });
}


