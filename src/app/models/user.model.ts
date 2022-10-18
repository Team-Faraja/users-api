export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    id: number;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      id: 1;
      lat: -37.3159;
      lng: 81.1496;
    };
  };
  phone: string;
  website: string;
  company: {
    id: number;
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
