export const getGifs = async(term) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(term) }&limit=10&api_key=ABnz6PmUayMQAGwz6zz7MXHBzff2sBg4`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return{
            id:img.id,
            url: img.images?.downsized_medium.url,
            title:img.title
        }
    })
    return gifs;
}