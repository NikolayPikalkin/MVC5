
function convert() {
    var w = document.getElementById('width');
    var l = document.getElementById('length');

    var degWid = parseFloat(document.getElementById('field1').value);
    var minWid = parseFloat(document.getElementById('field2').value);
    var secWid = parseFloat(document.getElementById('field3').value);
    var degLen = parseFloat(document.getElementById('field4').value);
    var minLen = parseFloat(document.getElementById('field5').value);
    var secLen = parseFloat(document.getElementById('field6').value);

    var Width = (degWid/1.0) + (minWid / 60) + (secWid / 3600);

    var Length = (degLen/1.0) + (minLen / 60) + (secLen / 3600);

    w.value = Width.toFixed(5);
    l.value = Length.toFixed(5);
   
}