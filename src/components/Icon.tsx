import React from 'react';
import {
  Brain,
  BrainCircuit,
  Database,
  BarChart2,
  BarChart3,
  Activity,
  GitBranch,
  Globe,
  FileSpreadsheet,
  ShieldCheck,
  Cpu,
  Sparkles,
  Wrench,
  Server,
  Code,
  GraduationCap,
  Linkedin,
  Github,
  Mail,
  FileText,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Award,
  ChevronRight,
  Download,
  BookOpen,
  Calendar,
  Layers,
  ArrowUpRight,
  Sun,
  Moon,
  Menu,
  X,
  Search,
  Filter,
  Info,
  Clock,
  Scan,
  Fingerprint
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "w-5 h-5", size }) => {
  const iconMap: Record<string, React.ElementType> = {
    'brain': Brain,
    'brain-circuit': BrainCircuit,
    'database': Database,
    'bar-chart-2': BarChart2,
    'bar-chart-3': BarChart3,
    'activity': Activity,
    'git-branch': GitBranch,
    'globe': Globe,
    'file-spreadsheet': FileSpreadsheet,
    'shield-check': ShieldCheck,
    'cpu': Cpu,
    'sparkles': Sparkles,
    'wrench': Wrench,
    'server': Server,
    'code': Code,
    'graduation-cap': GraduationCap,
    'linkedin': Linkedin,
    'github': Github,
    'mail': Mail,
    'file-text': FileText,
    'map-pin': MapPin,
    'check-circle': CheckCircle2,
    'external-link': ExternalLink,
    'award': Award,
    'chevron-right': ChevronRight,
    'download': Download,
    'book-open': BookOpen,
    'calendar': Calendar,
    'layers': Layers,
    'arrow-up-right': ArrowUpRight,
    'sun': Sun,
    'moon': Moon,
    'menu': Menu,
    'x': X,
    'search': Search,
    'filter': Filter,
    'info': Info,
    'clock': Clock,
    'scan': Scan,
    'fingerprint': Fingerprint,
  };

  const Component = iconMap[name.toLowerCase()] || Activity;
  return <Component className={className} size={size} />;
};

