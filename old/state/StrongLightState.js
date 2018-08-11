
export default class StrongLightState {
    constructor(light){ 
        this.light = light;
    }
    buttonWasPressed() {
        this.light.setState(this.light.offLightState);
    }
}