const logoheader=document.getElementById("logoheader")
const excuses=document.getElementById("excuses")
logoheader.addEventListener("click",()=>{
  window.location.href="../index.html"
})
excuses.addEventListener("click",()=>{
  window.location.href="../index.html"
})

function fetchApi(url,loadingCb ,cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
             loadingCb("none")
              cb(data);
  
      } else {
        console.log("error");
      }
    }else{
      loadingCb("block")
    
  }};
  xhr.open("GET", url, true);
  xhr.send();
}

function loading(displayValue){
  let loader=document.getElementsByClassName("loader")[0]
  loader.style.display= displayValue;

}


