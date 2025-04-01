import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground">
            Have questions, suggestions, or want to contribute to Mauzl Blog?
            Wed love to hear from you!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="bg-muted/30 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Our Address</p>
                    <p className="text-muted-foreground">
                      123 Culture Street, Global City, 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">mauzlshop@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Office Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="mt-12">
          <div className="rounded-lg overflow-hidden h-[400px] bg-muted/30 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-muted-foreground mb-2">Interactive Map</p>
              <p className="font-medium">
                Map would be embedded here in a production environment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
