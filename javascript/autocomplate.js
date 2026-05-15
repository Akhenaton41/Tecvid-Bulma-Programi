function aramaFiltresi(e$) {
    e$ = e$.toLocaleLowerCase('tr-TR');
    for (let f = 0; f <= 4; f++) {
        e$ = e$.replace(/â/i, "a").replace(/[îı]/i, "i").replace(/[ûü]/i, "u").replace(/[- ]/i, "").replace(/w/i, "v").replace(/ç/i, "c");
    }
    return e$;
}

function autocomplete(inp, arr) {
    let currentFocus;
    inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value, gecici2 = [];
        closeAllLists();
        if (!val) return false;
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        
        for (i = 0; i < arr.length; i++) {
            let v1 = aramaFiltresi(arr[i]["name"]).split("·");
            let v2 = aramaFiltresi(val);
            let kunye = arr[i]["name"].split("·");
            let Var = false;

            for (let k = 0; k <= v1.length - 1; k++) {
                if (v1[k].substr(0, v2.length) === v2) Var = true;
            }
            
            if (Var) {
                gecici2.push(`${kunye[0].substr(0, val.length)}·${kunye[0].substr(val.length)}·${kunye[0]}·${arr[i]["ayetSayisi"]}·${i}`);
            }
        }

        if (gecici2.length > 0) {
            gecici2.sort((a, b) => a.localeCompare(b));
            for (let f = 0; f <= gecici2.length - 1; f++) {
                let gecici3 = gecici2[f].split("·");
                b = document.createElement("DIV");
                b.innerHTML = `<strong>${gecici3[0]}</strong>${gecici3[1]}`;
                b.innerHTML += `<input type='hidden' value='${gecici3[2]}'>`;
                b.addEventListener("click", function() {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                    inp.focus();
                });
                a.appendChild(b);

                b = document.createElement("DIV");
                b.innerHTML = `<strong>${gecici3[0]}</strong>${gecici3[1]} 1-${gecici3[3]}`;
                b.innerHTML += `<input type='hidden' value='${gecici3[2]} 1-${gecici3[3]}'>`;
                b.addEventListener("click", function() {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                    ayetGetir();
                    inp.focus();
                });
                a.appendChild(b);
            }
        }
    });

    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}