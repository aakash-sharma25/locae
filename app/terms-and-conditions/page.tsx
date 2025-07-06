import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Locae",
  description:
    "Terms and Conditions for Locae, a location-based social app. Learn the rules and responsibilities for using our services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Terms and Conditions for Locae
          </h1>
          <p className="text-gray-600 mb-4">
            <strong>Last Updated: June 22, 2025</strong>
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Welcome to Locae, a location-based social app that allows you to
              connect with nearby people through profiles, private messaging,
              and stories, and discover local stores (e.g., clothing, kirana,
              furniture shops). These Terms and Conditions ("Terms") govern your
              use of the Locae mobile application ("App") and related services
              provided by Locae ("we," "us," or "our"). By downloading,
              accessing, or using the App, you agree to be bound by these Terms.
              If you do not agree, please do not use the App.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By using the App, you confirm that you are at least 13 years old
              and have the legal capacity to enter into these Terms. If you are
              using the App on behalf of a business (e.g., as a shop owner), you
              represent that you have the authority to bind that business to
              these Terms. We may update these Terms from time to time, and the
              updated version will be effective upon posting in the App or on
              our website. Your continued use of the App after such changes
              constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              2. Account Registration and Responsibilities
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              a. Account Creation
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                To use certain features of the App (e.g., creating a profile,
                messaging, or setting up a store), you must register an account
                using a valid email address and password.
              </li>
              <li>
                Normal Users: You may provide optional profile information
                (e.g., name, age, gender, photo, bio) to personalize your
                experience.
              </li>
              <li>
                Shop Owners: You may provide store details (e.g., store name,
                category, product listings, one-time location) to create a
                discoverable store profile.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities under your account.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              b. Account Security
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                Notify us immediately at{" "}
                <a
                  href="mailto:support@locae.in"
                  className="text-blue-600 hover:underline"
                >
                  support@locae.in
                </a>{" "}
                if you suspect unauthorized access to your account.
              </li>
              <li>
                We are not liable for any loss or damage arising from your
                failure to protect your account credentials.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              3. Use of the App
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              a. Permitted Use
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                The App is intended for personal use by normal users to connect
                with others and discover local stores, and for shop owners to
                promote their businesses.
              </li>
              <li>
                You may use the App to create and manage profiles, send
                messages, share stories, and discover nearby users or stores.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              b. Prohibited Conduct
            </h3>
            <p className="text-gray-600 mb-2">You agree not to:</p>
            <ul className="text-gray-600 space-y-2">
              <li>
                Use the App for illegal, harmful, or unauthorized purposes.
              </li>
              <li>
                Post or share content that is offensive, defamatory, obscene, or
                infringes on others' rights.
              </li>
              <li>Harass, bully, or discriminate against other users.</li>
              <li>Impersonate another person or entity.</li>
              <li>
                Use automated tools to access or collect data from the App.
              </li>
              <li>Attempt to hack, disrupt, or overload the App's servers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              4. Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have questions about these Terms or need assistance,
              contact us at:
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
                <strong>Response Time</strong>: We aim to respond within 5
                business days.
              </li>
            </ul>

            <p className="text-gray-600 mt-8">
              Thank you for using Locae! We're committed to providing a safe and
              enjoyable platform for connecting with others and discovering
              local stores. If anything in these Terms is unclear, please reach
              out.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
