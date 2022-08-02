function fetchApi(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        let data = JSON.parse(xhr.responseText);
        cb(data);
      } else {
        console.log("error");
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

