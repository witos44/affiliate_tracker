import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { CheckCircle, Rocket, BarChart2, Link, UserCheck } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-100 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Track Every Link. Gain Every Click.</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          LinkTracker is your all-in-one solution for link management, shortening, analytics, and affiliate tracking.
        </p>
        <Button className="text-lg px-6 py-2" onClick={() => navigate('/dashboard')}>Get Started</Button>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow hover:shadow-md border text-center">
            <Link className="mx-auto text-blue-500" size={40} />
            <h3 className="text-xl font-semibold mt-4">Link Shortener</h3>
            <p className="text-gray-600 mt-2">Create branded, trackable short URLs for better engagement.</p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-md border text-center">
            <BarChart2 className="mx-auto text-blue-500" size={40} />
            <h3 className="text-xl font-semibold mt-4">Analytics</h3>
            <p className="text-gray-600 mt-2">Real-time insights into click rates, referrals, and user behavior.</p>
          </div>
          <div className="p-6 rounded-2xl shadow hover:shadow-md border text-center">
            <UserCheck className="mx-auto text-blue-500" size={40} />
            <h3 className="text-xl font-semibold mt-4">Affiliate Tracking</h3>
            <p className="text-gray-600 mt-2">Manage and monitor your affiliate marketing links effectively.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-700 italic">"LinkTracker helped me understand where my traffic comes from. Super useful!"</p>
            <div className="mt-4 text-right font-semibold text-blue-600">— Adit, Digital Marketer</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-700 italic">"I use it to manage all my affiliate links. Game changer!"</p>
            <div className="mt-4 text-right font-semibold text-blue-600">— Sari, Content Creator</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 border rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="text-2xl font-bold mt-2">$0/mo</p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li><CheckCircle className="inline mr-2 text-green-500" />Basic Link Shortening</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Limited Analytics</li>
            </ul>
          </div>
          <div className="p-8 border-2 border-blue-600 rounded-2xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-blue-600">Pro</h3>
            <p className="text-2xl font-bold mt-2">$9/mo</p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li><CheckCircle className="inline mr-2 text-green-500" />Unlimited Links</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Advanced Analytics</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Affiliate Dashboard</li>
            </ul>
          </div>
          <div className="p-8 border rounded-2xl shadow text-center">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-2xl font-bold mt-2">Custom</p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li><CheckCircle className="inline mr-2 text-green-500" />Team Collaboration</li>
              <li><CheckCircle className="inline mr-2 text-green-500" />Dedicated Support</li>
            </ul>
          </div>
        </div>
      </section>

      
    </div>
  );
}
