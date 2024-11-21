const parent=document.querySelector(".Parent");
const dob=document.getElementById("inpuut");
const submitButton=document.getElementById("submit");
const head=document.createElement("h1")

submitButton.addEventListener("click",()=>{
    const dobValue=dob.value;
    const dobDate=new Date(dobValue)
    const presentDate=new Date();

    const differenceInMilliseconds=presentDate-dobDate;
    const differenceInYears=Math.floor(differenceInMilliseconds/(1000*60*60*24*365.25));

    console.log(` ${differenceInYears} years`)
    head.innerHTML=`our age is:${differenceInYears}`

    
})
parent.appendChild(head)