import React from 'react';

const features = [
  {
    name: 'AI-Powered Documentation',
    devscribe: true,
    swagger: false,
    postman: false,
    readme: false,
  },
  {
    name: 'Real-time API Testing',
    devscribe: true,
    swagger: false,
    postman: true,
    readme: false,
  },
  {
    name: 'Custom Branding',
    devscribe: true,
    swagger: false,
    postman: false,
    readme: false,
  },
  {
    name: 'Team Collaboration',
    devscribe: true,
    swagger: false,
    postman: true,
    readme: false,
  },
  {
    name: 'Version Control',
    devscribe: true,
    swagger: false,
    postman: true,
    readme: true,
  },
  {
    name: 'API Analytics',
    devscribe: true,
    swagger: false,
    postman: true,
    readme: false,
  },
  {
    name: 'Multiple API Support',
    devscribe: true,
    swagger: true,
    postman: true,
    readme: true,
  },
  {
    name: 'Interactive Documentation',
    devscribe: true,
    swagger: true,
    postman: false,
    readme: false,
  },
];

const FeatureComparison = () => {
  return (
    <div className="relative py-24 bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Compare with the Competition
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            See how Devscribe stands out from other API documentation tools
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-6 text-left text-foreground font-semibold">Features</th>
                <th className="py-4 px-6 text-center text-foreground font-semibold">Devscribe</th>
                <th className="py-4 px-6 text-center text-foreground font-semibold">Swagger</th>
                <th className="py-4 px-6 text-center text-foreground font-semibold">Postman</th>
                <th className="py-4 px-6 text-center text-foreground font-semibold">ReadMe</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index}
                  className={`border-b border-border ${
                    index % 2 === 0 ? 'bg-card/50' : 'bg-background'
                  }`}
                >
                  <td className="py-4 px-6 text-foreground">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.swagger ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/20 text-destructive">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.postman ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/20 text-destructive">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.readme ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/20 text-destructive">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison; 