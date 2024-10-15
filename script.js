
function calculateInterest(){
   let p1=document.getElementById("principal").value;
   let r1=document.getElementById("rate").value;
   let t1=document.getElementById("time").value;
   //console.log(p1*r1*t1/100);
   if(p1==''|| r1==''||t1==''){
    alert('Please fill out all fields.');
        return;
    
   }
   
   
   let i=(p1*r1*t1)/100;
   let res=document.createElement('p');
   res.textContent= `The calculated simple interest is: ₹${i}`;
   let m=document.querySelector('.main');
   m.appendChild(res);
   
}
