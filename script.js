let user1 = document.getElementById("age");
let user2 = document.getElementById("name");
let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (user1.value.length <= 0 || user2.value.length <= 0) {
        alert("Please enter valid details");
    } else {
        // Create a promise to simulate delay
        let myPromise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                if (parseInt(user1.value) >= 18) {
                    resolve(`Welcome John You can vote`);
                } else {
                    reject(`Oh sorry, ${user2.value}. You aren't old enough.`);
                }
            }, 1000); // 4-second delay
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

