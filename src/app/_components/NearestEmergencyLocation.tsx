import FixedTitle from "@/components/FixedTitle";

function NearestEmergencyLocation() {
  return (
    <>
      <div className="relative border border-gray-300 mt-12">
        <FixedTitle title="Nearest Emergency Location" />

        <div className="mt-16 mb-4 pl-12 text-sm text-blue-dark space-y-2 max-[670px]:px-4">
          <p className="">Police station</p>
          <p className="">Ambulance</p>
          <p className="">
            Federal Road Safety Corps (FRSC)
          </p>
          <p className="">
            Lagos State Traffic Management Authority (LASTMA)
          </p>
          <p className="">Federal Fire Service</p>
        </div>
      </div>
    </>
  );
}

export default NearestEmergencyLocation;
