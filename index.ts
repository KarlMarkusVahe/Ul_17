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

class SimpleAdder implements Adder{
    protected sum:number=0;
    add(nr:number){this.sum+=nr;}
    getSum(): number {
        return this.sum;
    }
}

let adder1:Adder=new SimpleAdder();
adder1.add(3);
adder1.add(5);
console.log(adder1.getSum());

let adder2:Adder=new SimpleAdder();
let counter2:CharCounter=new CharCounter(adder2);
counter2.addWordCharacters("Juku");
counter2.addWordCharacters("tuli");
counter2.addWordCharacters("kooli");
console.log(counter2.getCharacterCount());

class CountingAdder implements Adder{
    protected sum:number=0;
    protected count:number=0;
    add(nr:number){
        this.sum+=nr;
        this.count++;
    }
    getSum(): number {
        return this.sum;
    }
    getAverage(){
        if(this.count>0){
            return this.sum/this.count;
        }
        return 0;
    }
}

let adder3:CountingAdder=new CountingAdder();
let counter3:CharCounter=new CharCounter(adder3);
counter3.addWordCharacters("Juku");
counter3.addWordCharacters("tuli");
counter3.addWordCharacters("kooli");
console.log(counter3.getCharacterCount());
console.log(adder3.getAverage());

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

let adder4:StoringAdder=new StoringAdder();
let counter4:CharCounter=new CharCounter(adder4);
counter4.addWordCharacters("Juku");
counter4.addWordCharacters("tuli");
counter4.addWordCharacters("kooli");
console.log(counter4.getCharacterCount());
console.log(adder4.getAverage());
console.log(adder4.getRange());