
export class User{
    public id         : number;
    public name       : String;
    public username   : String;
    public email      : String;
    public phone      : String; 
    public website    : String; 
    public address    : Address; 
    public company    : Company;
}

export class Address{
    public street     : String;
    public city       : String;
    public zipcode    : String;
    public geo        : Geo;
}

export class Company{
    public name           : String;
    public catchPhrase    : String;
    public bs             : String;
}

export class Geo{
    public lat            : String;
    public lng            : String;
}

export class Todo{
    public userId       : number;
    public id           : number;
    public title        : String;
    public completed    : boolean;
}
