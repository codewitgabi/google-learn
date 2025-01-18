export interface IUserCardProps {
  id: string | number;
  name: string;
  username: string;
  address: {
    street: string;
    city: string;
  };
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

export interface IUserGridProps {
  users: Promise<IUserCardProps[]>;
}
