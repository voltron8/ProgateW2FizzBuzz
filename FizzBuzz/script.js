let teks ="Keberuntungan Anda hari ini adalah";

function myFunction() {
    let x = document.getElementById("numb").value;
    //const x = document.getElementById("numb").value;
    //document.getElementById("demo").innerHTML = x + "cuk" + teks;
    switch (true) {
        case (x=100):
            document.getElementById("demo").innerHTML = teks+"Mengerikan";
            break;
    }

}