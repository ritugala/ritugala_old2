
import { motion } from "framer-motion";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

const publications: Publication[] = [
  {
    title: "Better Synthetic Data by Retrieving and Transforming Existing Datasets",
    authors: "Gandhi, Saumya *, Ritu Gala *, Vijay Viswanathan, Tongshuang Wu, and Graham Neubig",
    venue: "arXiv preprint arXiv:2404.14361",
    year: "2024",
    link: "https://arxiv.org/abs/2404.14361"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Publications
      </motion.h2>
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="border border-border p-4 rounded-lg"
          >
            <h3 className="text-base font-medium mb-2">
              {pub.link ? (
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>
            <p className="text-sm mb-1">{pub.authors}</p>
            <p className="text-sm text-muted-foreground">
              {pub.venue} ({pub.year})
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
