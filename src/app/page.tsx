import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import AccidentReportedImage from "../../public/accidents-reported.png";
import WeatherImage from "../../public/clear-day.png";
import TrafficSpeedImage from "../../public/traffic-speed.png";
import CongestionLevelImage from "../../public/congestion-level.png";
import LiveTrafficImage from "../../public/road-traffic.jpg";
import Image from "next/image";
import LatestUpdate from "@/components/LatestUpdate";
import NearestEmergencyLocation from "@/components/NearestEmergencyLocation";

function Home() {
  return (
    <>
      {/* Sidebar */}

      <Sidebar />

      <MainContent>
        <div className="grid grid-cols-3 gap-6 max-[1195px]:grid-cols-1 max-[1195px]:gap-0">
          <div className="col-span-2 max-[1195px]:order-1">
            <div className="grid grid-cols-2 gap-4 h-max max-[565px]:grid-cols-1 max-[565px]:gap-2">
              {/* Accidents Reported */}

              <div className="bg-sky-blue flex items-center justify-between gap-4 py-2 px-4 rounded-md">
                <div className="flex items-center gap-4">
                  <Image
                    src={AccidentReportedImage}
                    height={25}
                    width={25}
                    alt="accident-report-image"
                  />
                  <span className="text-[0.75rem] text-blue-dark font-medium">
                    Accidents Reported
                  </span>
                </div>
                <p className="text-red-500 font-semibold">32</p>
              </div>

              {/* Weather */}

              <div className="bg-sky-blue flex items-center justify-between gap-4 py-2 px-4 rounded-md">
                <div className="flex items-center gap-4">
                  <Image
                    src={WeatherImage}
                    height={25}
                    width={25}
                    alt="accident-report-image"
                  />
                  <span className="text-[0.75rem] text-blue-dark font-medium">
                    Weather
                  </span>
                </div>
                <p className="text-red-500 font-semibold">34&deg;C</p>
              </div>

              {/* Traffic speed */}

              <div className="bg-sky-blue flex items-center justify-between gap-4 py-2 px-4 rounded-md">
                <div className="flex items-center gap-4">
                  <Image
                    src={TrafficSpeedImage}
                    height={25}
                    width={25}
                    alt="accident-report-image"
                  />
                  <span className="text-[0.75rem] text-blue-dark font-medium">
                    Traffic Speed
                  </span>
                </div>
                <p className="text-green-500 font-semibold">85</p>
              </div>

              {/* Congestion level */}

              <div className="bg-sky-blue flex items-center justify-between gap-4 py-2 px-4 rounded-md">
                <div className="flex items-center gap-4">
                  <Image
                    src={CongestionLevelImage}
                    height={25}
                    width={25}
                    alt="accident-report-image"
                  />
                  <span className="text-[0.75rem] text-blue-dark font-medium">
                    Congestion Level
                  </span>
                </div>
                <p className="text-yellow-500 font-semibold">15%</p>
              </div>
            </div>

            <LatestUpdate />

            <NearestEmergencyLocation />
          </div>

          <div className="w-full max-[1195px]:mb-16">
            <Image
              src={LiveTrafficImage}
              height={1000}
              width={1000}
              className="w-full max-[1195px]:h-[400px] object-cover max-[1195px]:w-full"
              alt="live traffic image"
            />
          </div>
        </div>
      </MainContent>
    </>
  );
}

export default Home;
