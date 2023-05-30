interface Adder{
    add(nr: number):void;
    getSum():number;
}

class CharCounter{
    constructor(protected adder:Adder){}
    addWordCharacters(word:string):void{
        this.adder.add(word.length);
    }
    getCharacterCount(){
        return this.adder.getSum();
    }
}

class StoringAdder implements Adder{
    protected store:number[]=[];
    add(nr:number){
        this.store.push(nr);
    }
    getSum(): number {
        let sum:number=0;
        for(let amount of this.store){sum+=amount;}
        return sum;
    }
    getAverage(){
        if(this.store.length>0){
            return this.getSum()/this.store.length;
        }
        return 0;
    }
    getRange(){
        if(this.store.length==0){return 0;}
        let minimum:number=this.store[0];
        let maximum:number=minimum;
        for(let amount of this.store){
            if(amount<minimum){minimum=amount;}
            if(amount>maximum){maximum=amount;}
        }
        return maximum-minimum;
    }
}

export{
    StoringAdder
}