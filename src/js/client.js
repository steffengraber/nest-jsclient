var url='<YOUR_NEST_API_DOMAIN/exec';

function execAPI(i, r){
    form_id = i;
    form_return = r;
    var code = document.getElementById(form_id).innerHTML;
    code = code.replace(/(\r\n|\n|\r)/gm,"\\n");
    code = code.replace(/\"/gm, "'");
    var postData = '{"source": "' + code + '", "return": "' + form_return + '"}';
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
            document.getElementById(form_id + "-response").innerHTML = this.responseText;
        }
    });
    xhr.open("POST", url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, content-type');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET');
    xhr.send(postData);
}

