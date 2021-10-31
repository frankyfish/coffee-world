export default class CoffeeMarker {

    latLng;
    title;
    description;
    userRating = 0;

    constructor(latLng, title) {
        this.latLng = latLng
        this.title = title
    }
}