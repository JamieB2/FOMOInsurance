"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

// Mock data for policies
const mockPolicies = [
  {
    id: 1,
    token: "ETH",
    amount: "2.5",
    duration: 30,
    immediatePayout: 85,
    upsideShare: 25,
    usdValue: 4250,
    status: "Open",
  },
  {
    id: 2,
    token: "BTC",
    amount: "0.1",
    duration: 60,
    immediatePayout: 80,
    upsideShare: 30,
    usdValue: 6800,
    status: "Open",
  },
  {
    id: 3,
    token: "ETH",
    amount: "5.0",
    duration: 45,
    immediatePayout: 90,
    upsideShare: 20,
    usdValue: 8500,
    status: "Ongoing",
    purchasePrice: 1800,
    currentPrice: 1950,
    endDate: "2024-03-15",
  },
  {
    id: 4,
    token: "BTC",
    amount: "0.05",
    duration: 90,
    immediatePayout: 75,
    upsideShare: 35,
    usdValue: 3400,
    status: "Finished",
    purchasePrice: 68000,
    finalPrice: 72000,
    endDate: "2024-01-30",
  },
  {
    id: 5,
    token: "ETH",
    amount: "1.8",
    duration: 21,
    immediatePayout: 92,
    upsideShare: 18,
    usdValue: 3060,
    status: "Open",
  },
  {
    id: 6,
    token: "BTC",
    amount: "0.15",
    duration: 14,
    immediatePayout: 88,
    upsideShare: 22,
    usdValue: 10200,
    status: "Ongoing",
    purchasePrice: 70000,
    currentPrice: 68500,
    endDate: "2024-02-28",
  },
  {
    id: 7,
    token: "ETH",
    amount: "3.2",
    duration: 75,
    immediatePayout: 95,
    upsideShare: 15,
    usdValue: 5440,
    status: "Open",
  },
  {
    id: 8,
    token: "BTC",
    amount: "0.08",
    duration: 35,
    immediatePayout: 82,
    upsideShare: 28,
    usdValue: 5440,
    status: "Finished",
    purchasePrice: 65000,
    finalPrice: 63000,
    endDate: "2024-01-15",
  },
  {
    id: 9,
    token: "ETH",
    amount: "4.1",
    duration: 7,
    immediatePayout: 96,
    upsideShare: 12,
    usdValue: 6970,
    status: "Open",
  },
  {
    id: 10,
    token: "BTC",
    amount: "0.25",
    duration: 50,
    immediatePayout: 78,
    upsideShare: 32,
    usdValue: 17000,
    status: "Ongoing",
    purchasePrice: 69000,
    currentPrice: 71500,
    endDate: "2024-03-20",
  },
  {
    id: 11,
    token: "ETH",
    amount: "6.0",
    duration: 28,
    immediatePayout: 87,
    upsideShare: 26,
    usdValue: 10200,
    status: "Finished",
    purchasePrice: 1750,
    finalPrice: 2100,
    endDate: "2024-01-20",
  },
  {
    id: 12,
    token: "BTC",
    amount: "0.12",
    duration: 42,
    immediatePayout: 91,
    upsideShare: 19,
    usdValue: 8160,
    status: "Open",
  },
]

export default function AppPage() {
  // Form state
  const [amount, setAmount] = useState("")
  const [selectedToken, setSelectedToken] = useState("ETH")
  const [immediatePayout, setImmediatePayout] = useState([95])
  const [duration, setDuration] = useState([30])
  const [upsideShare, setUpsideShare] = useState([25])
  const [selectedScenario, setSelectedScenario] = useState(20)

  // Filter state
  const [payoutRange, setPayoutRange] = useState([75, 98])
  const [durationRange, setDurationRange] = useState([1, 90])
  const [upsideRange, setUpsideRange] = useState([10, 50])
  const [statusFilter, setStatusFilter] = useState({
    open: true,
    ongoing: true,
    finished: true,
  })

  // Calculate preview values
  const tokenPrice = selectedToken === "ETH" ? 1700 : selectedToken === "BTC" ? 68000 : 1
  const totalValue = Number.parseFloat(amount || "0") * tokenPrice
  const immediateReceive = totalValue * (immediatePayout[0] / 100)
  const exampleUpside = totalValue * 0.2 * (upsideShare[0] / 100)

  // Filter policies
  const filteredPolicies = mockPolicies.filter((policy) => {
    const statusMatch =
      (statusFilter.open && policy.status === "Open") ||
      (statusFilter.ongoing && policy.status === "Ongoing") ||
      (statusFilter.finished && policy.status === "Finished")

    const payoutMatch = policy.immediatePayout >= payoutRange[0] && policy.immediatePayout <= payoutRange[1]
    const durationMatch = policy.duration >= durationRange[0] && policy.duration <= durationRange[1]
    const upsideMatch = policy.upsideShare >= upsideRange[0] && policy.upsideShare <= upsideRange[1]

    return statusMatch && payoutMatch && durationMatch && upsideMatch
  })

  const isFormValid = amount && selectedToken

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-gray-900">FOMO Insurance</h1>
            <div className="flex items-center space-x-4">
              <Link href="/my-policies" className="text-gray-600 hover:text-gray-900">
                My Policies
              </Link>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Policy Creation Form */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Policy</h2>
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
              Etherlink Network
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Inputs */}
              <div className="space-y-8">
                {/* Token and Amount */}
                <div className="space-y-4">
                  <Label className="text-base font-medium text-gray-900">Token & Amount</Label>
                  <div className="flex space-x-3">
                    <div className="flex-1">
                      <Input
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="text-lg h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                      />
                    </div>
                    <Select value={selectedToken} onValueChange={setSelectedToken}>
                      <SelectTrigger className="w-32 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Token" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ETH">ETH</SelectItem>
                        <SelectItem value="BTC">BTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {amount && selectedToken && <p className="text-sm text-gray-600">≈ ${totalValue.toLocaleString()}</p>}
                </div>

                {/* Sliders */}
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label className="text-base font-medium text-gray-900">Immediate Payout</Label>
                      <span className="text-lg font-semibold text-blue-600">{immediatePayout[0]}%</span>
                    </div>
                    <Slider
                      value={immediatePayout}
                      onValueChange={setImmediatePayout}
                      max={98}
                      min={90}
                      step={1}
                      className="w-full [&_[data-radix-slider-track]]:bg-gray-200 [&_[data-radix-slider-range]]:bg-blue-600 [&_[data-radix-slider-thumb]]:bg-blue-600 [&_[data-radix-slider-thumb]]:border-blue-600 [&_[data-radix-slider-thumb]]:ring-0"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>90%</span>
                      <span>98%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label className="text-base font-medium text-gray-900">Coverage Duration</Label>
                      <span className="text-lg font-semibold text-blue-600">{duration[0]} days</span>
                    </div>
                    <Slider
                      value={duration}
                      onValueChange={setDuration}
                      max={90}
                      min={1}
                      step={1}
                      className="w-full [&_[data-radix-slider-track]]:bg-gray-200 [&_[data-radix-slider-range]]:bg-blue-600 [&_[data-radix-slider-thumb]]:bg-blue-600 [&_[data-radix-slider-thumb]]:border-blue-600 [&_[data-radix-slider-thumb]]:ring-0"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>1 day</span>
                      <span>90 days</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Label className="text-base font-medium text-gray-900">Upside Share</Label>
                      <span className="text-lg font-semibold text-blue-600">{upsideShare[0]}%</span>
                    </div>
                    <Slider
                      value={upsideShare}
                      onValueChange={setUpsideShare}
                      max={50}
                      min={10}
                      step={1}
                      className="w-full [&_[data-radix-slider-track]]:bg-gray-200 [&_[data-radix-slider-range]]:bg-blue-600 [&_[data-radix-slider-thumb]]:bg-blue-600 [&_[data-radix-slider-thumb]]:border-blue-600 [&_[data-radix-slider-thumb]]:ring-0"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>10%</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>

                {/* Receive Field */}
                <div>
                  <Label className="text-base font-medium text-gray-900 mb-4 block">Receive</Label>
                  <div className="h-12 px-3 py-2 border border-gray-200 rounded-md bg-gray-50 flex items-center">
                    <span className="text-gray-900 font-medium">USDC</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Preview */}
              <div className="bg-gray-50 rounded-xl p-6 relative">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Policy Preview</h3>

                <div className="bg-white rounded-lg p-4 border border-gray-200 mb-6">
                  <p className="text-sm text-gray-600 mb-1">You'll receive now:</p>
                  <p className="text-2xl font-bold text-gray-900">${immediateReceive.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">in USDC</p>
                </div>

                {isFormValid ? (
                  <div className="space-y-6">
                    {/* Market Scenario Switcher */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-700">Additional Upside if Market Rallies</h4>

                      {/* Pill Toggle */}
                      <div className="flex bg-gray-100 rounded-lg p-1">
                        {[20, 40, 60].map((scenario) => (
                          <button
                            key={scenario}
                            onClick={() => setSelectedScenario(scenario)}
                            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                              selectedScenario === scenario
                                ? "bg-blue-600 text-white"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            +{scenario}%
                          </button>
                        ))}
                      </div>

                      {/* Single Result Display */}
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-green-600">
                            ${(totalValue * (selectedScenario / 100) * (upsideShare[0] / 100)).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">Your additional upside share</p>
                        <p className="text-xs text-gray-500">Market +{selectedScenario}% scenario</p>
                      </div>
                    </div>

                    {/* Term Summary */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Policy Terms</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Coverage Duration:</span>
                          <span className="font-medium text-gray-900">{duration[0]} days</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Upside Share:</span>
                          <span className="font-medium text-gray-900">{upsideShare[0]}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Immediate Payout:</span>
                          <span className="font-medium text-gray-900">{immediatePayout[0]}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Create Policy Button - positioned at bottom right */}
                    <div className="flex justify-end pt-4">
                      <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-2" disabled={!isFormValid}>
                        Create Policy
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">Fill in the form to see preview</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Policy Marketplace */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Policy Marketplace</h2>

          {/* Filters */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
            <div className="grid lg:grid-cols-4 gap-8">
              <div>
                <Label className="text-sm font-medium text-gray-900 mb-4 block">Immediate Payout %</Label>
                <Slider
                  value={payoutRange}
                  onValueChange={setPayoutRange}
                  max={98}
                  min={90}
                  step={1}
                  className="w-full [&_[data-radix-slider-track]]:bg-gray-200 [&_[data-radix-slider-range]]:bg-blue-600 [&_[data-radix-slider-thumb]]:bg-blue-600 [&_[data-radix-slider-thumb]]:border-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{payoutRange[0]}%</span>
                  <span>{payoutRange[1]}%</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-900 mb-4 block">Duration (days)</Label>
                <Slider
                  value={durationRange}
                  onValueChange={setDurationRange}
                  max={90}
                  min={1}
                  step={1}
                  className="w-full [&_[data-radix-slider-track]]:bg-gray-200 [&_[data-radix-slider-range]]:bg-blue-600 [&_[data-radix-slider-thumb]]:bg-blue-600 [&_[data-radix-slider-thumb]]:border-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{durationRange[0]}</span>
                  <span>{durationRange[1]}</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-900 mb-4 block">Upside Share %</Label>
                <Slider
                  value={upsideRange}
                  onValueChange={setUpsideRange}
                  max={50}
                  min={10}
                  step={1}
                  className="w-full [&_[data-radix-slider-track]]:bg-gray-200 [&_[data-radix-slider-range]]:bg-blue-600 [&_[data-radix-slider-thumb]]:bg-blue-600 [&_[data-radix-slider-thumb]]:border-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{upsideRange[0]}%</span>
                  <span>{upsideRange[1]}%</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-900 mb-4 block">Status</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={statusFilter.open}
                      onCheckedChange={(checked) => setStatusFilter((prev) => ({ ...prev, open: checked }))}
                    />
                    <span className="text-sm text-gray-700">Open</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={statusFilter.ongoing}
                      onCheckedChange={(checked) => setStatusFilter((prev) => ({ ...prev, ongoing: checked }))}
                    />
                    <span className="text-sm text-gray-700">Ongoing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={statusFilter.finished}
                      onCheckedChange={(checked) => setStatusFilter((prev) => ({ ...prev, finished: checked }))}
                    />
                    <span className="text-sm text-gray-700">Finished</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPolicies.map((policy) => (
              <div key={policy.id} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {policy.amount} {policy.token}
                    </h3>
                    <p className="text-sm text-gray-600">≈ ${policy.usdValue.toLocaleString()}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      policy.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : policy.status === "Ongoing"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {policy.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Immediate Payout</p>
                    <p className="text-lg font-semibold text-gray-900">{policy.immediatePayout}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="text-lg font-semibold text-gray-900">{policy.duration} days</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600">Upside Share</p>
                  <p className="text-lg font-semibold text-gray-900">{policy.upsideShare}%</p>
                </div>

                {/* Enhanced Status Info */}
                {(policy.status === "Ongoing" || policy.status === "Finished") && (
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      Ends on{" "}
                      {new Date(policy.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>

                    {policy.status === "Finished" ? (
                      <div>
                        <p className="text-sm text-gray-600">Final Outcome</p>
                        <p className="text-sm font-medium text-gray-900">
                          Final price: ${policy.finalPrice?.toLocaleString()} →
                          {policy.finalPrice > policy.purchasePrice
                            ? ` Seller receives $${(
                                (policy.purchasePrice * policy.amount * policy.immediatePayout) / 100 +
                                  ((policy.finalPrice - policy.purchasePrice) * policy.amount * policy.upsideShare) /
                                    100
                              ).toLocaleString()}`
                            : ` Seller receives $${((policy.purchasePrice * policy.amount * policy.immediatePayout) / 100).toLocaleString()}`}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-gray-600">Current Performance</p>
                        <p className="text-sm font-medium text-gray-900">
                          Current price: ${policy.currentPrice?.toLocaleString()} → If ended now: $$
                          {(
                            (policy.purchasePrice * policy.amount * policy.immediatePayout) / 100 +
                            Math.max(
                              0,
                              ((policy.currentPrice - policy.purchasePrice) * policy.amount * policy.upsideShare) / 100,
                            )
                          ).toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {policy.status === "Open" && (
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Buy Policy</Button>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
              View More Policies
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
