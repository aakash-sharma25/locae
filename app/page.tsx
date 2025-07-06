import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Store, MessageCircle, Shield, Smartphone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect Locally, <span className="text-blue-600">Discover Nearby</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Locae is your go-to app for connecting with nearby people through profiles, messaging, and stories, while
            discovering amazing local stores in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.locae.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Smartphone className="h-5 w-5" />
                Download Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              <Link href="/contact" className="flex items-center gap-2">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Locae?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of social connection and local discovery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Connect with People</CardTitle>
                <CardDescription>
                  Discover and connect with interesting people nearby through personalized profiles and real-time
                  messaging.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Store className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Discover Local Stores</CardTitle>
                <CardDescription>
                  Find amazing local businesses like clothing stores, kirana shops, and furniture stores right in your
                  neighborhood.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Private Messaging & Stories</CardTitle>
                <CardDescription>
                  Share moments through temporary stories and enjoy private, secure conversations with your connections.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Location-Based Discovery</CardTitle>
                <CardDescription>
                  Everything is based on proximity - find people and stores that are actually near you for real
                  connections.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>
                  Your data is protected with enterprise-grade security. You control what you share and with whom.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Easy to Use</CardTitle>
                <CardDescription>
                  Simple, intuitive interface designed for everyone. Start connecting and discovering in minutes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* For Users Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">For Social Connections</h2>
              <p className="text-lg text-gray-600 mb-6">
                Create your personalized profile and start connecting with interesting people in your area. Share your
                interests, hobbies, and discover like-minded individuals nearby.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Create detailed profiles with photos and interests</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Private messaging with end-to-end security</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Share temporary stories with your connections</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
              <p className="mb-6">Join thousands of users already connecting locally on Locae.</p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <a
                  href="https://play.google.com/store/apps/details?id=com.locae.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Store Owners Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Grow Your Business</h3>
              <p className="mb-6">Reach local customers and showcase your products to people in your neighborhood.</p>
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                <a
                  href="https://play.google.com/store/apps/details?id=com.locae.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  List Your Store
                </a>
              </Button>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">For Store Owners</h2>
              <p className="text-lg text-gray-600 mb-6">
                Showcase your local business to nearby customers. Whether you run a clothing store, kirana shop, or
                furniture store, Locae helps you connect with your community.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Create detailed store profiles with product listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Reach customers in your immediate area</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Free to use with easy setup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Local Journey Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the community that's bringing neighborhoods together, one connection at a time.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.locae.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Smartphone className="h-5 w-5" />
              Download Locae Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
