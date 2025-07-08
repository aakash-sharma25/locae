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
            <strong>Last Updated: July 08, 2025</strong>
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

            <h2 id="data-collection">1. What Data We Collect</h2>
            <p className="text-gray-600">
              To make Locae work smoothly and provide you with a great
              experience, we collect the following types of data, depending on
              whether you're a normal user or a shop owner:
            </p>

            <h3>a. Authentication Data</h3>
            <ul className="text-gray-600">
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

            <h3>b. User Profile Data (Normal Users, Optional)</h3>
            <ul className="text-gray-600">
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

            <h3>c. Store Profile Data (Shop Owners, Optional)</h3>
            <ul className="text-gray-600">
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

            <h3>d. Location Data</h3>
            <ul className="text-gray-600">
              <li>
                <strong>Normal Users</strong>:
                <ul className="list-disc pl-5">
                  <li>
                    <strong>What we collect</strong>: Your precise location
                    (with your permission). Locae stores only your most recent
                    location (one entry). When a new location is updated, it
                    replaces the previous one (like an "upsert").
                  </li>
                  <li>
                    <strong>Why</strong>: To show you nearby users and local
                    stores for location-based matching and discovery.
                  </li>
                  <li>
                    <strong>How it's stored</strong>: Securely stored on
                    Supabase servers.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Shop Owners</strong>:
                <ul className="list-disc pl-5">
                  <li>
                    <strong>What we collect</strong>: A one-time store location
                    (with your permission) when you set up your store profile.
                    You can update this location anytime. We do not track or
                    share your store's location beyond this.
                  </li>
                  <li>
                    <strong>Why</strong>: To allow normal users to find your
                    store based on proximity.
                  </li>
                  <li>
                    <strong>How it's stored</strong>: Securely stored on
                    Supabase servers.
                  </li>
                </ul>
              </li>
            </ul>

            <h3>e. Messaging and Story Data</h3>
            <ul className="text-gray-600">
              <li>
                <strong>What we collect</strong>: Text messages, timestamps,
                sender/receiver identifiers (like user IDs), and media files
                (e.g., images, videos) for chats and stories (for normal users
                only). After a message is read, the previous message is deleted
                from our Firebase database, but messages may remain stored
                locally on both users' devices (sender and receiver). Chat and
                story media files are deleted from our servers within 7 days.
              </li>
              <li>
                <strong>Why</strong>: To let you chat privately with other users
                in real-time and share temporary stories.
              </li>
              <li>
                <strong>How it's stored</strong>: Text messages and identifiers
                are stored securely on{" "}
                <a
                  href="https://firebase.google.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase
                </a>{" "}
                for real-time messaging. Media files (e.g., chat or story
                images/videos) are stored in Wasabi Cloud Storage.
              </li>
            </ul>

            <h3>f. Notification Data</h3>
            <ul className="text-gray-600">
              <li>
                <strong>What we collect</strong>: A unique Firebase Cloud
                Messaging (FCM) token for your device (for both normal users and
                shop owners).
              </li>
              <li>
                <strong>Why</strong>: To send you real-time push notifications
                about new messages or stories (for normal users) or
                store-related activity (e.g., profile updates for shop owners).
              </li>
              <li>
                <strong>How it's stored</strong>: Securely managed by Supabase,
                with FCM tokens processed via Firebase Cloud Messaging.
              </li>
            </ul>

            <h3>g. Advertising Data</h3>
            <ul className="text-gray-600">
              <li>
                <strong>What we collect</strong>: Device information (e.g.,
                device ID, IP address) and ad interaction data (e.g., ad clicks,
                views) collected by{" "}
                <a
                  href="https://admob.google.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AdMob
                </a>
                .
              </li>
              <li>
                <strong>Why</strong>: To display ads in the app, which may be
                personalized based on your interests or non-personalized, to
                support the app's free features.
              </li>
              <li>
                <strong>How it's stored</strong>: Processed by AdMob (by Google)
                to deliver and measure ad performance.
              </li>
            </ul>

            <h2 id="data-usage">2. Why We Collect Your Data</h2>
            <p className="text-gray-600">
              We collect and use your data to make Locae fun, safe, and easy to
              use. Here's how:
            </p>
            <ul className="text-gray-600">
              <li>
                <strong>User Authentication</strong>: To keep your account
                (normal user or shop owner) secure and let you log in without
                hassle.
              </li>
              <li>
                <strong>User Discovery</strong>: To show normal users nearby
                people and local stores based on their most recent location.
              </li>
              <li>
                <strong>Store Discovery</strong>: To display shop owners' store
                profiles and products to nearby normal users based on the
                store's one-time location.
              </li>
              <li>
                <strong>Personalization</strong>: To create a unique experience
                by showing profiles (for users) or store details (for shop
                owners) tailored to preferences.
              </li>
              <li>
                <strong>Messaging and Stories</strong>: To enable private,
                real-time chats and temporary stories for normal users.
              </li>
              <li>
                <strong>Notifications</strong>: To keep you updated about new
                messages or stories (for normal users) or store-related activity
                (for shop owners).
              </li>
              <li>
                <strong>Advertising</strong>: To show relevant or
                non-personalized ads to keep Locae free for all users.
              </li>
            </ul>
            <p className="text-gray-600">
              We only use your data for the features described here and never
              for anything else without your consent.
            </p>

            <h2 id="data-security">3. How We Keep Your Data Safe</h2>
            <p className="text-gray-600">
              Your privacy is our priority. Here's how we protect your
              information:
            </p>
            <ul className="text-gray-600">
              <li>
                <strong>Secure Storage</strong>:
                <ul className="list-disc pl-5">
                  <li>
                    Authentication and messaging data are stored securely on
                    Firebase.
                  </li>
                  <li>
                    Profile data (user and store), location data, and
                    notification data are stored securely on Supabase.
                  </li>
                  <li>
                    Media files (like profile photos, product images, chat, or
                    story media) are stored securely in Wasabi Cloud Storage.
                  </li>
                  <li>Advertising data is processed securely by AdMob.</li>
                </ul>
              </li>
              <li>
                <strong>Encryption</strong>: Data is encrypted when it's sent
                (in transit) and when it's stored (at rest).
              </li>
              <li>
                <strong>No Sensitive Data</strong>: We don't collect or store
                financial details (like credit card numbers) or
                government-issued IDs.
              </li>
              <li>
                <strong>Limited Access</strong>: Only chat participants see
                messages, only your most recent location is used for normal user
                matching, and store locations are used solely for discovery by
                normal users.
              </li>
            </ul>
            <p className="text-gray-600">
              While we take every precaution, no system is 100% secure. If you
              have concerns, please contact us (see Section 9).
            </p>

            <h2 id="data-sharing">4. Who We Share Your Data With</h2>
            <p className="text-gray-600">
              We don't sell or share your personal data with third parties,
              except in these specific cases:
            </p>
            <ul className="text-gray-600">
              <li>
                <strong>Service Providers</strong>:
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Firebase (by Google)</strong>: Handles
                    authentication and real-time messaging.
                  </li>
                  <li>
                    <strong>Supabase</strong>: Stores profile data (user and
                    store), location data, and notification data.
                  </li>
                  <li>
                    <strong>Wasabi Cloud Storage</strong>: Stores media files
                    like profile photos, product images, and chat/story media.
                  </li>
                  <li>
                    <strong>AdMob (by Google)</strong>: Delivers and measures
                    ads, using device and ad interaction data.
                  </li>
                </ul>
                <p>
                  These providers only access the data needed to provide their
                  services and are bound by strict privacy agreements. For
                  details, see their privacy policies:{" "}
                  <a
                    href="https://firebase.google.com/support/privacy-policy"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firebase
                  </a>
                  ,{" "}
                  <a
                    href="https://supabase.com/privacy-policy"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Supabase
                  </a>
                  ,{" "}
                  <a
                    href="https://wasabi.com/legal/privacy-policy-policy/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wasabi
                  </a>
                  ,{" "}
                  <a
                    href="https://policies.google.com/privacy-policy"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AdMob
                  </a>
                  .
                </p>
              </li>
              <li>
                <strong>Legal Requirements</strong>: If required by law (e.g., a
                court order), we may share data to comply with legal obligations
                or protect our rights.
              </li>
              <li>
                <strong>Safety</strong>: To prevent fraud, abuse, or harm, we
                may share data if absolutely necessary.
              </li>
            </ul>
            <p className="text-gray-600">
              We'll never share your data for purposes beyond what's described
              here without your explicit permission.
            </p>

            <h2 id="international-transfers">
              5. International Data Transfers
            </h2>
            <p className="text-gray-600">
              Your personal data may be stored and processed in countries
              outside of your country of residence, including the United States
              and other countries where our service providers (e.g., Firebase,
              Supabase, Wasabi) operate. We ensure that your data is transferred
              and processed in compliance with applicable data protection laws,
              including the{" "}
              <a
                href="https://gdpr.eu/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                General Data Protection Regulation (GDPR)
              </a>
              , by using standard contractual clauses or other appropriate
              safeguards.
            </p>

            <h2 id="children-privacy">6. Children's Privacy</h2>
            <p className="text-gray-600">
              Locae is not intended for children under the age of 13. We do not
              knowingly collect personal information from children under 13. If
              we become aware that we have collected personal information from a
              child under 13 without parental consent, we will take steps to
              delete such information from our systems.
            </p>

            <h2 id="user-rights">7. Your Rights and Choices</h2>
            <p className="text-gray-600">
              You're in control of your data. Here's what you can do:
            </p>
            <ul className="text-gray-600">
              <li>
                <strong>Update Your Profile</strong>: Edit your user profile
                (normal users) or store profile (shop owners, including product
                details or store location) in the app's settings.
              </li>
              <li>
                <strong>Delete Your Data</strong>: To delete your account and
                all associated data (including user/store profiles, location,
                messages/stories for normal users, and media files), contact us
                (see Section 9). We will remove your data from Supabase,
                Firebase, and Wasabi within 3 to 5 days, except where we're
                legally required to keep it. AdMob data is managed by Google per
                their policies.
              </li>
              <li>
                <strong>Delete Location Data (Normal Users)</strong>: You can
                delete your most recent location data at any time through the
                app's settings. Since we only store one location, this removes
                all location data we have for you.
              </li>
              <li>
                <strong>Enable/Disable Location Sharing (Normal Users)</strong>:
                Turn location sharing on or off in the app's settings. When off,
                Locae stops collecting or updating your location, and your
                profile won't appear in nearby user or store searches. You can
                toggle this anytime.
              </li>
              <li>
                <strong>Manage Store Location (Shop Owners)</strong>: You can
                update your store's one-time location in the app's settings. To
                delete it, contact us (see Section 9), and we'll remove it
                within 3 to 5 days.
              </li>
              <li>
                <strong>Manage Messages and Stories (Normal Users)</strong>:
                After you read a message, the previous message is automatically
                deleted from our Firebase database but may remain on your device
                and the recipient's device locally. Chat and story media files
                are automatically deleted from Wasabi within 7 days. You can
                also delete entire conversations in the app, which removes
                remaining messages from Firebase immediately.
              </li>
              <li>
                <strong>Manage Permissions</strong>: You can turn off location
                access or notifications in your device settings, but this may
                limit some app features (e.g., user discovery for normal users
                or store visibility for shop owners).
              </li>
              <li>
                <strong>Request Your Data</strong>: Want a copy of your data?
                Contact us, and we'll help you out (see Section 9).
              </li>
              <li>
                <strong>Opt-Out of Personalized Ads</strong>: You can opt out of
                personalized ads by adjusting your ad preferences in the app's
                settings or through your device's ad settings (e.g., Google's{" "}
                <a
                  href="https://adssettings.google.com/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ad Settings
                </a>
                ). For more information, visit{" "}
                <a
                  href="https://policies.google.com/privacy-policy"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AdMob's privacy policy
                </a>
                .
              </li>
            </ul>
            <p className="text-gray-600">
              If you're in a region like the European Union (GDPR) or California
              (CCPA), you have additional rights, such as data portability or
              objecting to data processing. Just reach out, and we'll guide you.
            </p>

            <h2 id="data-retention">8. How Long We Keep Your Data</h2>
            <ul className="text-gray-600">
              <li>
                <strong>Active Accounts</strong>: We keep your data, including
                your most recent location (normal users) or one-time store
                location (shop owners), as long as you use Locae to provide the
                app's features.
              </li>
              <li>
                <strong>Deleted Accounts</strong>: If you request account
                deletion by contacting us, we remove your data, including
                user/store profiles, location from Supabase, authentication and
                remaining messages/stories (for normal users) from Firebase, and
                media files from Wasabi, within 3 to 5 days, except where we're
                required to keep it (e.g., for legal reasons). AdMob data is
                managed by Google per their retention policies.
              </li>
              <li>
                <strong>Location Data</strong>:
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Normal Users</strong>: We store only your most
                    recent location on Supabase. When you share a new location,
                    it replaces the previous one. If you delete your location
                    data, it's removed immediately.
                  </li>
                  <li>
                    <strong>Shop Owners</strong>: We store your one-time store
                    location on Supabase. You can update it anytime, and it's
                    removed within 3 to 5 days upon request.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Messages and Stories (Normal Users)</strong>: After a
                message is read, the previous message is deleted from our
                Firebase database immediately but may remain stored locally on
                both users' devices (sender and receiver). Chat and story media
                files (e.g., images, videos) are deleted from Wasabi within 7
                days. Entire conversations you delete in the app are removed
                from Firebase immediately.
              </li>
              <li>
                <strong>Inactive Accounts</strong>: If you don't use Locae for
                12 months, we may delete your account and data to keep things
                tidy.
              </li>
            </ul>

            <h2 id="contact">9. Contact Us</h2>
            <p className="text-gray-600">
              Have questions, concerns, or need to delete your data? We're here
              for you!
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
                <strong>Response Time</strong>: We'll get back to you within 5
                business days.
              </li>
            </ul>

            <h2 id="policy-changes">10. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time to reflect new
              features or legal requirements. If we make big changes (like
              collecting new types of data), we'll notify you through the app or
              by email. Check back here for the latest version, marked by the
              "Last Updated" date.
            </p>

            <h2 id="compliance">11. Compliance with Laws</h2>
            <p className="text-gray-600">
              Locae complies with Google Play's{" "}
              <a
                href="https://play.google.com/about/developer-policies/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developer Program Policies
              </a>
              , including data safety requirements. This policy is designed to
              comply with applicable data protection laws, including but not
              limited to the{" "}
              <a
                href="https://gdpr.eu/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                General Data Protection Regulation (GDPR)
              </a>{" "}
              in the European Union and the{" "}
              <a
                href="https://oag.ca.gov/privacy-policy/ccpa"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                California Consumer Privacy Act (CCPA)
              </a>{" "}
              in the United States, where applicable.
            </p>

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
