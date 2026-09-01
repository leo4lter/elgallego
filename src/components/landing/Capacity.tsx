import { motion } from 'framer-motion';
import { Users, Wrench, Truck, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Capacity = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const capacities: Capacity[] = [
  {
    icon: Users,
    title: 'Equipo Operativo Estable',
    description: 'Mano de obra calificada con continuidad operativa garantizada.',
  },
  {
    icon: Wrench,
    title: 'Maquinaria Propia',
    description: 'Equipamiento completo para múltiples frentes de trabajo.',
  },
  {
    icon: Truck,
    title: 'Logística Interna',
    description: 'Transporte y abastecimiento propio para respuesta inmediata.',
  },
  {
    icon: Layers,
    title: 'Múltiples Frentes',
    description: 'Capacidad de ejecutar varias obras en simultáneo.',
  },
];

const team = [
  { name: 'Ing. Eduardo Midaglia', role: 'Dirección Técnica' },
  { name: 'Cont. Diego Bacciadone', role: 'Dirección Administrativa' },
  { name: 'Cont. Diego Vázquez', role: 'Gestión Contable' },
  { name: 'Fernando Daniel Maggiori', role: 'Responsable Operativo' },
];

export default function Capacity() {
  return (
    <section id="capacidad" className="section-py bg-charcoal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-8xl mx-auto container-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-terracotta-400" />
            <span className="text-terracotta-400 text-sm font-semibold tracking-widest uppercase">
              Capacidad Operativa
            </span>
            <div className="w-10 h-px bg-terracotta-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Respaldados por recursos propios
          </h2>
          <p className="text-white/70 text-lg mt-6 leading-relaxed">
            Equipo operativo estable, mano de obra calificada, maquinaria propia,
            logística interna y múltiples frentes de trabajo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {capacities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-charcoal-800 p-8 border border-charcoal-700 hover:border-terracotta-500 transition-colors duration-300"
            >
              <cap.icon className="w-8 h-8 text-terracotta-400 mb-5" strokeWidth={1.25} />
              <h3 className="text-lg text-white mb-2">{cap.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="border-t border-charcoal-700 pt-12"
        >
          <h3 className="text-center text-white/80 text-sm font-semibold tracking-widest uppercase mb-10">
            Equipo Directivo
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-charcoal-800 border border-terracotta-500/30">
                  <span className="text-terracotta-400 text-xl font-bold">
                    {member.name.split(' ').slice(-1)[0].charAt(0)}
                  </span>
                </div>
                <p className="text-white font-semibold text-base">{member.name}</p>
                <p className="text-white/50 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
