import React from 'react';

interface ServiceFormProps {
  id: string;
  title: string;
  formUrl: string;
  formTitle?: string;
  formDescription?: string;
  important?: string;
}

const ServiceForm = ({ id, formTitle, formDescription, important, formUrl }: ServiceFormProps) => {
  return (
    <div id={id} className="bg-gray-800 rounded-xl shadow-lg p-8 scroll-mt-20 border border-gray-700">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">
        {formTitle}
      </h2>
      {formDescription && (
        <p className="text-lg text-gray-300 mb-4">{formDescription}</p>
      )}
      {important && (
        <div className="bg-yellow-900/50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-200">{important}</p>
        </div>
      )}
      <iframe
        src={formUrl}
        frameBorder="0"
        className="w-full min-h-[500px] bg-white rounded-lg"
        title={formTitle}
      />
    </div>
  );
};

export default ServiceForm;