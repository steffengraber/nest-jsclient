var url='http://localhost:5000/exec';

function execAPI(i, r){
    form_id = i;
    form_return = r;
    var code = document.getElementById(form_id).innerHTML;
    code = code.replace(/(\r\n|\n|\r)/gm,"\\n");
    code = code.replace(/\"/gm, "'");
    var postData ='{"source": "' + code + '", "return": "' + form_return + '"}';
    var Http = new XMLHttpRequest();
    Http.open("POST", url);
    Http.setRequestHeader('Content-type', 'application/json');
    Http.setRequestHeader('Access-Control-Allow-Origin', '*');
    Http.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token, content-type');
    Http.setRequestHeader('Access-Control-Allow-Methods', 'GET');
    Http.send(postData);
    Http.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById(form_id + "-response").innerHTML = Http.responseText;
        }
    }
}
