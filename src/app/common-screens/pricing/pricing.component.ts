import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  selectedPlan = 'free';
  members = 1;
  maxMembers = 100;
  totalPrice = 0;

  plans = [
    {
      id: 'free',
      name: 'Starter',
      price: 0,
      features: ['Basic analytics', 'Community support']
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 300,
      features: ['Advanced insights', 'Email support', 'Unlimited members']
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 500,
      features: ['Custom dashboards', 'Dedicated support', 'Integration with Jira & Slack']
    }
  ];

  get displayMembers(): number {
    return this.members;
  }

  updatePrice() {
    const plan = this.plans.find(p => p.id === this.selectedPlan);
    this.totalPrice = plan?.price ? plan.price * this.members : 0;
  }

  selectPlan(planId: string) {
    this.selectedPlan = planId;
    this.members = 1; // reset to default
    this.updatePrice();
  }
}
