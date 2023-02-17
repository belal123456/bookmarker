var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');








let webSiteContainer;
if(localStorage.sites!=null){
    webSiteContainer=JSON.parse(localStorage.sites)
}else{
    webSiteContainer=[];
}
  save.onclick=function addNew(){
    if(validate()==true){
        let siteInfo ={
            name:siteNameInput.value,
            WebUrl:siteUrlInput.value,
        }
        webSiteContainer.push(siteInfo);
        localStorage.setItem('sites',JSON.stringify(webSiteContainer));
        displayData()
        clearForm()
    }else{
        alert('entre name')
    }

    
}

//displauSaveData
function displayData(){
    var container='';
    for(let i = 0;i<webSiteContainer.length;i++){
        container +=`<tr>
              <td>${webSiteContainer[i].name}</td>
              <td>${webSiteContainer[i].WebUrl}</td>
              <td><button onclick="vist(${i})" id="bvisit" class="btn btn-lg btn-info" >visit</button></td>
              <td><button onclick="deleteItem(${i})" class="btn btn-lg btn-danger" >delete</button></td>
             </tr>`
    }
    document.getElementById('tableData').innerHTML=container;
}
displayData()
//clearForm
function clearForm(){
    siteNameInput.value='';
    siteUrlInput.value='';
}

// delete

function deleteItem(i){
   webSiteContainer.splice(i,1)
    localStorage.sites=JSON.stringify(webSiteContainer);
    displayData();
}

//visit
function vist(i){
    let website1=webSiteContainer[i].WebUrl;
    window.open(webSiteContainer[i].WebUrl,'_blank')

}

function validate(){
    var regx=/^[a-z]{3,}/
     return regx.test(siteNameInput.value);
    
}