//MATH & SPAN/P FUNCTION

let calc = () => {
    let billValue = parseFloat($('#bill').val());
    let tipValue = parseInt($('#tip').val(), 10);
    let nopValue = parseInt($('#nop').val(), 10);
    let tipPerson = billValue / nopValue * tipValue / 100;
    let totalPerson = billValue / nopValue + tipPerson;
    $('#tip_per_person').html('$' + tipPerson.toFixed(2));
    $('#total_per_person').html('$' + totalPerson.toFixed(2));
    if (nopValue > 1) {
        $('.pp').html('per person');
        }
};

//MINUS BUTTON CLICK FUNCTIONS

$('#tip_minus').click (function() {
    let tm = parseInt($('#tip').val());
    if (tm !== 0) {
        tm -= 1;
    }
    $('#tip').val(tm + '%');
});

$('#nop_minus').click (function() {
    let nm = parseInt($('#nop').val());
    if (nm !== 1) {
        nm -= 1;
    }
    $('#nop').val(nm);
});

//PLUS BUTTON CLICK FUNCTIONS

$('#tip_plus').click (function() {
    let tp = parseInt($('#tip').val());
    if (tp !== 100) {
        tp += 1;
    }
    $('#tip').val(tp + '%');
});

$('#nop_plus').click (function() {
    let np = parseInt($('#nop').val());
    if (np !== 1000) {
        np += 1;
    }
    $('#nop').val(np);
});

// INPUT CHANGE FUNCTIONS

$('#bill').change (function() {
    if (Math.sign(parseFloat($('#bill').val())) === -1) {
        $('#bill').val(0);
    } else if ($('#bill').val() > 10000) {
        $('#bill').val(10000);
    }
});

$('#tip').change (function() {
    let tv = parseInt($('#tip').val(), 10);
    if (tv < 0 || isNaN(tv)) {
        tv = 0;
    } else if (tv > 100) {
        tv = 100;
    }
    $('#tip').val(tv + '%');
});

$('#nop').change (function() {
    let nv = parseInt($('#nop').val(), 10);
    if (nv < 1 || isNaN(nv)) {
        nv = 1;
    }
    else if (nv > 1000) {
        nv = 1000;
    }
    $('#nop').val(nv);
});

$('input').on('change', calc);
$('button').on('click', calc);