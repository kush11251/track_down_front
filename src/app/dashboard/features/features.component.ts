import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  showAll = false;

  features = [
    {
      title: 'Real-Time Analytics',
      description:
        'Track project progress, monitor team performance, and make data-driven decisions with comprehensive analytics dashboards.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />`,
    },
    {
      title: 'Team Collaboration',
      description:
        'Facilitate seamless communication, share files, and collaborate in real-time with your team members regardless of location.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3m-4-4h4v4h-4m0 0l-4-4m0 0V4a1 1 0 00-1-1H5a1 1 0 00-1 1v16h5v-4h4z" />`,
    },
    {
      title: 'API Integration',
      description:
        'Connect with your favorite tools and services through our powerful API, creating a unified workflow for your team.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 8c0-1.1-.9-2-2-2s-2 .9-2 2v4h4V8zm-2 10a6 6 0 100-12 6 6 0 000 12zm6-6h2m-2 0v4m0-4l2 2" />`,
    },
    {
      title: 'Role-Based Access',
      description:
        'Assign specific permissions to each team member and manage data security with ease and flexibility.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />`,
    },
    {
      title: 'Cloud Storage',
      description:
        'Securely upload, manage, and share documents and assets with integrated cloud storage support.',
      icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 018-2 4 4 0 011 7.9H5a4 4 0 01-2-5.9z" />`,
    },
  ];

}
