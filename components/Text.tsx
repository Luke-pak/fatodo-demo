'use client';

import clsx from 'clsx';

const formClasses =
  'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

export default function Text({
  title,
  name,
  className,
}: {
  title: string;
  name: string;
  className?: string;
}) {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-semibold text-gray-900"
      >
        {title}
      </label>
      <input
        type="text"
        className={clsx(formClasses, className)}
        name={name}
        id={name}
      />
    </>
  );
}
