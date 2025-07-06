import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Locae",
  description:
    "Privacy Policy for Locae, a location-based social app. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Privacy Policy for Locae
          </h1>
          <p className="text-gray-600 mb-4">
            <strong>Last Updated: June 22, 2025</strong>
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Welcome to Locae, a location-based social app that helps you
              discover and connect with nearby people through profiles, private
              messaging, and stories, and explore nearby local stores (like
              clothing, kirana, or furniture shops). We value your privacy and
              are committed to protecting your personal information. This
              Privacy Policy explains, in simple terms, what data we collect,
              why we collect it, how we use it, and how we keep it safe. By
              using Locae, you agree to this policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              1. What Data We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              To make Locae work smoothly and provide you with a great
              experience, we collect the following types of data, depending on
              whether you're a normal user or a shop owner:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              a. Authentication Data
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>What we collect</strong>: Your email address and
                password (for both normal users and shop owners).
              </li>
              <li>
                <strong>Why</strong>: To let you securely sign up, log in, and
                access your account.
              </li>
              <li>
                <strong>How it's stored</strong>: Securely hashed and managed by{" "}
                <a
                  href="https://firebase.google.com/docs/auth"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Authentication
                </a>
                .
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              b. User Profile Data (Normal Users, Optional)
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>What we collect</strong>: Your name, age, gender,
                profile photo, bio, occupation, interests, and hobbies. You
                choose what to share!
              </li>
              <li>
                <strong>Why</strong>: To help you create a personalized profile
                that others can see, making it easier to connect with people
                nearby.
              </li>
              <li>
                <strong>How it's stored</strong>: Stored securely on{" "}
                <a
                  href="https://supabase.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supabase
                </a>{" "}
                servers. Profile photos are stored in{" "}
                <a
                  href="https://wasabi.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wasabi Cloud Storage
                </a>
                .
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              c. Store Profile Data (Shop Owners, Optional)
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>What we collect</strong>: Store name, category (e.g.,
                clothing, kirana, furniture), product details (e.g.,
                descriptions, prices, images), and a one-time store location
                (with your permission).
              </li>
              <li>
                <strong>Why</strong>: To create a store profile that normal
                users can discover based on proximity, and to display your
                products.
              </li>
              <li>
                <strong>How it's stored</strong>: Stored securely on Supabase
                servers. Product images are stored in Wasabi Cloud Storage.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              2. How We Keep Your Data Safe
            </h2>
            <p className="text-gray-600 mb-4">
              Your privacy is our priority. Here's how we protect your
              information:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>Secure Storage</strong>: All data is stored using
                industry-standard encryption and security measures.
              </li>
              <li>
                <strong>Limited Access</strong>: Only authorized personnel have
                access to your data, and only when necessary.
              </li>
              <li>
                <strong>No Sensitive Data</strong>: We don't collect or store
                financial details or government-issued IDs.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              3. Your Rights and Choices
            </h2>
            <p className="text-gray-600 mb-4">
              You're in control of your data. Here's what you can do:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>Update Your Profile</strong>: Edit your information
                anytime in the app's settings.
              </li>
              <li>
                <strong>Delete Your Data</strong>: Contact us to delete your
                account and all associated data.
              </li>
              <li>
                <strong>Control Location Sharing</strong>: Turn location sharing
                on or off in your device settings.
              </li>
              <li>
                <strong>Manage Permissions</strong>: Control what data you share
                through the app's privacy settings.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              4. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              Have questions, concerns, or need to delete your data? We're here
              for you!
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>Email</strong>:{" "}
                <a
                  href="mailto:support@locae.in"
                  className="text-blue-600 hover:underline"
                >
                  support@locae.in
                </a>
              </li>
              <li>
                <strong>Response Time</strong>: We'll get back to you within 5
                business days.
              </li>
            </ul>

            <p className="text-gray-600 mt-8">
              Thank you for choosing Locae! We're excited to help you connect
              with people, share stories, and discover local stores in a safe
              and private way. If anything in this policy isn't clear, just
              reach out—we're happy to explain.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
