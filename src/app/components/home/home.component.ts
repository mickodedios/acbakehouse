import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredProducts = [
    {
      name: 'Passionfruit Donut',
      description: 'Our signature donut with fresh passionfruit glaze',
      price: 89,
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=500&fit=crop',
      badge: 'Bestseller'
    },
    {
      name: 'Chocolate Croissant',
      description: 'Buttery croissant filled with rich chocolate',
      price: 95,
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=500&fit=crop',
      badge: 'New'
    },
    {
      name: 'Artisan Sourdough',
      description: 'Handcrafted sourdough bread baked daily',
      price: 150,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=500&fit=crop',
      badge: null
    }
  ];

  testimonials = [
    {
      name: 'Chris Almocera',
      rating: 5,
      text: 'The best bakery in Angeles City! Their passionfruit donuts are absolutely divine.',
      image: 'https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-1/353628967_6682089205142863_4944535174973145316_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=zeMCs3LIeKoQ7kNvwFftH9A&_nc_oc=AdlFyJsJdnmPpgowIyXblhHbFSl9I0PX04dRnSNj7NmNmOC5ExVAXI7mv0bNQzkqjo5mdZ3-5dMQUrEbpnGvKwj-&_nc_zt=24&_nc_ht=scontent.fmnl4-6.fna&_nc_gid=ZPOn0nd_8Ih5iblAyEs6cg&oh=00_Afk3ZIhy1NLQbr3zncqCE1HYRwijEQG-_Lozp5jmhg5Pvw&oe=6939761C'
    },
    {
      name: 'Joseph Esquivel',
      rating: 5,
      text: 'Fresh ingredients, amazing taste, and wonderful service. Highly recommended!',
      image: 'https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.6435-1/154260185_10226774348244021_7013952614953600412_n.jpg?stp=c27.0.661.661a_dst-jpg_s100x100_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WQUuLpnAAzQQ7kNvwE8EzEw&_nc_oc=AdnR967Ys-6kfQxFwmZLpENEwMpjVyd7GDa6mPYaxBByuAtLg4aZ14V7hJYhlQ1K4wbXqgRVPrIPh9EeC9z2_YaQ&_nc_zt=24&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=ASK9aUFhvZwDiARG5qSVTw&oh=00_AfnYkzG2MADn_4o4mqh-0jL8kMHxdPmJ7Qf3gdu-M8NQKA&oe=695B05FF'
    },
    {
      name: 'Jonilo Mababa',
      rating: 5,
      text: 'My family loves their croissants. We order every weekend without fail!',
      image: 'https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-1/495387522_10221265231859048_367252224381805666_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=3TBaAz1pbOAQ7kNvwEWESKY&_nc_oc=AdkNy4kUxC7pbsgP98tO7DOriJ2ZBIjgeZH2an7gNGjNdUjsskjeTQ2yiFJY-ZUkoeKSJcuwCAELsKPizwGSdXqw&_nc_zt=24&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=JLHGHpGENbkTOP61-c--4A&oh=00_AfmKP9xkkapAko0wQO9pzU3DbHZYL3GJmV8OThBQ1FaKEQ&oe=69396F43'
    }
  ];
}
