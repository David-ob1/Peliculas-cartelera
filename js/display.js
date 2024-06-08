export default class Display{
    constructor(moviesInfo,template,container){
        this.moviesInfo = moviesInfo
        this.template = template
        this.container = container
        this.fragment = new documentFragment()
        this.clone = this.template.cloneNode(true)
        this.card  = this.template.querySelector(".card")

    }

    DisplayDefaultCards(){
        let moviesImg = this.moviesInfo[0]
        let moviesTitles = this.moviesInfo[1] 

        const imgArray = this.getNewArray(movie)
    }

    getNewArray(){

    }
}