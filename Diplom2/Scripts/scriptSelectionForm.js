var inputField = document.getElementById('inputForm');
var fieldDec = document.getElementById('formDec');
var fieldDegree = document.getElementById('formDegree');
inputField.innerHTML = fieldDec.innerHTML;
var rad = document.getElementsByName('selectionForm');
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].onclick = function () {
        if (this != prev) {
            prev = this;

            if (this.value == "dec") {
                inputField.innerHTML = fieldDec.innerHTML;
            }
            else
                inputField.innerHTML = fieldDegree.innerHTML;

        }

    };
}