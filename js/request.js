import Checker from "./checker.js"
import Display from "./display.js"
export default class Request{

    constructor(){
        this.template = document.querySelector(".card-template").content

    }

       async getInfo(inputValue){
        try{

            let encodedItem = encodeURIComponent(inputValue);
            const  url =` https://www.omdbapi.com/?s=${encodedItem}&apikey=ed80730b`
            const response = await fetch(url)
            const json = await response.json()
           

            const container = document.querySelector(".new-row")

            const display = new Display(json.Search,this.template,container)

            console.log(json)
            display.displayUserCards()

        }catch (error){
            const checker = new Checker()
            checker.getErrorContainer("Movie not found!")

        }


        }
 


    getMultipleInfo(moviesName){
        const moviesInfo = [[],[]]
        const result = moviesName.map((item) => {
            return new Promise(async (resolve) =>{
                try{
                    let encodedItem = encodeURIComponent(item);
                    const  url =` https://www.omdbapi.com/?t=${encodedItem}&apikey=ed80730b`

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
                const container = document.querySelectorAll(".default-row")
                const display = new Display(moviesInfo,this.template,container)
                display.DisplayDefaultCards()
        })
    }


}