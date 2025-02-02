import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineRoute, MdOutlineFeedback } from "react-icons/md";
import { PiClockCounterClockwise } from "react-icons/pi";

export const mobileLinks = [
  {
    href: "/",
    displayName: "Live traffic",
  },
  {
    href: "/trips",
    displayName: "Trips",
  },
  {
    href: "/reports",
    displayName: "Reports",
  },
  {
    href: "/community",
    displayName: "Community",
  },
];

export const openAuthenticatedLinks = [
  {
    href: "/profile",
    displayName: "Profile",
    icon: <IoPersonOutline className="text-xl" />,
  },
  {
    href: "/trip-history",
    displayName: "Trip History",
    icon: <PiClockCounterClockwise className="text-xl" />,
  },
  {
    href: "/favorite-routes",
    displayName: "Favorite Routes",
    icon: <MdOutlineRoute className="text-xl" />,
  },
  {
    href: "/report-happening",
    displayName: "Report Happening",
    icon: <IoMdInformationCircleOutline className="text-xl" />,
  },
  {
    href: "/feedback-and-rating",
    displayName: "Feedback & Rating",
    icon: <MdOutlineFeedback className="text-xl" />,
  },
];

export const navLinks = [
  {
    pathname: "/",
    displayName: "Live traffic",
  },
  {
    pathname: "/trip",
    displayName: "Trip",
  },
  {
    pathname: "/reports",
    displayName: "Reports",
  },
  {
    pathname: "/community",
    displayName: "Community",
  },
  {
    pathname: "/emergency",
    displayName: "Emergency",
  },
];
