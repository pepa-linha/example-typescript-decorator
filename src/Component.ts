export function Component(value: Object) {
  return function (target: Function) {
      //Reflect.defineMetadata("MyClassDecorator", value, target);
  }
}

@Component({
    foo: "bar"
})
export abstract class BaseComponent {
    constructor() {
        console.log("Constructor");
    }

    abstract create();
}