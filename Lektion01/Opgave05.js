
    let antalPrim = 100;
    let prime = true;

    let arr = [];
    for(let i = 2; i < antalPrim; i++){
        prime = true;
        for(let j = 2; j < i; j++){
             if(i % j === 0){
                prime = false;
                break;
            }
        }
        if(prime){
            arr.push(i);
            console.log(i)
        }
    }

