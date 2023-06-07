module.exports = {
    async get(url){
    const respuesta = await fetch(url);
    return respuesta.json();
    },
    // async post(url, data){
    //   const resp = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data),
    //     });
    //     return resp.json();
    // }
  };