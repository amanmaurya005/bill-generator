let tbtn = document.querySelectorAll(".btn");
let tipInput = document.getElementById("tipinp");

tbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        tbtn.forEach((b) => {
            b.style.backgroundColor = "";
        });
        btn.style.backgroundColor = "rgb(16, 141, 16)";


        let tipValue = parseInt(btn.textContent.replace('%', ''));
        tipInput.value = tipValue;  

    });

});

let billgen = document.getElementById("billgen");

billgen.addEventListener("click", () => {
    let billinp = parseFloat(document.getElementById("billinp").value);
    let tipinp = parseFloat(document.getElementById("tipinp").value);
    let noinp = parseInt(document.getElementById("noinp").value);

    let tipamount = document.getElementById("tipamount");
    let totalbill = document.getElementById("totalbill");
    let billno = document.getElementById("billno");

    if (isNaN(billinp) || isNaN(tipinp) || isNaN(noinp) || noinp <= 0) {
        alert("Please enter valid inputs.");
        return;
    }

    let tipamt = (billinp * tipinp) / 100;
    let total = tipamt + billinp;
    let perPerson = total / noinp;

    
    tipamount.textContent = tipamt.toFixed(2);
    totalbill.textContent = total.toFixed(2);
    billno.textContent = perPerson.toFixed(2);

          tbtn.forEach((b) => {
        b.style.backgroundColor = "";
    });

  
});
