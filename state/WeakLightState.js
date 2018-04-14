
export default class WeakLightState {
    constructor(light) {
        this.light = light;
    }
    buttonWasPressed() {
        console.log('strong light');
        this.light.setState(this.light.strongLight);
    }
}