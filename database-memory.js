import { randomUUID } from "crypto";

//não usado
export class DatabaseMemory{
    #videos = new Map();

    list(search){
        return [...this.#videos.entries()]
            .map(videoArray =>{
                const id = videoArray[0];
                const videoInfos = videoArray[1];
    
                return {
                    id,
                    ...videoInfos
                }
            })
            .filter(video =>{ //para retornar os videos que tem no titulo a palavra pesquisada em "search"
                if(search){
                    return video.title.includes(search)
                }
                return true
            })
    }

    create(video){
        const videoID = randomUUID();
        this.#videos.set(videoID, video)
    }

    update(id, video){
        this.#videos.set(id, video)
    }

    delete(id){
        this.#videos.delete(id)
    }

}

//PAREI NO MINUTO 54:00