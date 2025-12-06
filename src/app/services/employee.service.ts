import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      employeeNumber: 'EMP001',
      fullName: 'Micko de Dios',
      gender: 'Male',
      email: 'mickodedios@gmail.com',
      employmentStatus: 'Active',
      salary: 85000,
      position: 'Founder & Head Baker',
      department: 'Management',
      joinDate: '2019-03-15',
      imageUrl: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-1/536010463_2366260300495903_7502709945338382846_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=u82qaYpucQQQ7kNvwGSUUOA&_nc_oc=Adn5OiMVREH_msmkD8kEevCAOIkoX5TUgM9BfH_qEFTjD3Xsetj-pmEUumPmRnWIsNuMcHrQznJRYjCoJuZqVik6&_nc_zt=24&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=kYEuHjm6Lk0UrPsxIIHNeg&oh=00_AflaCRwaJIE7y8ASQQv2EdLMvAFb-H8N9TztyGOtqqf6Ig&oe=69395832'
    },
    {
      employeeNumber: 'EMP002',
      fullName: 'Kyle Lising',
      gender: 'Male',
      email: 'kylelising@gmail.com',
      employmentStatus: 'Active',
      salary: 65000,
      position: 'Pastry Chef',
      department: 'Kitchen',
      joinDate: '2019-03-15',
      imageUrl: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-1/505167076_2600033723672106_1045913096741039409_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=mUFn0JVJnC0Q7kNvwFB5Y_G&_nc_oc=Adl2wMKDXiFN0xEIGnn-5XUOX2daDtARXM0bj_EYAtyUKVx8Nt04hkhVB0OxVXmRrEn2Kbga9Ar_PjoWsEvouZLV&_nc_zt=24&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=cf9FgDRlOnXJ6jB_vHiMYQ&oh=00_Aflw1SPxc9v0I7ntYaQNY_gzvbqXlMVn-GRcVg6ICT7TUQ&oe=69397FEA'
    },
    {
      employeeNumber: 'EMP003',
      fullName: 'Christian Miranda',
      gender: 'Male',
      email: 'cjmiranda@gmail.com',
      employmentStatus: 'Active',
      salary: 58000,
      position: 'Sous Chef',
      department: 'Kitchen',
      joinDate: '2019-03-15',
      imageUrl: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-1/444485873_1445604389409880_5004469724285148512_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=LSduowPetCQQ7kNvwFQIuwe&_nc_oc=Admk5DPMvU2Tezl4UtzjAK_ftCIlpa4jHeG3hkR-DNpCpIAj85KQRQdAGeQ5u2Pz7-e34xfzlF-5Q5Rx9f1oJkPj&_nc_zt=24&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=KcXlTgBw7IMQrpvjvZ6NVQ&oh=00_Afktq-TGFsOh3hZ7_E7YsA2bmMmpbJBnYBtwQ2VCdK-A-w&oe=69395467'
    },
    {
      employeeNumber: 'EMP004',
      fullName: 'Oliver Sazon',
      gender: 'Male',
      email: 'oliversazon@gmail.com',
      employmentStatus: 'Active',
      salary: 72000,
      position: 'Operations Manager',
      department: 'Management',
      joinDate: '2019-03-15',
      imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.cEvbluCvNFD_k4wC3k-_UwHaHa?pid=Api&P=0&h=180'
    },
    {
      employeeNumber: 'EMP005',
      fullName: 'Aaron John Yumul',
      gender: 'Male',
      email: 'aaronyumul@gmail.com',
      employmentStatus: 'On Leave',
      salary: 45000,
      position: 'Barista',
      department: 'Front of House',
      joinDate: '2020-11-01',
      imageUrl: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-1/446810575_2599404823561667_167754085325590649_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=HSaFYOSRw7EQ7kNvwH53dYL&_nc_oc=Adml8bfyhzFVVmbWMC_JkvTzA6HaZMc4T454lj_dMmPEzSSMepFMC-ThUngpvZXcEgKA1SMxXVz4zJChI2RfJeMd&_nc_zt=24&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=0mJDo6velrswhKtIXbalUw&oh=00_Afl5WaQ7BS3gGbl_BiLqQlmj4oCZI11S8pO20-a6Go6-QQ&oe=69395A0A'
    },
    {
      employeeNumber: 'EMP006',
      fullName: 'Aishley Bundalian',
      gender: 'Female',
      email: 'aishleybundalian@gmail.com',
      employmentStatus: 'On Leave',
      salary: 42000,
      position: 'Customer Service',
      department: 'Front of House',
      joinDate: '2020-05-12',
      imageUrl: 'https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-1/557542576_2712812495734859_3916036448608608845_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=NuasaiVTkScQ7kNvwGEi0Di&_nc_oc=AdllhaN8mjr32s6Eho4UnOHFStV0B02dpKal8guKGwXN4DZV9Y2ya_D61_Xp35MznKlTk8s65IGfnH6UY-ShLcn9&_nc_zt=24&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=5Aq0iEpFccQf-Joi7KpQmw&oh=00_Afl1wztmBHmr9aQo5EAe7AJvHZMszkedoDNIvm7bKvRbMQ&oe=69396AA0'
    },
    {
      employeeNumber: 'EMP008',
      fullName: 'David Tulio',
      gender: 'Male',
      email: 'davidtulio@gmail.com.com',
      employmentStatus: 'On Leave',
      salary: 38000,
      position: 'Junior Baker',
      department: 'Kitchen',
      joinDate: '2022-10-01',
      imageUrl: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-1/504500458_1894543664423428_947914473265859140_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=bnLv6BAKp0gQ7kNvwE5QnL3&_nc_oc=AdkhwG_GYa5ii1DJ1dutZzcT6uh-uiPsxVX0I23nz1NuGfXLKSfUB1bI9dcyDJ5B3hcHvjFhV2JL7W_SPknqbU9q&_nc_zt=24&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=2VaeuxMbpU_HUYvtyMYuPg&oh=00_AfnOCxkSFupWxm1U6GKEmv6Zwsvoc8v73dVij7cCia8Zbg&oe=693952DE'
    },
    {
      employeeNumber: 'EMP009',
      fullName: 'Andrew Cayanan',
      gender: 'Male',
      email: 'andrewcayanan@gmail.com',
      employmentStatus: 'Probation',
      salary: 68000,
      position: 'Marketing Director',
      department: 'Marketing',
      joinDate: '2023-07-18',
      imageUrl: 'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-1/447281622_2767155676783879_5536214549726617539_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=NwjARl_SjK8Q7kNvwFntObI&_nc_oc=AdnDhwbLgma0f9HVkMjyZqlhk7A2BtPTj7yfil5M1V_ZqXUakMTo-k76ug8LY2g4RqP7WO5lHJjNz_IIvi_JoD-u&_nc_zt=24&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=1ndtxzhjKNfmW5z2ikhvlw&oh=00_AfnU0HE3fqavi4XCL7HsRACXvk0mHbKQOI60wq0D7dbIQA&oe=69395F5C'
    },
    {
      employeeNumber: 'EMP010',
      fullName: 'Ryzen Guerrero',
      gender: 'Male',
      email: 'ryzenguerrero@gmail.com',
      employmentStatus: 'Probation',
      salary: 48000,
      position: 'Delivery Coordinator',
      department: 'Logistics',
      joinDate: '2023-02-14',
      imageUrl: 'https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-1/582533538_1604670977612257_5106986122834332361_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=kY4DZ0LrM_wQ7kNvwGyiPZa&_nc_oc=AdnBwTWrmJTGnuWt-TKN40VFpoLo0fNMcCnPDSsxxVSN1zNoo50NvpV1sCN1_hGtTomNVKzTVqCv7l1h2Wg5n3SG&_nc_zt=24&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=CUzqfjtGqAEYPufyg34rGg&oh=00_AfkTd29nfD6ELQ5GgOfuXRK80jSeCy9L2keJchZgwOp_HA&oe=69394F56'
    }
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getActiveEmployees(): Employee[] {
    return this.employees.filter(emp => emp.employmentStatus === 'Active');
  }

  getEmployeesByDepartment(department: string): Employee[] {
    return this.employees.filter(emp => emp.department === department);
  }
}