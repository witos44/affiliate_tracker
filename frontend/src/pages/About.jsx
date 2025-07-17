export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-white to-blue-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Zytra</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Zytra was founded to simplify and empower link management for marketers, businesses, and creators. We provide smart tools to shorten, analyze, and optimize every link you share.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our mission is to empower individuals and organizations with seamless control over their link performance. We believe every link should provide insights, value, and results.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Founder"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Suwito</h3>
            <p className="text-gray-600">Founder & Fullstack Developer</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Designer"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Adit</h3>
            <p className="text-gray-600">Product Designer</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <img
              src="https://via.placeholder.com/100"
              alt="Marketer"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Sari</h3>
            <p className="text-gray-600">Marketing Strategist</p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
