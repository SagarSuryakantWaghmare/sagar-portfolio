import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Github, Linkedin, Mail, MapPin, Phone, Send, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear any previous errors
    if (submitError) setSubmitError('');
  };
  
  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.subject.trim()) return 'Subject is required';
    if (!formData.message.trim()) return 'Message is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address';
    
    return null;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const inputClasses = "w-full px-4 py-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white transition-all";
  
  return (
    <section id="contact" className="section-padding bg-dark-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 w-full">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-2 rounded-lg hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:sagarwaghmare1384@gmail.com" 
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    sagarwaghmare1384@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-2 rounded-lg hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href="tel:+917219330989" className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    +91 7219330989
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-2 rounded-lg hover:scale-105 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-dark-600 dark:text-dark-300">
                    Santoshe Mata Nagar,N-2 CIDCO,<br />Chhatrapati Sambhajinagar<br />Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/SagarSuryakantWaghmare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark-800 dark:bg-dark-700 text-white p-3 rounded-full hover:bg-primary-600 dark:hover:bg-primary-600 hover:-translate-y-1 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sagarwaghmare44/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#006699] hover:-translate-y-1 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:sagarwaghmare1384@gmail.com" 
                  className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 hover:-translate-y-1 transition-all duration-300"
                  aria-label="Email Contact"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 card p-8 w-full">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rajat Ranvir"
                    required
                    className={inputClasses}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rajat.ranvir@example.com"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Website Development Opportunity"
                  required
                  className={inputClasses}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi Sagar, I'm interested in discussing a potential collaboration on a web development project..."
                  required
                  className={inputClasses}
                />
              </div>
              
              <div className="flex items-center gap-4 pt-4">
                <Button 
                  type="submit" 
                  className={`flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </Button>
                
                {submitSuccess && (
                  <div className="text-green-600 dark:text-green-400 flex items-center gap-2 animate-fade-in">
                    <div className="flex items-center justify-center w-5 h-5 bg-green-600 dark:bg-green-500 rounded-full">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    Message sent successfully!
                  </div>
                )}

                {submitError && (
                  <div className="text-red-600 dark:text-red-400 flex items-center gap-2 animate-fade-in">
                    <AlertTriangle size={16} />
                    {submitError}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
