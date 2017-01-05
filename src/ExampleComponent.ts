import {Component, BaseComponent} from "./Component";

@Component({
    foo: "bar2"
})
export class ExampleComponent extends BaseComponent {
    
    create() {
        console.log("Create");
    }

}