import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // ✅ corrected
})
export class ProductsComponent {
  selectedCategory: string = 'All';

  categories = ['All', 'Donuts', 'Pastries', 'Breads', 'Cakes', 'Beverages'];

  products: Product[] = [
    {
      id: 1,
      name: 'Passionfruit Donut',
      description: 'Our signature donut with fresh passionfruit glaze and filling',
      price: 89,
      category: 'Donuts',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500',
      isBestseller: true
    },
    {
      id: 2,
      name: 'Chocolate Glazed Donut',
      description: 'Classic donut topped with rich chocolate glaze',
      price: 75,
      category: 'Donuts',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500'
    },
    {
      id: 3,
      name: 'Strawberry Donut',
      description: 'Fluffy donut with strawberry glaze and fresh strawberry pieces',
      price: 85,
      category: 'Donuts',
      image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=500'
    },
    {
      id: 4,
      name: 'Chocolate Croissant',
      description: 'Buttery croissant filled with premium dark chocolate',
      price: 95,
      category: 'Pastries',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500',
      isNew: true
    },
    {
      id: 5,
      name: 'Almond Croissant',
      description: 'Flaky croissant filled with almond cream and topped with sliced almonds',
      price: 98,
      category: 'Pastries',
      image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=500'
    },
    {
      id: 6,
      name: 'Cheese Danish',
      description: 'Sweet pastry with cream cheese filling and fruit topping',
      price: 92,
      category: 'Pastries',
      image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500'
    },
    {
      id: 7,
      name: 'Artisan Sourdough',
      description: 'Handcrafted sourdough bread with crispy crust',
      price: 150,
      category: 'Breads',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
      isBestseller: true
    },
    {
      id: 8,
      name: 'Baguette',
      description: 'Traditional French bread, perfect for any meal',
      price: 120,
      category: 'Breads',
      image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?w=500'
    },
    {
      id: 9,
      name: 'Whole Wheat Bread',
      description: 'Healthy whole wheat loaf, baked fresh daily',
      price: 110,
      category: 'Breads',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500'
    },
    {
      id: 10,
      name: 'Chocolate Cake',
      description: 'Rich chocolate layer cake with chocolate ganache',
      price: 850,
      category: 'Cakes',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500'
    },
    {
      id: 11,
      name: 'Strawberry Shortcake',
      description: 'Light sponge cake with fresh strawberries and cream',
      price: 780,
      category: 'Cakes',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500',
      isNew: true
    },
    {
      id: 12,
      name: 'Red Velvet Cake',
      description: 'Classic red velvet with cream cheese frosting',
      price: 820,
      category: 'Cakes',
      image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=500'
    },
    {
      id: 13,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam',
      price: 120,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500'
    },
    {
      id: 14,
      name: 'Iced Latte',
      description: 'Smooth espresso with cold milk over ice',
      price: 130,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500'
    },
    {
      id: 15,
      name: 'Hot Chocolate',
      description: 'Rich hot chocolate topped with whipped cream',
      price: 110,
      category: 'Beverages',
      image: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?w=500'
    }
  ];

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  getCategoryCount(category: string): number {
    if (category === 'All') return this.products.length;
    return this.products.filter(p => p.category === category).length;
  }

  formatPrice(price: number): string {
    return '₱' + price.toLocaleString();
  }
}
