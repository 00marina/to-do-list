export class Area {
    id: number;
    name: string;
    desc: string;
    category: string;
    done: boolean;

    constructor(id: number, name: string, desc: string, category: string,  done: boolean) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.category = category;
        this.done = done;
    }
}
