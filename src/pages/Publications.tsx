
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PublicationsContent from "@/components/Publications";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Publications = () => {
  return (
    <div className="min-h-screen bg-background antialiased relative overflow-x-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
      
      <Navigation />
      <div className="pt-24 pb-16 max-w-3xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
        
        <PublicationsContent />
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
