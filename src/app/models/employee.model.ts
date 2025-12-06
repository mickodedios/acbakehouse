export interface Employee {
  employeeNumber: string;
  fullName: string;
  gender: 'Male' | 'Female' | 'Other';
  email: string;
  employmentStatus: 'Active' | 'On Leave' | 'Probation';
  salary: number;
  position: string;
  department: string;
  joinDate: string;
  imageUrl?: string;
}