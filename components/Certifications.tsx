import { Award } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '@/data/certifications';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#BEB7A7]"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#112250] tracking-tight mb-3">
          Licencias & Certificaciones
        </h2>
        <p className="text-[#3B507D] max-w-xl">
          Acreditaciones en Ciberseguridad, Desarrollo Full-Stack, Bases de Datos e
          Inteligencia Artificial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div
            key={cert.title}
            className="p-5 bg-[#E7E2CE] border border-[#BEB7A7] rounded-xl flex items-start gap-4 hover:border-[#112250] transition-colors"
          >
            <div className="p-3 rounded-lg bg-[#112250] border border-[#3B507D] text-[#E7E2CE] shrink-0 mt-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-semibold text-[#112250] text-base truncate">
                  {cert.title}
                </h4>
                <span className="text-xs font-mono text-[#3B507D] shrink-0">
                  {cert.date}
                </span>
              </div>
              <p className="text-sm font-medium text-[#3B507D] mb-1">{cert.issuer}</p>
              <p className="text-xs text-[#3B507D] font-mono truncate">
                ID: <span className="text-[#112250]">{cert.credentialId}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}