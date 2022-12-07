export const testFun=()=>{
    let arr: string[number,boolean,string]=[1,true,"badr"];
    let graph:[x:number]=[123]
    const car:{type:string}={
        type:"badr"
    }
    const car2:{[index:string]:string}={
        name:"badr"
    }
    enum numbers{
        number0,
        number1=1,
        number2="two"
    }
    type carBrand=string;
    type car={
        brand:string,
        model:string

    }
    interface bycle{
        barand:string;
        model:string;
    }
    interface newBycle extends bycle {
        year:number | string
    }
    const myBycle:newBycle={
        barand:"barand1",
        model:"model1",
        year:2022
    }

    function testfunc(a:number,...rest:number[]):number{
        return 1
    }

    type funType=(a:number)=>number
    const funUseType:funType=(a)=>a*5

    //Partial :change all proberties in object to be optional
    //Required:change all proberties in object to be required
    interface train{
        model:string;
        brand:number,
        year:number
    }
    let train1:Partial<train>={} 
    ////////////////////////
    //Record is a shortcut to defining an object type with a specific key type and value type.
    const nameAgeMap: Record<string, number> = {
        'Alice': 21,
        'Bob': 25
      };
   /////////////////////////
   //Omit :removes keys from an object type.
    let tarin2:Omit<train,'year'|'brand'>={
        model:"badr"
    }
   ////////////////
   //Pick:removes all but the specified keys from an object type
   const train3:Pick<train,'model'>={
    model:"badr"
   }


   


}