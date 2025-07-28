"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Mock data for user policies
const mockPolicies = [
  {
    id: 1,
    role: "Seller",
    status: "Listed",
    token: "ETH",
    amount: "2.5",
    usdValueAtStart: 4250,
    currentUsdValue: 4400,
    immediatePayout: 85,
    duration: 30,
    upsideShare: 25,
    createdDate: "2024-01-15",
    expiryDate: "2024-02-14",
    performance: null,
    outcome: null,
    txHash: "0x1234...5678",
  },
  {
    id: 2,
    role: "Buyer",
    status: "Ongoing",
    token: "BTC",
    amount: "0.1",
    usdValueAtStart: 6800,
    currentUsdValue: 7200,
    immediatePayout: 80,
    duration: 60,
    upsideShare: 30,
    createdDate: "2024-01-10",
    expiryDate: "2024-03-10",
    performance: "+5.9%",
    outcome: null,
    txHash: "0xabcd...efgh",
  },
  {
    id: 3,
    role: "Seller",
    status: "Finished",
    token: "ETH",
    amount: "1.0",
    usdValueAtStart: 1700,
    currentUsdValue: 2040,
    immediatePayout: 90,
    duration: 45,
    upsideShare: 20,
    createdDate: "2023-12-01",
    expiryDate: "2024-01-15",
    performance: "+20%",
    outcome: "+$68",
    txHash: "0x9876...5432",
  },
  {
    id: 4,
    role: "Buyer",
    status: "Finished",
    token: "USDC",
    amount: "10000",
    usdValueAtStart: 10000,
    currentUsdValue: 9500,
    immediatePayout: 75,
    duration: 90,
    upsideShare: 35,
    createdDate: "2023-11-01",
    expiryDate: "2024-01-30",
    performance: "-5%",
    outcome: "$0",
    txHash: "0xdef0...1234",
  },
  {
    id: 5,
    role: "Seller",
    status: "Ongoing",
    token: "ETH",
    amount: "3.2",
    usdValueAtStart: 5440,
    currentUsdValue: 5760,
    immediatePayout: 88,
    duration: 21,
    upsideShare: 22,
    createdDate: "2024-01-20",
    expiryDate: "2024-02-10",
    performance: "+5.9%",
    outcome: null,
    txHash: "0x5678...9abc",
  },
]

export default function MyPoliciesPage() {
  const [roleFilter, setRoleFilter] = useState("All")
  const [statusFilter, setStatusFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const policiesPerPage = 6

  // Filter policies
  const filteredPolicies = mockPolicies.filter((policy) => {
    const roleMatch = roleFilter === "All" || policy.role === roleFilter
    const statusMatch = statusFilter === "All" || policy.status === statusFilter
    return roleMatch && statusMatch
  })

  // Pagination
  const totalPages = Math.ceil(filteredPolicies.length / policiesPerPage)
  const startIndex = (currentPage - 1) * policiesPerPage
  const paginatedPolicies = filteredPolicies.slice(startIndex, startIndex + policiesPerPage)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date()
    const expiry = new Date(expiryDate)
    const diffTime = expiry.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/app" className="text-xl font-bold text-gray-900">
              FOMO Insurance
            </Link>
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent">
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Policies</h1>

          {/* Filter Toggles */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">Role</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                {["All", "Seller", "Buyer"].map((role) => (
                  <button
                    key={role}
                    onClick={() => {
                      setRoleFilter(role)
                      setCurrentPage(1)
                    }}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      roleFilter === role ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-3 block">Status</label>
              <div className="flex bg-gray-100 rounded-lg p-1">
                {["All", "Listed", "Ongoing", "Finished"].map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      setStatusFilter(status)
                      setCurrentPage(1)
                    }}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      statusFilter === status ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Policies Grid */}
        {paginatedPolicies.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedPolicies.map((policy) => (
                <div key={policy.id} className="bg-white border border-gray-200 rounded-2xl p-6">
                  {/* Badges */}
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                      variant="secondary"
                      className={`${
                        policy.role === "Seller" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {policy.role}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className={`${
                        policy.status === "Listed"
                          ? "bg-yellow-100 text-yellow-700"
                          : policy.status === "Ongoing"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {policy.status}
                    </Badge>
                  </div>

                  {/* Token Amount */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {policy.amount} {policy.token}
                    </h3>
                    <p className="text-sm text-gray-600">≈ ${policy.usdValueAtStart.toLocaleString()} at start</p>
                  </div>

                  {/* Policy Terms */}
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

                  {/* Performance/Outcome */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    {policy.status === "Finished" ? (
                      <div>
                        <p className="text-sm text-gray-600">Final Outcome</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {policy.outcome === "$0" ? "No upside earned" : `You earned ${policy.outcome} from upside`}
                        </p>
                      </div>
                    ) : policy.status === "Ongoing" ? (
                      <div>
                        <p className="text-sm text-gray-600">Current Performance</p>
                        <p
                          className={`text-lg font-semibold ${
                            policy.performance?.startsWith("+") ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {policy.performance} since start
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <p className="text-lg font-semibold text-gray-900">Awaiting buyer</p>
                      </div>
                    )}
                  </div>

                  {/* Expiry Info */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600">
                      {policy.status === "Finished"
                        ? `Expired ${formatDate(policy.expiryDate)}`
                        : policy.status === "Ongoing"
                          ? `${getDaysUntilExpiry(policy.expiryDate)} days remaining`
                          : `Created ${formatDate(policy.createdDate)}`}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {policy.status === "Listed" && policy.role === "Seller" && (
                      <Button
                        variant="outline"
                        className="flex-1 border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                      >
                        Cancel
                      </Button>
                    )}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Policy Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Transaction Hash</p>
                            <p className="text-sm text-blue-600 font-mono break-all">{policy.txHash}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Created</p>
                            <p className="text-sm text-gray-600">{formatDate(policy.createdDate)}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Expires</p>
                            <p className="text-sm text-gray-600">{formatDate(policy.expiryDate)}</p>
                          </div>
                          <div className="pt-4 border-t">
                            <Button variant="outline" className="w-full bg-transparent" asChild>
                              <a
                                href={`https://etherscan.io/tx/${policy.txHash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View on Etherscan →
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </Button>
                <span className="text-sm text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No policies found</h3>
              <p className="text-gray-600 mb-8">
                {roleFilter === "All" && statusFilter === "All"
                  ? "You haven't created or funded any policies yet."
                  : "No policies match your current filters."}
              </p>
              <Link href="/app">
                <Button className="bg-blue-600 hover:bg-blue-700">Create a Policy</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
