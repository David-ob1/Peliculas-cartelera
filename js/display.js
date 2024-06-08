export default class Display{
    constructor(moviesInfo,template,container){
        this.moviesInfo = moviesInfo
        this.template = template
        this.container = container
        this.fragment = new DocumentFragment()
        this.clone = this.template.cloneNode(true)
        this.card  = this.template.querySelector(".card")

    }

    DisplayDefaultCards(){
        let moviesImg = this.moviesInfo[0]
        let moviesTitles = this.moviesInfo[1] 

        const imgArray = this.getNewArray(moviesImg)
        const titleArray = this.getNewArray(moviesTitles)

        this.container.forEach((row,i) =>{
            i == 0 ? (moviesTitles = titleArray[0]) : (moviesTitles = titleArray[1])

            imgArray[i].forEach((movie,i) =>{
                this.card.children[0].setAttribute("src",`${movie}`)
                this.card.children[1].children[0]
            })

        })
    }

    getNewArray(movies){
        const left = movies
        const right = left.splice(0,Math.ceil(left.length / 2))
        return [left, right]
    }
}