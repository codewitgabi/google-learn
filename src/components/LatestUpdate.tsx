import Image from "next/image";
import LatestUpdateImage from "/public/road-closed-diversion.png";
import FixedTitle from "@/components/FixedTitle";

function LatestUpdate() {
  return (
    <>
      <div className="relative border border-gray-300 mt-12">
        <FixedTitle title="Latest updates" />

        <div className="mt-16 mb-4 pl-12 max-[670px]:px-4">
          <div className="w-[340px] space-y-2 max-[670px]:w-full">
            <h4 className="text-blue-dark opacity-85">
              Road Block at Sapele Express Junction at 12:30pm
            </h4>
            <p className="opacity-85 text-[0.8rem]">
              Local residents expressed frustration and inconvenience due to the
              unexpected road block, with some taking to social media platforms
              to share updates and vent about the situation.
            </p>
            <button className="text-sm text-blue-dark">See more</button>
          </div>
        </div>

        <div className="w-full">
          <Image
            src={LatestUpdateImage}
            width={200}
            height={200}
            alt="road closed diversion"
            className="absolute bottom-0 right-0 max-[670px]:hidden"
          />
        </div>
      </div>
    </>
  );
}

export default LatestUpdate;
