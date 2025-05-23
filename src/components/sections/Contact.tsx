import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
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
          <motion.div 
            className="md:col-span-2 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '100%', overflow: 'hidden' }}
          >            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >                <motion.div 
                  className="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-2 rounded-lg"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    backgroundColor: "var(--color-primary-200)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail size={20} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <motion.a 
                    href="mailto:sagarwaghmare1384@gmail.com" 
                    className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    sagarwaghmare1384@gmail.com
                  </motion.a>
                </div>
              </motion.div>                <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >                <motion.div 
                  className="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-2 rounded-lg"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: -5,
                    backgroundColor: "var(--color-primary-200)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Phone size={20} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href="tel:+917219330989" className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400">
                    +91 7219330989                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >                <motion.div 
                  className="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-2 rounded-lg"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    backgroundColor: "var(--color-primary-200)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MapPin size={20} />
                </motion.div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <motion.p 
                    className="text-dark-600 dark:text-dark-300"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Santoshe Mata Nagar,N-2 CIDCO,<br />Chhatrapati Sambhajinagar<br />Maharashtra, India
                  </motion.p>
                </div>
              </motion.div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <motion.a 
                  href="https://github.com/SagarSuryakantWaghmare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark-800 dark:bg-dark-700 text-white p-3 rounded-full hover:bg-primary-600 dark:hover:bg-primary-600"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/sagarwaghmare44/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#006699]"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:sagarwaghmare1384@gmail.com" 
                  className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  aria-label="Email Contact"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-3 card p-8 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '100%', overflow: 'hidden' }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0.9 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <motion.div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(var(--primary-500), 0.3)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      type="text"
                      id="name"                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Rajat Ranvir"
                      required
                      className={inputClasses}
                    />
                    <motion.span 
                      className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
                      initial={{ width: 0 }}
                      whileFocus={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Your Email
                  </label>
                  <motion.div className="relative">
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(var(--primary-500), 0.3)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      type="email"
                      id="email"                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rajat.ranvir@example.com"
                      required
                      className={inputClasses}
                    />
                    <motion.span 
                      className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
                      initial={{ width: 0 }}
                      whileFocus={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <motion.div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(var(--primary-500), 0.3)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}                    placeholder="Website Development Opportunity"
                    required
                    className={inputClasses}
                  />
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
                    initial={{ width: 0 }}
                    whileFocus={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <motion.div className="relative">
                  <motion.textarea
                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(var(--primary-500), 0.3)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}                    placeholder="Hi Sagar, I'm interested in discussing a potential collaboration on a web development project..."
                    required
                    className={inputClasses}
                  />                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-primary-500"
                    initial={{ width: 0 }}
                    whileFocus={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Button 
                  type="submit" 
                  className={`flex items-center gap-2 ${isSubmitting ? 'opacity-70' : ''}`}
                  // @ts-ignore
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <motion.span
                      className="flex items-center gap-2"
                      animate={{ 
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      Sending...
                      <motion.span
                        animate={{
                          rotate: 360
                        }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Send size={16} />
                      </motion.span>
                    </motion.span>
                  ) : (
                    <motion.span
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Send Message
                      <Send size={16} />
                    </motion.span>
                  )}
                </Button>
                
                {submitSuccess && (
                  <motion.div 
                    className="ml-4 text-green-600 dark:text-green-400 flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-center w-5 h-5 bg-green-600 dark:bg-green-500 rounded-full"
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.span>
                    Message sent successfully!
                  </motion.div>
                )}
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
