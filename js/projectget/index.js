console.log("this is get and post");
//utility function:
//1.utility function to get DOM element from string
function getElementfromstring(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}
//initialize no of parameters
let addedparamsCount = 0;
//hide the parmeterbox initially
let parametersBox = document.getElementById("parametersBox");
parametersBox.style.display = 'none';


//if the user on parames box,hide the json box
let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';

})

//if the user on json box,hide the json box
let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
})

//if the user click on + button, add more parameters
let addParam = document.getElementById("addParam");
addParam.addEventListener('click', () => {
    let params = document.getElementById("params");
    let string = `<div class="form-row" my-2>
                <label for="url" class="col-sm-2 col-form-label">Parameter 1${addedparamsCount + 2}</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterKey${addedparamsCount + 2}" placeholder="Enter Parameter ${addedparamsCount + 2}             Key">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterValue${addedparamsCount + 2}" placeholder="Enter Parameter ${addedparamsCount + 2}            Value">
                </div>
               <button  class="btn btn-primary deleteParam">-</button>
            </div>`;
    //convert the element string to dom node
    let paramElement = getElementfromstring(string)
    params.appendChild(paramElement);
    //add an evenlistener to remove the parameter on clicking -button 
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (items of deleteParam) {
        items.addEventListener('click', (e) => {
            //you use alert function
            e.target.parentElement.remove();
        })
    }
    addedparamsCount++;
})

//if the user click submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // document.getElementById("responseJsonText").value = "please wait....fetching response...."

    //fetch all the value user has enterd
    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;
    //log in value for d buging
    // console.log("url=", url);
    // console.log("request type=", requestType);
    // console.log("contenttype=", contentType);
    //if user has used params option inseted of json ,collect all the params 
    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < addedparamsCount + 1; i++) {
            if (document.getElementById('parameterkey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterkey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
        console.log("this is ok");
    } else {
        data = document.getElementById('requestJsonText').value;
        console.log("this is error");
    }
    console.log("url=", url);
    console.log("request type=", requestType);
    console.log("contenttype=", contentType);
    console.log("data=", data);

})