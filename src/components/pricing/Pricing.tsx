import React from 'react';

interface BasePlan {
  name: 'Startup' | 'Enterprise';
  description: string;
  additionalDescription: string;
  features: string[];
  cta: string;
  popular: boolean;
}

interface TeamPlan extends BasePlan {
  name: 'Startup';
  baseMonthlyPrice: number;
  baseYearlyPrice: number;
}

interface EnterprisePlan extends BasePlan {
  name: 'Enterprise';
  monthlyPrice: string;
  yearlyPrice: string;
}

type Plan = TeamPlan | EnterprisePlan;

const plans: Plan[] = [
  {
    name: 'Startup',
    baseMonthlyPrice: 0,
    baseYearlyPrice: 0,
    description: 'Great for small teams and startups',
    additionalDescription: 'Automate your API docs workflow for free until you raise a Seed Round.',
    features: [
      'Documentation generation',
      'Custom Branding',
      'Chat assist search',
      'Basic analytics',
      'Github integration',
      'API testing playground',
    ],
    cta: 'Start with Startup',
    popular: false,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom Pricing',
    yearlyPrice: 'Custom Pricing',
    description: 'For large organizations',
    additionalDescription: 'Start paying and customize your solution when you\'ve grown beyond your seed funding. Pricing tailored to your company\'s specific needs and scale.',
    features: [
      'Unlimited team members',
      'End user authentication',
      'Custom analytics',
      '24/7 phone & chat support',
      'Enterprise integrations',
      'Dedicated account manager',
      'SSO Login',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const getPrice = (plan: Plan): string => {
    if (plan.name === 'Enterprise') {
      return 'Custom Pricing';
    }

    return '$0';
  };

  return (
    <div className="relative py-24 bg-background" id="pricing">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Free for startups, custom solutions for enterprises
          </p>
        </div>

        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6 lg:max-w-4xl lg:mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-xl backdrop-blur-sm border ${
                plan.popular
                  ? 'bg-primary/10 border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)] z-10'
                  : 'bg-card/50 border-border'
              } p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(var(--primary),0.2)]`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-primary px-4 py-1 text-sm font-semibold tracking-wide text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                    Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className={`text-2xl font-semibold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                  {plan.name}
                </h3>

                <p className={`mt-4 flex items-baseline ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                  <span className={`text-5xl font-extrabold tracking-tight`}>
                    {getPrice(plan)}
                  </span>
                  <span className={`ml-1 text-xl text-muted-foreground font-semibold`}>
                    {plan.name === 'Enterprise' ? '' : '/month'}
                  </span>
                </p>

                <p className="mt-6 text-base text-muted-foreground">
                  {plan.description}
                </p>

                <p className="mt-2 text-base text-muted-foreground italic">
                  {plan.additionalDescription}
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={`flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-muted-foreground">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full rounded-md px-4 py-2 text-base font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:shadow-[0_0_25px_rgba(var(--primary),0.65)] hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 