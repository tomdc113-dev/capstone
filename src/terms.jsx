import { Link } from "react-router-dom";
import "./terms.css";

function Terms() {
  return (
    <div className="terms-page">
      <div className="terms-card">
        <h1>Terms & Conditions • Privacy Policy • Refund & Cancellation Policy</h1>

        <section className="terms-section">
          <h2>1. Terms & Conditions</h2>
          <h3>1.1 Acceptance of Terms</h3>
          <p>
            By creating an account, purchasing memberships, booking services, or accessing any content provided by ASG_STRENGTH, you acknowledge that you have read and agreed to these policies.
          </p>
          <h3>1.2 Eligibility</h3>
          <p>
          Users must provide accurate and complete information during registration. Users below the applicable legal age may require consent from a parent or legal guardian where required.
          </p>
          <h3>1.3 Membership and Accounts</h3>
          <p>
          • Membership registration may require personal information. <br/>
          •Members are responsible for keeping account credentials secure.<br/>
          • Account sharing is prohibited unless explicitly allowed. <br/>
          • ASG_STRENGTH reserves the right to suspend or terminate accounts that violate these policies.
          </p>
           <h3>1.4 Payments and Subscriptions</h3>
          <p>
          • Membership fees and service charges must be paid according to the selected plan. <br/>
          • Prices may include applicable taxes and processing fees.<br/>
          • Failure to complete payment may result in suspension or cancellation of services. <br/>
          • Promotional pricing may change or end without prior notice.
          </p>
          <h3>1.5 Website Usage Rules</h3>
          <p>
            Users agree not to:<br/>
          • Use the website for unlawful purposes <br/>
          • Attempt unauthorized access to systems or accounts<br/>
          • Upload harmful or malicious content <br/>
          • Disrupt website operations or security
          </p>
          <h3>1.6 Intellectual Property</h3>
          <p>
         All website content including logos, branding, designs, graphics, text, images, and digital assets are owned by ASG_STRENGTH or used under license. Users may not reproduce, distribute, modify, or commercially use content without written permission.
          </p>
          <h3>1.7 Service Availability</h3>
          <p>
        ASG_STRENGTH may update, modify, suspend, or discontinue website features, schedules, memberships, or services at any time.
          </p>
          <h3>1.8 Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by law, ASG_STRENGTH is not liable for indirect, incidental, or consequential damages resulting from use of the website or services.
          </p>
          <h3>1.9 Third-Party Links</h3>
          <p>
            Our website may contain links to external websites or services. ASG_STRENGTH is not responsible for third-party content or policies.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Privacy Policy</h2>
          <h3>2.1 Information We Collect</h3>
          <p>
            <b>Personal Information:</b> FullName, email address, payment details, and other information provided during registration or service use.<br/>
            <b>Usage Information:</b> We may automatically collect: Device information, Browser type, IP address, Website activity and performance data <br/>
            <b>Communication Information:</b> Information submitted through: Contact forms, Support requests, Feedback and surveys
          </p>
          <h3>2.2 How We Use Information</h3>
          <p>
            ASG_STRENGTH may use collected information to: Manage accounts and memberships, Process payments, Provide customer support, Improve website functionality, Send service-related updates, Protect security and prevent misuse, Meet legal obligations.
          </p>
          <h3>2.3 Cookies and Tracking</h3>
          <p>
            Our website may use cookies to: Maintain login sessions, Remember preferences, Analyze website usage, Improve performance. Users may manage cookie preferences through browser settings.
          </p>
          <h3>2.4 Sharing Information</h3>
          <p>
            ASG_STRENGTH does not sell personal information.Information may be shared only when necessary with: Payment providers, Hosting and technical service providers, Legal authorities when required, Operational service partners.
          </p>
          <h3>2.5 Data Retention</h3>
          <p>
           Information is retained only as long as reasonably necessary for operations, legal compliance, dispute resolution, and security.
          </p>
          <h3>2.6 Data Security</h3>
          <p>
           Reasonable safeguards are used to protect personal information; however, absolute security cannot be guaranteed.
          </p>
          <h3>2.7 Your Rights</h3>
          <p>
           Reasonable safeguards are used to protect personal information; however, absolute security cannot be guaranteed.
          </p>
           <h3>2.8 Children's Privacy</h3>
          <p>
           ASG_STRENGTH does not knowingly collect personal information from children without required authorization.
          </p>
        </section>

        <section className="terms-section">
          <h2>3. Refund & Cancellation Policy</h2>
          <h3>3.1 Membership Cancellation</h3>
          <p>
           Members may request cancellation through account settings or by contacting support.
           Cancellation becomes effective after confirmation and generally applies to future billing cycles.
          </p>
          <h3>3.2 Refund Policy</h3>
          <p>
          Membership fees and service payments are generally non-refundable, except: Duplicate payments, Billing errors, Extended service unavailability caused by ASG_STRENGTH, Cases required by applicable law <br/>Approved refunds may require several business days to process.
          </p>
          <h3>3.3 Subscription Renewals</h3>
          <p>
            For recurring memberships:Billing may renew automatically, Members are responsible for managing renewals, Cancellation after renewal may apply to the next cycle
          </p>
          <h3>3.4 Membership Freeze or Pause</h3>
          <p>
            Where available, membership pauses may be requested and remain subject to eligibility requirements. Paused memberships do not guarantee refunds.
          </p> 
          <h3>3.5 Failed Payments</h3>
          <p>
            Failed payments may result in:Temporary suspension, Restricted access, Membership cancellation after repeated failures.
          </p>
           <h3>3.6 Promotions and Discounts</h3>
          <p>
            Promotional memberships may include separate refund and cancellation conditions.
          </p>
          <h3>3.7 Refund Requests</h3>
          <p>
            <b>Refund requests should include:</b> Full name, Registered email, Membership or transaction reference, Reason for request. Refunds are typically returned using the original payment method.
          </p>
        </section>

        <section className="terms-section">
          <h2>4. Health & Fitness Disclaimer</h2>
          <p>By participating in gym activities and using services offered through ASG_STRENGTH, users acknowledge that exercise carries inherent physical risks. <br/> 
          • Evaluating their own physical condition. <br/>
          • Seeking professional medical advice when necessary. <br/>
          • Following gym guidelines and safety instructions. <br/>ASG_STRENGTH is not responsible for injuries or health outcomes except where required by law.</p>
        </section>

        <section className="terms-section">
          <h2>5. Changes to These Policies</h2>
          <p>
           ASG_STRENGTH reserves the right to update these policies at any time. Continued use of the website and services after updates constitutes acceptance of the revised policies.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Contact Us</h2>
          <p>
            For questions regarding memberships, privacy, refunds, or website policies, contact: <br/>
            Email: dandanrazonado@gmail.com <br/>
            Phone: 09093136752 <br/>
            Address: 123 Fitness Street, City, Country <br/>
            <p></p>
            <b><i>By using ASG_STRENGTH services and website, you acknowledge and agree to this combined policy document.</i></b>
          </p>
        </section>
        <Link to="/register" className="back-link">
          ← Back to registration
        </Link>
      </div>
    </div>
  );
}

export default Terms;