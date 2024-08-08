import HeaderFooterLayout from "../layouts/HeaderFooterLayout";

const Support = () => {
  return (
    <HeaderFooterLayout title="Sprynt / Support">
      <div className="bg-bckgrnd-main container mx-auto my-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start mb-6">
          <div className="text-left lg:w-2/3">
            <h1 className="text-text-dark font-bold text-2xl sm:text-3xl lg:text-4xl py-4">
              Welcome to Sprynt Support
            </h1>
            <p className="text-text-dark font-normal text-base sm:text-lg lg:text-xl py-2">
              We're here to help you make the most of Sprynt. Whether you're
              just getting started or need assistance with advanced features,
              our support resources are designed to provide you with the answers
              and assistance you need.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start mb-6">
          <div className="text-left lg:w-2/3">
            <h1 className="text-text-dark font-bold text-2xl sm:text-3xl lg:text-4xl py-4">
              Frequently Asked Questions (FAQs)
            </h1>
            <p className="text-text-dark font-normal text-base sm:text-lg lg:text-xl py-2">
              Find quick answers to the most frequently asked questions about
              Sprynt. Our FAQ section covers a wide range of topics, including
              account setup, project management features, billing inquiries, and
              more.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start mb-6">
          <div className="text-left lg:w-2/3">
            <h1 className="text-text-dark font-bold text-2xl sm:text-3xl lg:text-4xl py-4">
              Community Forum
            </h1>
            <p className="text-text-dark font-normal text-base sm:text-lg lg:text-xl py-2">
              Connect with other Sprynt users, share tips and best practices,
              and get answers from our community of experts. Our community forum
              is a great place to seek advice, share your experiences, and learn
              from others.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start mb-6">
          <div className="text-left lg:w-2/3">
            <h1 className="text-text-dark font-bold text-2xl sm:text-3xl lg:text-4xl py-4">
              Contact Support
            </h1>
            <p className="text-text-dark font-normal text-base sm:text-lg lg:text-xl py-2">
              Need personalized assistance? Our support team is ready to help
              you with any issues or questions you may have. Reach out to us via
              email, phone, or live chat, and we’ll get back to you as soon as
              possible.
            </p>
            <p className="text-text-dark font-medium text-base sm:text-lg lg:text-xl py-2">
              Email: support@sprynt.com <br />
              Phone: 099 000 000
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start mb-6">
          <div className="text-left lg:w-2/3">
            <h1 className="text-text-dark font-bold text-2xl sm:text-3xl lg:text-4xl py-4">
              System Status and Updates
            </h1>
            <p className="text-text-dark font-normal text-base sm:text-lg lg:text-xl py-2">
              Check the current status of Sprynt’s services and stay updated on
              any scheduled maintenance or known issues. Our system status page
              provides real-time information to keep you informed.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start mb-6">
          <div className="text-left lg:w-2/3">
            <h1 className="text-text-dark font-bold text-2xl sm:text-3xl lg:text-4xl py-4">
              Feedback
            </h1>
            <p className="text-text-dark font-normal text-base sm:text-lg lg:text-xl py-2">
              We’re constantly looking to improve Sprynt, and your feedback
              plays a crucial role in that process. Let us know what you love,
              what can be improved, and any features you'd like to see in the
              future.
            </p>
          </div>
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default Support;