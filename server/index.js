import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import transporter from "./utils/email.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/", (req, res) => {
    res.json({ message: "Portfolio API is running!" });
});

// Contact form API
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false,
                message: "All fields are required" 
            });
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false,
                message: "Please provide a valid email address" 
            });
        }
        
        // Create email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to your own email
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #ff8911; border-bottom: 2px solid #ff8911; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong style="color: #333;">Name:</strong> ${name}</p>
                        <p><strong style="color: #333;">Email:</strong> ${email}</p>
                        <p><strong style="color: #333;">Subject:</strong> ${subject}</p>
                    </div>
                    
                    <div style="background-color: #fff; padding: 20px; border-left: 4px solid #ff8911; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Message:</h3>
                        <p style="color: #555; line-height: 1.6;">${message}</p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
                        <p style="color: #666; margin: 0;">
                            This message was sent from your portfolio contact form.
                        </p>
                        <p style="color: #666; margin: 10px 0 0 0;">
                            Reply directly to <a href="mailto:${email}" style="color: #ff8911;">${email}</a>
                        </p>
                    </div>
                </div>
            `
        };
        
        // Send email
        await transporter.sendMail(mailOptions);
        
        res.status(200).json({ 
            success: true,
            message: "Message sent successfully! I'll get back to you soon." 
        });
        
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ 
            success: false,
            message: "Failed to send message. Please try again later." 
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📧 Email service configured with: ${process.env.EMAIL_USER}`);
});

