export type JSONStation = {
    id: string,
    description: string,
    name: string,
    imgUrl: string,
    streamUrl: string,
    reliability: number,
    popularity: number,
    tags: string[]
}

export interface IStation {
    id: string,
    description: string,
    name: string,
    imgUrl: string,
    streamUrl: string,
    reliability: number,
    popularity: number,
    tags: string[]
}

export class Station implements IStation {
    id: string;
    description: string;
    name: string;
    imgUrl: string;
    streamUrl: string;
    reliability: number;
    popularity: number;
    tags: string[];

    constructor(JSONStation: JSONStation) {
        this.id = JSONStation.id;
        this.description = JSONStation.description;
        this.name = JSONStation.name;
        this.imgUrl = JSONStation.imgUrl;
        this.streamUrl = JSONStation.streamUrl;
        this.reliability = JSONStation.reliability;
        this.popularity = JSONStation.popularity;
        this.tags = JSONStation.tags;
    }
}