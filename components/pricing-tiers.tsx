const PricingTiers = () => {
  const tiers = [
    {
      name: "3 Credits",
      price: 39,
      credits: 3,
      avgCost: 13,
      savingsMessage: "For those who are just getting started with their creative journey: Save up to $6 on 1-3 creative sessions per month",
    },
    {
      name: "4 Credits",
      price: 49,
      credits: 4,
      avgCost: 12.25,
      savingsMessage: "For advanced creatives and hobbyists: Save up to $11 on 1-4 creative sessions per month",
    },
    {
      name: "6 Credits",
      price: 69,
      credits: 6,
      avgCost: 11.50,
      savingsMessage: "For professional builders, creators, and thinkers: Save up to $21 on 1-6 classes per month",
    },
  ];

  return (
    <div className="w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 mb-6 md:mb-20">
      {/*<h2 className="text-center text-2xl font-semibold mb-12">Available Plans</h2>*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col p-8 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg w-full min-w-[300px]"
          >
            <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
            <div className="text-3xl font-bold mb-4">${tier.price}<span className="text-base font-normal">/month</span></div>
            <ul className="space-y-3 mb-6">
              <li>{tier.savingsMessage}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTiers;