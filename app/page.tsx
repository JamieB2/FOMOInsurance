import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                FOMO Insurance
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                  How It Works
                </Link>
                <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                  FAQ
                </Link>
                <Link
                  href="/app"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Launch dApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-blue-600 leading-tight mb-6">FOMO Insurance</h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700 mb-8 font-medium">Cash out without missing out</h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                FOMO Insurance lets you sell your crypto while keeping a share of the upside if it rallies later. You
                get liquidity now, and peace of mind for what comes next.
              </p>
              <Link href="/app">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors">
                  Launch dApp
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-600 font-medium">Secure • Transparent • Decentralized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Seller Flow */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-32">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">How It Works</h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              <Image
                src="/images/create-policy-screenshot.png"
                alt="Create Policy Interface"
                width={800}
                height={600}
                className="h-auto rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Set your terms</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Choose your haircut, duration, and upside share. Customize the policy to match your risk tolerance
                      and market outlook.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Get liquidity</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Instantly receive stablecoins via a gasless swap. Your crypto is converted to USDC while your
                      policy is activated.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Stay covered</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If the price goes up, you'll still receive a piece of the rally. Your policy automatically settles
                      at expiry based on performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Flow Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-32">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Not cashing out? Make your crypto work and earn instant yield
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="space-y-12">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Browse policies for your desired risk tolerance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Explore available policies in the marketplace and find opportunities that match your investment
                      strategy and risk appetite.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Purchase a policy and make instant profit
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Buy a policy that aligns with your outlook and immediately earn the difference between the policy
                      price and current market value.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200"></div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      After the duration of the policy, receive the tokens
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      At expiry, receive the underlying tokens at the agreed price, potentially at a significant
                      discount to market value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/policy-marketplace-screenshot.png"
                alt="Policy Marketplace Interface"
                width={800}
                height={600}
                className="h-auto rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Powered by Etherlink Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image src="/images/etherlink-logo.svg" alt="Etherlink Logo" width={80} height={80} className="w-20 h-20" />
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-8">Powered by Etherlink</h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            FOMO Insurance is built on Etherlink, a fast, low-fee Layer 2 network for Ethereum. Etherlink enables:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant, gasless transactions</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High throughput for smooth UX</h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Ethereum compatibility</h3>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We're using Etherlink to deliver a faster, cheaper, and more reliable experience.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                What is FOMO Insurance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                FOMO Insurance is a decentralized protocol that allows you to sell your crypto holdings while
                maintaining exposure to potential upside. It's designed to eliminate the fear of missing out by
                providing structured optionality after you've taken profits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                What tokens are supported?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                We currently support major cryptocurrencies including ETH, BTC, and select ERC-20 tokens. Our supported
                token list is continuously expanding based on liquidity and community demand.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                What happens at expiry?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                At expiry, your policy automatically settles based on the token's performance. If the price increased
                beyond your strike, you'll receive your share of the upside in addition to the initial payout you
                received when creating the policy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                What if the price doesn't go up?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                If the token price doesn't exceed your strike price by expiry, your policy expires worthless, but you
                keep the full initial payout. This means you successfully sold at a good time and avoided further
                downside.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                How does the swap work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                The swap is executed through our smart contract system, which interfaces with decentralized exchanges to
                provide competitive rates. The process is gasless for users, with fees built into the policy structure
                for a seamless experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-900 font-bold text-lg">FOMO Insurance</div>
            <div className="flex space-x-8">
              <Link href="/app" className="text-gray-600 hover:text-blue-600 transition-colors">
                App
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
            © 2024 FOMO Insurance. Powered by Etherlink.
          </div>
        </div>
      </footer>
    </div>
  )
}
