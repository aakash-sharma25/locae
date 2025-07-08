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
            <strong>Last Updated: July 08, 2025</strong>
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

            <h2 id="acceptance">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By using the App, you confirm that you are at least 13 years old
              and have the legal capacity to enter into these Terms. If you are
              using the App on behalf of a business (e.g., as a shop owner), you
              represent that you have the authority to bind that business to
              these Terms. We may update these Terms from time to time, and the
              updated version will be effective upon posting in the App or on
              our website at{" "}
              <a
                href="/terms-and-conditions"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                /terms-and-conditions
              </a>
              . Your continued use of the App after such changes constitutes
              acceptance of the updated Terms.
            </p>

            <h2 id="account">2. Account Registration and Responsibilities</h2>
            <h3>a. Account Creation</h3>
            <ul className="text-gray-600">
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

            <h3>b. Account Security</h3>
            <ul className="text-gray-600">
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

            <h3>c. Accurate Information</h3>
            <ul className="text-gray-600">
              <li>
                You agree to provide accurate, current, and complete information
                during registration and to update it as needed.
              </li>
              <li>
                Providing false or misleading information (e.g., fake store
                details or user profiles) may result in account termination.
              </li>
            </ul>

            <h2 id="usage">3. Use of the App</h2>
            <h3>a. Permitted Use</h3>
            <ul className="text-gray-600">
              <li>
                The App is intended for personal use by normal users to connect
                with others and discover local stores, and for shop owners to
                promote their businesses.
              </li>
              <li>
                You may use the App to:
                <ul className="list-disc pl-5">
                  <li>Create and manage user or store profiles.</li>
                  <li>
                    Send and receive private messages or share stories (normal
                    users only).
                  </li>
                  <li>Discover nearby users or stores based on location.</li>
                  <li>
                    View and interact with advertisements displayed via AdMob.
                  </li>
                </ul>
              </li>
            </ul>

            <h3>b. Prohibited Conduct</h3>
            <p className="text-gray-600">You agree not to:</p>
            <ul className="text-gray-600">
              <li>
                Use the App for illegal, harmful, or unauthorized purposes.
              </li>
              <li>
                Post or share content that is offensive, defamatory, obscene, or
                infringes on others' rights (e.g., intellectual property,
                privacy).
              </li>
              <li>
                Harass, bully, or discriminate against other users based on
                race, gender, religion, or other protected characteristics.
              </li>
              <li>
                Impersonate another person or entity or misrepresent your
                affiliation with a business.
              </li>
              <li>
                Use automated tools (e.g., bots, scrapers) to access or collect
                data from the App.
              </li>
              <li>
                Attempt to hack, disrupt, or overload the App's servers or
                infrastructure.
              </li>
              <li>Share malicious content, such as viruses or malware.</li>
              <li>
                Use the App to solicit or engage in commercial activities
                outside of authorized shop owner features.
              </li>
            </ul>

            <h3>c. Content Guidelines</h3>
            <ul className="text-gray-600">
              <li>
                User-generated content (e.g., profiles, messages, stories, store
                listings) must comply with these Terms and applicable laws.
              </li>
              <li>
                We reserve the right to remove or moderate content that violates
                these Terms, at our sole discretion.
              </li>
            </ul>

            <h2 id="location">4. Location-Based Services</h2>
            <ul className="text-gray-600">
              <li>
                <strong>Normal Users</strong>: The App uses your precise
                location (with permission) to show nearby users and stores. Only
                your most recent location is stored, updated via an "upsert"
                process. You can disable location sharing in the App's settings,
                which will prevent your profile from appearing in searches.
              </li>
              <li>
                <strong>Shop Owners</strong>: You provide a one-time store
                location (with permission) for discovery by normal users. You
                can update or request deletion of this location via the App's
                settings or by contacting us.
              </li>
              <li>
                We are not responsible for inaccuracies in location data
                provided by your device or for any consequences arising from
                location sharing.
              </li>
            </ul>

            <h2 id="intellectual-property">5. Intellectual Property</h2>
            <h3>a. Our Content</h3>
            <ul className="text-gray-600">
              <li>
                The App, including its design, code, logos, and content
                (excluding user-generated content), is owned by Locae or our
                licensors and protected by copyright, trademark, and other
                intellectual property laws.
              </li>
              <li>
                You may not copy, modify, distribute, or create derivative works
                of our content without our written permission.
              </li>
            </ul>

            <h3>b. Your Content</h3>
            <ul className="text-gray-600">
              <li>
                You retain ownership of content you create (e.g., profiles,
                messages, store listings, photos).
              </li>
              <li>
                By posting content, you grant us a non-exclusive, worldwide,
                royalty-free license to use, store, display, and distribute it
                solely to operate and provide the App's services (e.g., showing
                your store profile to nearby users).
              </li>
              <li>
                You represent that you have the right to share your content and
                that it does not infringe on third-party rights.
              </li>
            </ul>

            <h3>c. Third-Party Content</h3>
            <ul className="text-gray-600">
              <li>
                Content from other users or third parties (e.g., AdMob ads) is
                their responsibility. We are not liable for such content's
                accuracy or legality.
              </li>
            </ul>

            <h2 id="third-party">6. Third-Party Services</h2>
            <ul className="text-gray-600">
              <li>
                The App uses third-party services, including:
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Firebase (by Google)</strong>: For authentication
                    and messaging.
                  </li>
                  <li>
                    <strong>Supabase</strong>: For storing profiles, location,
                    and notification data.
                  </li>
                  <li>
                    <strong>Wasabi Cloud Storage</strong>: For media files
                    (e.g., photos, videos).
                  </li>
                  <li>
                    <strong>AdMob (by Google)</strong>: For displaying
                    advertisements.
                  </li>
                </ul>
              </li>
              <li>
                These services are governed by their own terms and privacy
                policies, linked in our{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                . You agree to comply with their terms when using the App.
              </li>
            </ul>

            <h2 id="payments">7. Payments and Fees</h2>
            <ul className="text-gray-600">
              <li>
                The App is currently free to use for both normal users and shop
                owners, supported by AdMob advertisements.
              </li>
              <li>
                We may introduce premium features or fees in the future. If so,
                we will notify you, and your continued use will constitute
                agreement to any applicable fees.
              </li>
              <li>
                Shop owners are responsible for any taxes or legal obligations
                related to their business activities on the App.
              </li>
            </ul>

            <h2 id="termination">8. Termination</h2>
            <ul className="text-gray-600">
              <li>
                <strong>By You</strong>: You may stop using the App or delete
                your account at any time. To delete your account and associated
                data, contact us at{" "}
                <a
                  href="mailto:support@locae.in"
                  className="text-blue-600 hover:underline"
                >
                  support@locae.in
                </a>
                .
              </li>
              <li>
                <strong>By Us</strong>: We may suspend or terminate your account
                or access to the App if you violate these Terms, engage in
                prohibited conduct, or for any reason at our discretion, with or
                without notice.
              </li>
              <li>
                Upon termination, your right to use the App ceases, but these
                Terms' provisions (e.g., intellectual property, liability) will
                survive.
              </li>
            </ul>

            <h2 id="disclaimers">9. Disclaimers and Limitation of Liability</h2>
            <h3>a. Disclaimers</h3>
            <ul className="text-gray-600">
              <li>
                The App is provided "as is" and "as available" without
                warranties of any kind, express or implied, including fitness
                for a particular purpose or uninterrupted access.
              </li>
              <li>
                We do not guarantee the accuracy, completeness, or safety of
                user-generated content, location data, or third-party services
                (e.g., AdMob ads).
              </li>
              <li>
                Interactions with other users or stores are at your own risk. We
                are not responsible for disputes or harm arising from such
                interactions.
              </li>
            </ul>

            <h3>b. Limitation of Liability</h3>
            <ul className="text-gray-600">
              <li>
                To the fullest extent permitted by law, Locae, its affiliates,
                and service providers will not be liable for any indirect,
                incidental, consequential, or punitive damages arising from your
                use of the App, even if advised of such damages.
              </li>
              <li>
                Our total liability for any claim related to the App will not
                exceed $100 USD or the amount you paid us (if any) in the past
                12 months.
              </li>
            </ul>

            <h2 id="indemnification">10. Indemnification</h2>
            <p className="text-gray-600">
              You agree to indemnify and hold harmless Locae, its affiliates,
              and their respective officers, directors, and employees from any
              claims, damages, or losses arising from your use of the App,
              violation of these Terms, or infringement of third-party rights
              (e.g., posting unauthorized content).
            </p>

            <h2 id="governing-law">11. Governing Law and Dispute Resolution</h2>
            <ul className="text-gray-600">
              <li>
                These Terms are governed by the laws of the State of California,
                USA, without regard to conflict of law principles.
              </li>
              <li>
                Any disputes arising from these Terms or your use of the App
                will be resolved through binding arbitration in California, USA,
                administered by the American Arbitration Association under its
                Consumer Arbitration Rules, unless prohibited by law. You waive
                any right to participate in class actions.
              </li>
              <li>
                For users in the European Union, you may also have access to
                alternative dispute resolution mechanisms under EU law.
              </li>
            </ul>

            <h2 id="contact">12. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about these Terms or need assistance,
              contact us at:
            </p>
            <ul className="text-gray-600">
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

            <h2 id="miscellaneous">13. Miscellaneous</h2>
            <ul className="text-gray-600">
              <li>
                <strong>Entire Agreement</strong>: These Terms, along with our{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                , constitute the entire agreement between you and Locae
                regarding the App.
              </li>
              <li>
                <strong>Severability</strong>: If any provision of these Terms
                is found invalid, the remaining provisions will remain in
                effect.
              </li>
              <li>
                <strong>No Waiver</strong>: Our failure to enforce any right or
                provision does not waive that right or provision.
              </li>
              <li>
                <strong>Assignment</strong>: We may assign these Terms to
                another entity (e.g., in case of a merger). You may not assign
                your rights without our consent.
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
