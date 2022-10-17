const jokeUrl = "https://api.chucknorris.io/jokes/random";

const getJoke = async() => {
    try {
        const response = await fetch(jokeUrl);
        if(!response.ok) throw "Bad request";

        const {icon_url, id, value} = await response.json();

        return {icon_url, id, value};
    } catch (error) {
       throw error ;
    }
}

export {
    getJoke
}