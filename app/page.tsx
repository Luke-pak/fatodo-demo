'use client';

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[88vh] sm:min-h-[87vh] flex flex-col justify-center">
        <div className="flex justify-center mx-auto max-w-3xl">
          <h1 className="font-bold text-5xl sm:text-7xl lg:text-9xl dark:text-gray-500">
            FACT⏰DO
          </h1>
        </div>

        <div className="flex gap-4 mt-10">
          <div className="bg-primary uppercase p-3 rounded-lg font-semibold text-white">
            primary
          </div>
          <div className="bg-success uppercase p-3 rounded-lg font-semibold text-white">
            success
          </div>
          <div className="bg-secondary uppercase p-3 rounded-lg font-semibold text-white">
            secondary
          </div>
          <div className="bg-danger uppercase p-3 rounded-lg font-semibold text-white">
            danger
          </div>
          <div className="bg-warning uppercase p-3 rounded-lg font-semibold text-white">
            warning
          </div>
          <div className="bg-info uppercase p-3 rounded-lg font-semibold text-white">
            info
          </div>
        </div>

        <div className="flex justify-center mx-auto max-w-3xl font-bold text-5xl sm:text-7xl lg:text-9xl mt-10">
          <p className="text-[#0c1e54]">F</p>
          <p>AC</p>
          <p className="text-[#6ee699]">T</p>
          <p>ODO</p>
        </div>

        <div className="flex justify-center mx-auto max-w-3xl font-bold text-5xl sm:text-7xl lg:text-9xl mt-10 p-5 item-center">
          <div className="bg-[#0c1e54] text-white flex">FAC</div>
          <div className="bg-[#6ee699] text-white flex">TODO</div>
        </div>

        <div className="flex justify-center mx-auto max-w-3xl font-bold text-5xl sm:text-7xl lg:text-9xl mt-10 p-5 item-center">
          <div className="bg-[#0c1e54] text-white flex">FAC</div>
          <div className="bg-emerald-400 text-white flex">TODO</div>
        </div>

        <div className="flex justify-center mx-auto max-w-3xl font-bold text-5xl sm:text-7xl lg:text-9xl mt-10 p-5 item-center">
          <div className="bg-blue-900 text-white flex">FAC</div>
          <div className="bg-emerald-400 text-white flex">TODO</div>
        </div>

        <div className="flex justify-center mx-auto max-w-3xl font-bold text-5xl sm:text-7xl lg:text-9xl mt-10 bg-gradient-to-b from-[#0c1e54] to-[#6ee699] p-5 pt-3 item-center text-white">
          FACTODO
        </div>

        <div className="flex justify-center mx-auto max-w-3xl font-bold text-5xl sm:text-7xl lg:text-9xl mt-10 bg-gradient-to-br from-blue-900 to-emerald-400 p-5 pt-3 item-center text-white">
          FACTODO
        </div>
      </div>
    </>
  );
}
