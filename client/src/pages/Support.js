import HeaderFooterLayout from "../layouts/HeaderFooterLayout";

const Support = () => {
  return (
    <HeaderFooterLayout title="Sprynt / Support">
      <div className="bg-bckgrnd-main container mx-auto my-6">
        <div className="flex items-center justify-between mx-24 pl-14">
          <div className="mx-24">
            <h1 className="text-text-dark font-bold text-3xl py-4 break-normal">
              Welcome to Sprynt Support
            </h1>
            <p className="text-text-dark font-normal text-lg break-normal py-2">
              We're here to help you make the most of Sprynt. Whether you're
              just getting started or need assistance with advanced features,
              our support resources are designed to provide you with the answers
              and assistance you need.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bckgrnd-main container mx-auto my-6">
        <div className="flex items-center justify-between mx-24 pl-14">
          <div className="mx-24">
            <h1 className="text-text-dark font-bold text-3xl py-4 break-normal">
              Frequently Asked Questions (FAQs)
            </h1>
            <p className="text-text-dark font-normal text-lg break-normal py-2">
              Find quick answers to the most frequently asked questions about
              Sprynt. Our FAQ section covers a wide range of topics, including
              account setup, project management features, billing inquiries, and
              more.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bckgrnd-main container mx-auto my-6">
        <div className="flex items-center justify-between mx-24 pl-14">
          <div className="mx-24">
            <h1 className="text-text-dark font-bold text-3xl py-4 break-normal">
              Community Forum
            </h1>
            <p className="text-text-dark font-normal text-lg break-normal py-2">
              Connect with other Sprynt users, share tips and best practices,
              and get answers from our community of experts. Our community forum
              is a great place to seek advice, share your experiences, and learn
              from others.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bckgrnd-main container mx-auto my-6">
        <div className="flex items-center justify-between mx-24 pl-14">
          <div className="mx-24">
            <h1 className="text-text-dark font-bold text-3xl py-4 break-normal">
              Contact Support
            </h1>
            <p className="text-text-dark font-normal text-lg break-normal py-2">
              Need personalized assistance? Our support team is ready to help
              you with any issues or questions you may have. Reach out to us via
              email, phone, or live chat, and we’ll get back to you as soon as
              possible.
            </p>
            <p className="text-text-dark font-medium text-lg break-normal py-2">
              Email: support@sprynt.com <br />
              Phone: 099 000 000
            </p>
          </div>
        </div>
      </div>
    </HeaderFooterLayout>
  );
};

export default Support;
