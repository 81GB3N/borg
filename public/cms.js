const display = async () =>{
    const res = await fetch("http://localhost:1337/api/tests");
    const test = await res.json();
    console.log(test);
}

display();