import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      icon: 'check-circle',
      title: 'Real-time Collaboration',
      description: 'Work together with your team seamlessly, in real-time across all devices.',
    },
    {
      icon: 'shield-check',
      title: 'Enterprise Security',
      description: 'Advanced encryption and role-based access to keep your data safe.',
    },
    {
      icon: 'bolt',
      title: 'Lightning Fast',
      description: 'Optimized performance ensures your projects run like a breeze.',
    },
    {
      icon: 'adjustments-horizontal',
      title: 'Customizable Workflows',
      description: 'Tailor your tools and process to match your team’s work style.',
    },
    {
      icon: 'cloud',
      title: 'Cloud Sync',
      description: 'Automatically sync data to the cloud and access it anywhere.',
    },
    {
      icon: 'chart-bar',
      title: 'Analytics & Reports',
      description: 'Get actionable insights to improve productivity and efficiency.',
    },
  ];
}
