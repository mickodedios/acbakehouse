import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  milestones = [
    { year: '2019', title: 'The Beginning', description: 'Micko de Dios, Kyle Lising, Oliver Sazon, and Christian Miranda open AC Bakehouse, bringing their creativity and passion to local baking.' },
    { year: '2021', title: 'Signature Treat', description: 'The famous Passionfruit Donut becomes a customer favorite.' },
    { year: '2023', title: 'Expanding Flavors', description: 'Introduced new pastries, breads, and seasonal specialties to delight more customers.' },
    { year: '2024', title: 'Growing Popularity', description: 'AC Bakehouse becomes a beloved destination in Angeles City, gaining loyal local and online fans.' },
  ];

  values = [
    {
      icon: 'bi-heart-fill',
      title: 'Made with Love',
      description: 'Every product is handcrafted with care and passion'
    },
    {
      icon: 'bi-star-fill',
      title: 'Quality First',
      description: 'We use only the finest, freshest ingredients available'
    },
    {
      icon: 'bi-people-fill',
      title: 'Community Focus',
      description: 'Supporting local farmers and giving back to our community'
    },
    {
      icon: 'bi-award-fill',
      title: 'Excellence',
      description: 'Committed to maintaining the highest standards in everything we do'
    }
  ];
}