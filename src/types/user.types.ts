export interface IUser {
  readonly _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  image: string | null;
  phone: string;
  gender: "Male" | "Female";
  address: string;
  nationality: string;
  dob: string;
  nearestLocation: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
}
