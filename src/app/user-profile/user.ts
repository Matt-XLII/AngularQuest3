export class user {
  name: string;
  firstname: string;
  age: number;
  quote: string;
  photo: string;
  isAgeHidden: boolean;

  constructor(name: string, firstname: string, age: number, quote: string, photo: string, isAgeHidden: boolean = false) {
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
    this.isAgeHidden = isAgeHidden;
  }

  hideAge = () => {
    this.isAgeHidden = !this.isAgeHidden;
  }
}
