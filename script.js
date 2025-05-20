//your JS code here. If required.{
// //your JS code here. If required.
// let user1=document.getElementById("age");
// let user2=document.getElementById("text");
// let form=document.querySelector("form");
// 	form.addEventListener("submit",function(e){
//         e.preventDefault();
// 		if(user1.value.length<=0 || user2.value.length<=0){
// 			alert("Please enter valid details.");
// 		}else{
// 			let myPromise=new Promise((resolve,reject)=>{
// 		setTimeout(function() {
// 			if(parseInt(user2.value)>=18){
// 	  alert("Welcome,You can vote");		
//     resolve()        
//     }
//             else	{
// alert("Oh sorry . You aren't old enough.");
// reject()
// }	
//     })
// 	},4000)
//     }
//     }
// // let myPromise2=new myPromise2((resolve,reject)=>{
// // 	setTimeOut(function(age){
// //        if(age<=18){
// //  alert("Oh sorry . You aren't old enough.");
// //        reject()
// //        }
// //     },4000)
// // })
// //     })


	let user1 = document.getElementById("age");
let user2 = document.getElementById("text");
let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (user1.value.length <= 0 || user2.value.length <= 0) {
        alert("Please enter valid details.");
    } else {
        // Create a promise to simulate delay
        let myPromise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                if (parseInt(user1.value) >= 18) {
                    resolve(`Welcome , ${user2.value} You can vote`);
                } else {
                    reject(`Oh sorry, ${user2.value}. You aren't old enough.`);
                }
            }, 4000); // 4-second delay
        });

        // Handle the result
        myPromise
            .then(function(message) {
                alert(message);
            })
            .catch(function(error) {
                alert(error);
            });
    }
});

