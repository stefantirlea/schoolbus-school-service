export enum UserRole {
  ADMIN = 'admin',
  SCHOOL_ADMIN = 'school_admin',
  DRIVER = 'driver',
  PARENT = 'parent',
}

// This is a client-side entity just for typing purposes
// The actual data is managed by the auth service
export class User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  role: UserRole;
  firebaseUid?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}