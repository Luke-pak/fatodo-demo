'use client';

export default function SizeChecker() {
  return (
    <>
      <h2 className="hidden xl:block">XL</h2>
      <h2 className="hidden lg:block xl:hidden">LG</h2>
      <h2 className="hidden md:block lg:hidden">MD</h2>
      <h2 className="hidden sm:block md:hidden">SM</h2>
      <h2 className="sm:hidden">BASE</h2>
    </>
  );
}
