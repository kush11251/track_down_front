import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent implements AfterViewInit{
  @ViewChildren('planCards') planCards!: QueryList<ElementRef>;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

   plans = [
    {
      title: 'Free',
      description: 'For individuals & small teams',
      price: '$0/month',
      features: [
        'Up to 5 projects',
        'Basic analytics',
        '1 team member',
        'Community support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      title: 'Pro',
      description: 'For growing teams',
      price: '$29/month',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Up to 10 team members',
        'Priority email support',
        'API access'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      title: 'Enterprise',
      description: 'For large organizations',
      price: '$99/month',
      features: [
        'Unlimited everything',
        'Custom analytics',
        'Unlimited team members',
        '24/7 phone support',
        'Advanced security',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  ngAfterViewInit(): void {
    const cards = this.planCards.toArray();
    const middleCard = cards[1]?.nativeElement;

    // if (middleCard) {
    //   middleCard.scrollIntoView({ inline: 'center', behavior: 'smooth' });
    // }
  }
}
