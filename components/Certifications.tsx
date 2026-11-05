import { Award } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '@/data/certifications';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-[#1E3653]"
    >
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#F0D4BF] tracking-tight mb-3">
          Licencias & Certificaciones
        </h2>
        <p className="text-[#A4B5C4] max-w-xl">
          Acreditaciones en Ciberseguridad, Desarrollo Full-Stack, Bases de Datos e
          Inteligencia Artificial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div
            key={cert.title}
            className="p-5 bg-[#1E3653] border border-[#305B7E] rounded-xl flex items-start gap-4 hover:border-[#864C2C] transition-colors"
          >
            <div className="p-3 rounded-lg bg-[#4F210D] border border-[#6E3115] text-[#F0D4BF] shrink-0 mt-0.5">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-semibold text-[#F0D4BF] text-base truncate">
                  {cert.title}
                </h4>
                <span className="text-xs font-mono text-[#A4B5C4] shrink-0">
                  {cert.date}
                </span>
              </div>
              <p className="text-sm font-medium text-[#864C2C] mb-1">{cert.issuer}</p>
              <p className="text-xs text-[#A4B5C4] font-mono truncate">
                ID: <span className="text-[#F0D4BF]">{cert.credentialId}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}