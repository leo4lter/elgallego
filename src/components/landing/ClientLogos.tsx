import { motion } from 'framer-motion';
import { useData } from '@/context/DataContext';
import { Building } from 'lucide-react';

export default function ClientLogos() {
  const { clients, loading } = useData();

  if (loading || clients.length === 0) return null;

  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 bg-white border-y border-charcoal-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-8xl mx-auto container-px mb-8"
      >
        <p className="text-center text-charcoal-400 text-sm font-semibold tracking-widest uppercase">
          Confían en nosotros
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        <div className="flex gap-12 animate-marquee w-max">
          {doubled.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              className="flex items-center gap-3 flex-shrink-0 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                <img
                  src={client.logo_url}
                  alt={client.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-charcoal-600 font-semibold text-base whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
