import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Michael Johnson',
      position: 'CTO, TechInnovate',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text:
        'Project Control has revolutionized how we manage our development projects. The intuitive interface and powerful features have increased our team\'s productivity by 40%.',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      position: 'Project Manager, GlobalTech',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text:
        'The organization dashboard gives us perfect visibility across all our teams. We\'ve reduced meeting time by 30% because everyone has the information they need at their fingertips.',
      rating: 5,
    },
    {
      name: 'David Chen',
      position: 'Founder, NextWave',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
      text:
        'As a startup, we needed something flexible that could grow with us. Project Control\'s pricing allowed us to start small and scale as our team expanded.',
      rating: 4,
    },
  ];

}
