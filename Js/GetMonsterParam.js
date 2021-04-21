
    //get the parameter passed by the monster_box
    const params  = (new URL(document.location)).searchParams;

    //search for 'id' on the url passed
    const urlId   = params.get("id"); 
    const urlName = params.get("name");
   


export {urlId, urlName};