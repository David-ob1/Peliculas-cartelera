export default class Cards {
    async getMoviesExample(){
        const response  = await fetch("/exampleDB.json")
        const  json = await response.json()

        this.getImages(json)
    }

    getImages(json){

        const values = object.values(json)
        const imgArray = []

        while(imgArray.length <= 11){
            let item = this.newItem(values)

            imgArray.push(item)
        }

        console.log(imgArray)
    }


    newItem(values){
        const item = values[Math.floor(Math.random() * values.length)]
        return item
    }

}