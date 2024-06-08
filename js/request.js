import Display from "./display.js"
export default class Request{

    constructor(){
        this.template = document.querySelector(".card-template").content

    }

    getMultipleInfo(moviesName){
        const moviesInfo = [[],[]]
        const result = moviesName.map((item) => {
            return new Promise(async (resolve) =>{
                try{
                    let encodedItem = encodeURIComponent(item);
                    const  url =` http://www.omdbapi.com/?t=${encodedItem}&apikey=ed80730b`

                    // const  url =` http://www.omdbapi.com/?t=${item}&apikey=ed80730b`
                    // The Lord of the Rings
                    console.log(url)
                    const response = await fetch(url)
                    const json = await response.json()

                    moviesInfo[0].push(json.Poster)
                    moviesInfo[1].push(json.Title)

                    resolve()
                }catch(error){
                    console.log(error)

                }

            })
        })

        Promise.all(result)
            .then(()=>{
                const container = document.querySelector(".default-row")
                const display = new Display()
                display.DisplayDefaultCards()
        })
    }


}