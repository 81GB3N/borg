const display = async () =>{
    const api = await fetch("http://borg.licejus.lt:1337/api/index");
    const index = await api.json();
    for(let names in index.data.attributes){
        if(document.querySelector(`.${names}`)){
            console.log(index.data.attributes[names])
            document.querySelector(`.${names}`).innerHTML = index.data.attributes[names];
        }
    }
    // console.log(index.data.attributes);
}

display();