//MATH & SPAN/P FUNCTION

let calc = () => {
    let billValue = parseFloat(document.getElementById('bill').value);
    let tipValue = parseInt(document.getElementById('tip').value, 10);
    let nopValue = parseInt(document.getElementById('nop').value, 10);
    let tipPerson = billValue / nopValue * tipValue / 100;
    let totalPerson = billValue / nopValue + tipPerson;
    document.getElementById('tip_per_person').innerHTML = '$' + tipPerson.toFixed(2);
    document.getElementById('total_per_person').innerHTML = '$' + totalPerson.toFixed(2);
    if (nopValue > 1) {
        for (i of document.getElementsByClassName('pp')) {
            i.innerHTML = 'per person';
        }
    }
};

//MINUS BUTTON CLICK FUNCTIONS

document.getElementById('tip_minus').addEventListener('click', () => {
    let tip = document.getElementById('tip');
    let tm = parseInt(tip.value);
    if (tm !== 0) {
        tm -= 1;
    }
    tip.value = tm + '%';
}, false);

document.getElementById('nop_minus').addEventListener('click', () => {
    let nop = document.getElementById('nop');
    let nm = parseInt(nop.value);
    if (nm !== 1) {
        nm -= 1;
    }
    nop.value = nm;
}, false);

//PLUS BUTTON CLICK FUNCTIONS

document.getElementById('tip_plus').addEventListener('click', () => {
    let tip = document.getElementById('tip');
    let tp = parseInt(tip.value);
    if (tp !== 100) {
        tp += 1;
    }
    tip.value = tp + '%';
}, false);

document.getElementById('nop_plus').addEventListener('click', () => {
    let nop = document.getElementById('nop');
    let np = parseInt(nop.value);
    if (np !== 1000) {
        np += 1;
    }
    nop.value = np;
}, false);

// INPUT CHANGE FUNCTIONS

document.getElementById('bill').addEventListener('change', () => {
    let bill = document.getElementById('bill');
    if (Math.sign(parseFloat(bill.value)) === -1) {
        bill.value = 0;
    } else if (bill.value > 10000) {
        bill.value = 10000;
    }
}, false);

document.getElementById('tip').addEventListener('change', () => {
    let tip = document.getElementById('tip');
    let tv = parseInt(tip.value, 10);

    if (tv < 0 || isNaN(tv)) {
        tv = 0;
    } else if (tv > 100) {
        tv = 100;
    }

    tip.value = tv + '%';
}, false);

document.getElementById('nop').addEventListener('change', () => {
    let nop = document.getElementById('nop');
    let nv = parseInt(nop.value, 10);

    if (nv < 1 || isNaN(nv)) {
        nv = 1;
    }
    else if (nv > 1000) {
        nv = 1000;
    }

    nop.value = nv;
}, false);

for (i of document.getElementsByTagName('input')) {
    i.addEventListener('change', calc);
}
for (i of document.getElementsByTagName('button')) {
    i.addEventListener('click', calc);
}