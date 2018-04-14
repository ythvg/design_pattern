
import OffLightState from './OffLightState';
import WeakLightState from './WeakLightState';
import StrongLightState from './StrongLightState';

class Light {
    
    constructor() {
        this.offLightState = new OffLightState(this);
        this.weakLightState = new WeakLightState(this);
        this.strongLightState = new StrongLightState(this);
        this.button = null;
    }

    init() {
        const button = document.createElement('button');
        button.innerHTML = 'button';
        this.button =  document.body.appendChild(button);

        this.curState = this.offLightState;
        this.button.onclick = () => {
            this.curState.buttonWasPressed();
        }
    }

    setState(newState) {
        this.curState = newState;
    }

    buttonWasPressed() {
        if (this.state === 'off') {
            console.log('weak light');
            this.state = 'weakLight'
        } else if (this.state === 'weakLight') {
            console.log('strong light');
            this.state = 'strongLight';
        } else if (this.state === 'strongLight') {
            console.log('ligth off');
            this.state === 'off';
        }
    }

}

const light = new Light();
light.init();
