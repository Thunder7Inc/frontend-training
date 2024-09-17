fetch('https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
  })
  .then(data => {
    data.map((item)=>{
        if(item.id==1118){
            console.log(item.name)
        }
        else{
            throw new error("no item found")
        }
    })
  })
  .catch(error => {
    console.error('error', error);
  });
