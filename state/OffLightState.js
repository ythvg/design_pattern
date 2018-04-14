
export default class OffLightState {
    constructor(light) {
        this.light = light;
    }
    buttonWasPressed() {
        console.log('weak light');
        this.light.setState(this.light.weakLightState);
    };
}