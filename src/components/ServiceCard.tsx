import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

const colorClasses = {
  blue: 'bg-blue-500 hover:bg-blue-600',
  green: 'bg-green-500 hover:bg-green-600',
  purple: 'bg-purple-500 hover:bg-purple-600',
  orange: 'bg-orange-500 hover:bg-orange-600',
  red: 'bg-red-500 hover:bg-red-600',
  teal: 'bg-teal-500 hover:bg-teal-600',
  pink: 'bg-pink-500 hover:bg-pink-600',
  indigo: 'bg-indigo-500 hover:bg-indigo-600'
};

const ServiceCard = ({ id, title, description, icon: Icon, color, index }: ServiceCardProps) => {
  return (
    <AnimatedCard index={index}>
      <a href={`#${id}`} className="block h-full">
        <div className={`h-full rounded-xl shadow-lg transition-all p-3 md:p-4 ${colorClasses[color]} text-white flex flex-col`}>
          <div className="flex flex-col items-center text-center h-full">
            <div className="p-2 bg-white/10 rounded-full mb-2 md:mb-3">
              <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </div>
            <h3 className="text-sm md:text-base font-semibold mb-1">{title}</h3>
            <p className="text-xs md:text-sm text-gray-100 mt-auto">{description}</p>
          </div>
        </div>
      </a>
    </AnimatedCard>
  );
};

export default ServiceCard;