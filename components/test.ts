
export function test(){
    type createMutable<Type> ={
        -readonly [Property in keyof Type]:Type[Property];
      }
}

rf