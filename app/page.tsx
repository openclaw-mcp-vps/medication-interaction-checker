export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Health Safety Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Check supplement&#8209;medication<br />interactions instantly
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Scan your medication list against supplements and foods for dangerous interactions.
          Get instant alerts before something goes wrong.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No hidden fees.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💊</div>
            <h3 className="font-semibold text-white mb-1">Medication Database</h3>
            <p className="text-sm text-[#8b949e]">Thousands of drugs, supplements, and foods cross-referenced for interactions.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚠️</div>
            <h3 className="font-semibold text-white mb-1">Instant Alerts</h3>
            <p className="text-sm text-[#8b949e]">Email notifications the moment a dangerous combination is detected in your list.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">👤</div>
            <h3 className="font-semibold text-white mb-1">Personal Profiles</h3>
            <p className="text-sm text-[#8b949e]">Save your medication list and get ongoing monitoring as new interactions are discovered.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited interaction checks</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email alerts for new interactions</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Save up to 5 medication profiles</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Supplement &amp; food cross-checks</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Priority support</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is this a replacement for medical advice?</h3>
            <p className="text-sm text-[#8b949e]">No. MedCheck is an informational tool to help you identify potential risks. Always consult your doctor or pharmacist before making changes to your medications.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How current is the interaction database?</h3>
            <p className="text-sm text-[#8b949e]">Our database is updated regularly from peer-reviewed sources and FDA drug interaction data to ensure you have the latest information.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel anytime from your account dashboard with no penalties or hidden fees. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} MedCheck. Not a substitute for professional medical advice.
      </footer>
    </main>
  );
}
