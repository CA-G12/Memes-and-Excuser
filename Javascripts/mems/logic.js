function fetchFromApi(data, cb) {
  const dataMeme = data.data.memes;
  for (let nummeme = 0; nummeme <= 50; nummeme++) {
    if (nummeme != 2 && nummeme != 21 && nummeme != 0) {
      let memeImg = dataMeme[nummeme].url;
      let memeName = dataMeme[nummeme].name;
      cb(memeImg, memeName);
    }
  }
}

