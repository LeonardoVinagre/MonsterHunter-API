function ToUpper(inf){
    let str = inf;
    str = str[0].toUpperCase() + str.substr(1);
    return str;
} 

function ConcatenatesElements(inf){
    const Elements = [];
    
    if(inf.length < 1){
        return ('None');
    }

    for(let i = 0 ; i < inf.length ; i++){
        let str = inf[i]
        str = str[0].toUpperCase() + str.substr(1);
        Elements[i] = str;
    }
    
    return Elements.join(' ; ');
}

export {ToUpper, ConcatenatesElements};