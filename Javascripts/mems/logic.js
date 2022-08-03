
   

function fetchFromApi(data,cb){

    const dataMeme= data.data.memes
    for (let nummeme=0; nummeme<=50;nummeme++ ){
        if (nummeme!=2){
          let memeImg= dataMeme[nummeme].url 
          let memeName=dataMeme[nummeme].name
          let boxCount=dataMeme[nummeme].box_count
          cb(memeImg, memeName , boxCount)
        }
       
      

    }

}
