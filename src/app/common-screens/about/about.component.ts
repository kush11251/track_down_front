import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Kussagra Pathak',
      position: 'CEO & Co-Founder',
      image: 'https://ucarecdn.com/f4d15d04-303f-48a4-9a87-9a9e67ef3640/-/preview/256x256/',
      bio: 'Visionary entrepreneur driving strategy and innovation with a focus on scalable digital ecosystems.',
    },
    {
      name: 'Poonam Pathak',
      position: 'CFO & Head of Design',
      image: 'https://ucarecdn.com/f4d15d04-303f-48a4-9a87-9a9e67ef3640/-/preview/256x256/',
      bio: 'Financial strategist with a passion for design, merging fiscal leadership with creative vision.',
    },
    {
      name: 'Sanskar Gupta',
      position: 'CTO & Co-Founder',
      image: 'https://ucarecdn.com/f4d15d04-303f-48a4-9a87-9a9e67ef3640/-/preview/256x256/',
      bio: 'Technology leader architecting secure, scalable, and high-performance infrastructure solutions.',
    },
    {
      name: 'Aabhas Gupta',
      position: 'CMO & Co-Founder',
      image: 'https://ucarecdn.com/f4d15d04-303f-48a4-9a87-9a9e67ef3640/-/preview/256x256/',
      bio: 'Marketing innovator focused on data-driven strategies and global brand positioning.',
    },
  ];
}
