

export const getImagen = async() => {

    try {

        const apiKey = 'R7Bw2m0q8un5UUakWz38nujxspcwXgxM';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        return 'No se encontrĂ³ la imagen'
    }
    
    
    
}

 getImagen();



