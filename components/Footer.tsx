import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { PROFILE } from '@/data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#112250] border-t border-[#3B507D] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-[#F5F4F0] mb-1">{PROFILE.fullName}</h3>
          <p className="text-[#BEB7A7] text-sm">
            {PROFILE.location} | {PROFILE.email} | {year}
          </p>
        </div>

        <div className="flex items-center space-x-6 text-sm text-[#BEB7A7]">
          <a
            href={`mailto:${PROFILE.email}`}
            className="hover:text-[#F5F4F0] transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Correo</span>
          </a>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F4F0] transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#F5F4F0] transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}