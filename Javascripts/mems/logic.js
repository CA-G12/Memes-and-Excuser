fetchApi("https://api.imgflip.com/get_memes",fetchFromApi )
   

function fetchFromApi(data){

    const dataMeme= data.data.memes
    console.log(dataMeme)
    for (let nummeme=0; nummeme<=50;nummeme++ ){
          let memeImg= dataMeme.url 
          let memeName=dataMeme.name
          let boxCount=dataMeme.box_count

    }

}
