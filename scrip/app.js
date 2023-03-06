let Urlarr=[];

const inputEle=document.querySelector("input");
const saveUrl=document.querySelector("#save-url");
const saveTab=document.querySelector('#save-tab')
const ulEle=document.querySelector(".ul-ele")
const deleteAll= document.querySelector("#delete-btn")
const localStorageEles=JSON.parse(localStorage.getItem("saveUrl"));
// console.log(localStorageEles);   

if(localStorageEles)
{
    Urlarr=localStorageEles;
    listElementFunction();
}

saveUrl.addEventListener("click",function(){
    // console.log("save input clicked");
    Urlarr.push(inputEle.value);
    listElementFunction();
    inputEle.value="";
    
localStorage.setItem("saveUrl",JSON.stringify(Urlarr));

});

saveTab.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

         let  urlvalue= tabs[0].url 
         Urlarr.push(urlvalue);
         listElementFunction();
     localStorage.setItem("saveUrl",JSON.stringify(Urlarr));

     });
});

deleteAll.addEventListener("dblclick",function(){
    localStorage.clear();
    Urlarr=[];
    listElementFunction();
})
function listElementFunction(){
    let listElemets="";

for(let i =0;i<Urlarr.length;i++)
{
//  listElemets+="<li><a href='"+Urlarr[i]+"' target ='_blank'>"+Urlarr[i]+"</a></li>";

listElemets+=`
<li>
     
<a href='${Urlarr[i]}'target='_blank' class ='links-copy'>
${Urlarr[i]}
</a>
 
</li>

`;
}
ulEle.innerHTML=listElemets;

}