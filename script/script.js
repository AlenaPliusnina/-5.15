const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function getInputValues() {
    const var1 = $("input[name=var1]").val();
    const var2 = $("input[name=var2]").val();
    const var3 = $("input[name=var3]").val();
    const var4 = $("input[name=var4]").val();
    const var5 = $("input[name=var5]").val();
    const var6 = $("input[name=var6]").val();
    const speach = $("input[name=speach]").val();

    let arr = [];
    arr.push(var1, var2, var3, var4, var5, var6, speach);

    return arr;
};

function putValusInData(jsonObj) {
    let arrInputValues = getInputValues();
	
	let arrTextJason = jsonObj.text;
	
	let text = "";
      
    arrTextJason.forEach(str => {
		// for(input in arrInputValues) {
        arrInputValues.forEach(input => {
			str = str.replace('{var1}', arrInputValues[0]);
			str = str.replace('{var2}', arrInputValues[1]);
			str = str.replace('{var3}', arrInputValues[2]);
			str = str.replace('{var4}', arrInputValues[3]);
			str = str.replace('{var5}', arrInputValues[4]);
			str = str.replace('{var6}', arrInputValues[5]);
            str = str.replace('{speach}', arrInputValues[6]);
        });
        text += `<span>${str}<\span> <br>`;
	});
    $("#result").html(text);
};

function processRequest(event) {
	$.getJSON(dataURL, putValusInData);;
	event.preventDefault();
};

function init() {
	$("#button-fetch").click(processRequest);
};

$(document).ready(init);


