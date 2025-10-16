export type User = {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  login: {
    username: string;
  };
  dob: {
    date: Date;
    age: number;
  };
  phone: string;
  id: {
    value: string;
  };
  picture: {
    medium: string;
  };
};
