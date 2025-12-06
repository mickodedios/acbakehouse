import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-directory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-directory.component.html',
  styleUrl: './employee-directory.component.css'
})
export class EmployeeDirectoryComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  selectedDepartment: string = 'All';
  selectedStatus: string = 'All';
  searchTerm: string = '';
  
  departments: string[] = ['All', 'Management', 'Kitchen', 'Front of House', 'Marketing', 'Logistics'];
  statuses: string[] = ['All', 'Active', 'On Leave', 'Probation'];

  constructor(private employeeServices: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeServices.getEmployees();
    this.filteredEmployees = this.employees;
  }

  filterEmployees(): void {
    this.filteredEmployees = this.employees.filter(emp => {
      const matchesDepartment = this.selectedDepartment === 'All' || 
                               emp.department === this.selectedDepartment;
      const matchesStatus = this.selectedStatus === 'All' || 
                           emp.employmentStatus === this.selectedStatus;
      const matchesSearch = emp.fullName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           emp.position.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      return matchesDepartment && matchesStatus && matchesSearch;
    });
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Active': return 'badge bg-success';
      case 'On Leave': return 'badge bg-warning text-dark';
      case 'Probation': return 'badge bg-info';
      default: return 'badge bg-secondary';
    }
  }

  formatSalary(salary: number): string {
    return '₱' + salary.toLocaleString();
  }

  getTotalEmployees(): number {
    return this.employees.length;
  }

  getActiveEmployees(): number {
    return this.employees.filter(emp => emp.employmentStatus === 'Active').length;
  }

  getAverageSalary(): string {
    const total = this.employees.reduce((sum, emp) => sum + emp.salary, 0);
    const avg = total / this.employees.length;
    return '₱' + Math.round(avg).toLocaleString();
  }
}
