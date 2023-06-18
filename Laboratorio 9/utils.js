module.exports = {
    async get(url){
    const respuesta = await fetch(url);
    return respuesta.json();
    },
}