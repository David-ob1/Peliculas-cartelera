export default class Request{

    constructor(){
        this.template = document.querySelector(".card-template").content

    }

    getMultipleInfo(moviesName){
        const moviesInfo = [[],[]]
        const result = moviesName.map(item => {
            return new Promise(async (resolve) =>{
                try{
                    const  url =` http://www.omdbapi.com/?i=${item}&apikey=ed80730b`
                }catch{

                }

            })
        })
    }


}