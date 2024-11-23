import React from 'react';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Which iPad Should I Buy? - Quiz</h1>
        <Quiz />
      </section>

      <section id="guide" className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose lg:prose-lg mx-auto">
          <div className="mb-8">
            <p className="text-lg">
              If you're wondering, <strong>"Which iPad should I buy?"</strong>, you're not alone! Choosing the perfect iPad can be overwhelming with several models and configurations available. From the versatile iPad Air to the powerful iPad Pro, finding the best device for your needs requires careful consideration. But don't worry – we've got you covered! Our interactive <strong>Which iPad Should I Buy? Quiz</strong> will help you narrow down your choices and find the ideal iPad for your lifestyle.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Take the "Which iPad Should I Buy?" Quiz?</h2>
            <p>
              With multiple iPad models featuring different chips and capabilities, deciding on the right one can feel overwhelming. Whether you need an iPad for studying, digital art, content creation, or professional work, our <strong>Which iPad Should I Buy? Quiz</strong> is designed to match you with an iPad that fits your workflow, budget, and performance requirements.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Our Quiz Considers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>iPad Type:</strong> Standard, Air, mini, or Pro models</li>
              <li><strong>Performance:</strong> A15, M1, or M2 chips</li>
              <li><strong>Usage:</strong> Student, Artist, Content Creator</li>
              <li><strong>Budget:</strong> Find the perfect iPad within your price range</li>
              <li><strong>Features:</strong> Display size, Apple Pencil support, keyboard compatibility</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular iPad Categories</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Best for Students:</strong> Portable and affordable options</li>
              <li><strong>Best for Artists:</strong> Pro models with Apple Pencil support</li>
              <li><strong>Best for Note-Taking:</strong> Models with keyboard compatibility</li>
              <li><strong>Best for Professionals:</strong> High-performance options with pro features</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How the "Which iPad Should I Buy?" Quiz Works</h2>
            <p>
              Taking our quiz is quick and easy! Simply answer a few questions about your tablet needs, preferred features, and budget, and we'll recommend the best iPads for you. Our recommendations are based on extensive research and real-world testing.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert iPad Buying Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consider Storage:</strong> Choose capacity based on your needs</li>
              <li><strong>Accessories:</strong> Factor in Apple Pencil and keyboard costs</li>
              <li><strong>Connectivity:</strong> Decide between Wi-Fi only or Cellular</li>
              <li><strong>Screen Size:</strong> Balance portability with usability</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Our iPad Recommendations?</h2>
            <p>
              Our team consists of Apple experts and tech enthusiasts who stay up-to-date with the latest iPad models and features. We regularly update our <strong>Which iPad Should I Buy? Quiz</strong> to include new models and capabilities, ensuring you get the most current recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect iPad?</h2>
            <p>
              Don't waste hours researching – let our <strong>Which iPad Should I Buy? Quiz</strong> guide you to the perfect device. Whether you're buying your first iPad or upgrading your current one, we'll help you make an informed decision.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
