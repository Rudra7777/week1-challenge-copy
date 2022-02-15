let num;
var random_number;
let count_played = 0;
let count_won = 0;
let count_lost = 0;

/*
    num = 1 means water is selected by user
    num = 2 means fire is selected by user
    num = 3 means tree is selected by user
    */

/* on clicking water*/
var x = document.getElementById("water");
x.addEventListener("click", function() {
    document.getElementById("img1").style.display = "inline"
    document.getElementById("img2").style.display = "none"
    document.getElementById("img2").style.display = "none"
    document.getElementById("img3").style.display = "none"
    document.getElementById("img").style.display = "inline"
    document.getElementById("img4").style.display = "none"
    document.getElementById("img5").style.display = "none"
    document.getElementById("img6").style.display = "none"
    console.log("you selected : water");
    console.log("Computer playing....");
    num = 1;
})

/* on clicking fire*/
var y = document.getElementById("fire");
y.addEventListener("click", function() {
    document.getElementById("img2").style.display = "inline"
    document.getElementById("img1").style.display = "none"
    document.getElementById("img3").style.display = "none"
    document.getElementById("img").style.display = "inline"
    document.getElementById("img4").style.display = "none"
    document.getElementById("img5").style.display = "none"
    document.getElementById("img6").style.display = "none"

    console.log("you selected : fire");
    console.log("Computer playing....")
    num = 2;
})

/* on clicking tree*/
var z = document.getElementById("tree");
z.addEventListener("click", function() {
        document.getElementById("img3").style.display = "inline"
        document.getElementById("img1").style.display = "none"
        document.getElementById("img2").style.display = "none"
        document.getElementById("img").style.display = "inline"
        document.getElementById("img4").style.display = "none"
        document.getElementById("img5").style.display = "none"
        document.getElementById("img6").style.display = "none"

        console.log("you selected : tree");
        console.log("Computer playing....")
        num = 3;
    })
    /*random number generator from 1,2,3 , if else logic for game. */

var p = document.getElementById("play");
p.addEventListener("click", function play() {
        random_number = Math.floor((Math.random() * 3) + 1);
        count_played += 1;
        document.getElementById("played_count").innerHTML = count_played;



        if (num == 1 && random_number == 1) {
            console.log("Result : TIE!");
            document.getElementById("img4").style.display = "inline"
            document.getElementById("img").style.display = "none"
            document.getElementById("img5").style.display = "none"
            document.getElementById("img6").style.display = "none"


        } else
        if (num == 1 && random_number == 2) {
            console.log("Result : You win!");
            document.getElementById("img5").style.display = "inline"
            document.getElementById("img").style.display = "none"
            document.getElementById("img4").style.display = "none"
            document.getElementById("img6").style.display = "none"
            count_won += 1;
            document.getElementById("won_count").innerHTML = count_won;

        } else if (num == 1 && random_number == 3) {
            console.log("Result : Computer win!");
            document.getElementById("img6").style.display = "inline"
            document.getElementById("img").style.display = "none"
            document.getElementById("img5").style.display = "none"
            document.getElementById("img4").style.display = "none"
            count_lost += 1;
            document.getElementById("lost_count").innerHTML = count_lost;

        } else if (num == 2 && random_number == 2) {
            console.log("Result : TIE!");
            document.getElementById("img5").style.display = "inline"
            document.getElementById("img").style.display = "none"
            document.getElementById("img4").style.display = "none"
            document.getElementById("img6").style.display = "none"

        } else if (num == 2 && random_number == 3) {
            console.log("Result : You win!");
            document.getElementById("img6").style.display = "inline"
            document.getElementById("img").style.display = "none"
            document.getElementById("img4").style.display = "none"
            document.getElementById("img5").style.display = "none"
            count_won += 1;
            document.getElementById("won_count").innerHTML = count_won;

        } else if (num == 2 && random_number == 1) {
            document.getElementById("img4").style.display = "inline"
            document.getElementById("img").style.display = "none"
            document.getElementById("img5").style.display = "none"
            document.getElementById("img6").style.display = "none"
            count_lost += 1;
            document.getElementById("lost_count").innerHTML = count_lost;
            console.log("Result : Computer win!");
        } else if (num == 3 && random_number == 3) {
            console.log("Result : TIE!");
            document.getElementById("img6").style.display = "inline"
            document.getElementById("img").style.display = "none"
            document.getElementById("img4").style.display = "none"
            document.getElementById("img5").style.display = "none"
            count_lost += 1;
            document.getElementById("lost_count").innerHTML = count_lost;

        } else if (num == 3 && random_number == 1) {
            console.log("Result : You win!");
            document.getElementById("img4").style.display = "inline"
            document.getElementById("img").style.display = "none"
            document.getElementById("img5").style.display = "none"
            document.getElementById("img6").style.display = "none"
            count_won += 1;
            document.getElementById("won_count").innerHTML = count_won;

        } else if (num == 3 && random_number == 2) {
            console.log("Result : Computer win!");
            document.getElementById("img5").style.display = "inline"
            document.getElementById("img").style.display = "none"
            document.getElementById("img4").style.display = "none"
            document.getElementById("img6").style.display = "none"
            count_lost += 1;
            document.getElementById("lost_count").innerHTML = count_lost;

        }
    })
    /*score counter*/