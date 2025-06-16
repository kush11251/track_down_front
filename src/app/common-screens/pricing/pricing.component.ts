import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  members = 5;
  selectedPlan = 'pro';

  plans = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      maxMembers: 5,
      features: ['1 User', 'Basic Support', 'Limited Projects'],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 15,
      maxMembers: 300,
      features: ['Up to 100 Users', 'Priority Support', 'Unlimited Projects'],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 30,
      maxMembers: 300,
      features: ['Unlimited Users', 'Dedicated Success Manager', 'Advanced Reports'],
    },
  ];

  get totalPrice(): number {
    const plan = this.plans.find((p) => p.id === this.selectedPlan);
    return plan ? plan.price * this.members : 0;
  }

  get maxMembers(): number {
    const plan = this.plans.find((p) => p.id === this.selectedPlan);
    return plan?.maxMembers || 1;
  }

  get displayMembers(): string {
    return this.selectedPlan === 'enterprise' && this.members >= 300 ? '300+' : this.members.toString();
  }
}
