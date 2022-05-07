
export class EventModel{

    constructor(
        public id: number,
        public userId: String,
        public title: String,
        public description: String,
        public when: Date,
        public where: String,
    )
    {}
    
}