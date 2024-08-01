import ContactForm from "../components/Contact/ContactForm";
import ContactLocation from "../components/Contact/ContactLocation";
import BaseLayout from "../Layouts/BaseLayout";

const Contact = () => {
  return (
    <BaseLayout  newsletter={false}>
    <div className="container">
      <div className="contact__wrapper">
        <div className="contact__header">
          <h2>Contact Us</h2>
          <p>Have any question? Fill out the form and we'll love to hear, we'll in touch shortly</p>
        </div>
        <div className="contact__content">
        <div className="contact__location">
          <ContactLocation />
        </div>
        <div className="contact__location">
          <ContactForm/>
        </div>
        </div>
      </div>
    </div>
    </BaseLayout>
  );
};

export default Contact;
