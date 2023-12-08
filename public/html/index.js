const display = async () =>{
    const api = await fetch("http://borg.licejus.lt:1337/api/index");
    const index = await api.json();
    for(let names in index.data.attributes){
        if(document.querySelector(`.${names}`) && document.querySelector(`.${names}`).tagName !== 'UL'){
            // console.log(index.data.attributes[names])
            document.querySelector(`.${names}`).innerHTML = index.data.attributes[names];
        }
        else if(document.querySelector(`.${names}`) && document.querySelector(`.${names}`).tagName == 'UL'){
            let items = index.data.attributes[names].split("\n");
            // console.log(items);
            let list = document.querySelector(`.${names}`);
            list.innerHTML=``;
            for(let item in items){
                list.innerHTML+=`<li style="color: black">${items[item]}</li>`;
            }
            // console.log(list);
        }
    }
    // console.log(index.data.attributes);
}

display();