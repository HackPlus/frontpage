// import { FaTachometerAlt, FaFileContract, FaHeart, FaPlug, FaNetworkWired, FaMoneyBillWave, FaFeatherAlt, FaHouseDamage } from "react-icons/fa"

export default function Service({ heading, description, children }) {
  return (
    <div className="flex flex-col space-y-4">
      {children}
      <p className="text-2xl font-medium text-purple">{heading}</p>
      <p className="text-gray text-base">{description}</p>
    </div>
  );
}

// function icon() {
//     switch (icon) {
//         case 'tachometer':
//             return (
//                 <FaTachometerAlt size={30} color="white" />
//             )
//         case 'fileContract':
//             return (
//                 <FaFileContract size={30} color="white" />
//             )
//         case 'money':
//             return (
//                 <FaMoneyBillWave size={30} color="white" />
//             )
//         case 'feather':
//             return (
//                 <FaFeatherAlt size={30} color="white" />
//             )
//         case 'houseDamage':
//             return (
//                 <FaHouseDamage size={30} color="white" />
//             )
//         case 'layerGroup':
//             return (
//                 <FaFileContract size={30} color="white" />
//             )
//         case 'plug':
//             return (
//                 <FaPlug size={30} color="white" />
//             )
//         case 'networkWired':
//             return (
//                 <FaNetworkWired size={30} color="white" />
//             )
//         case 'heart':
//             return (
//                 <FaHeart size={30} color="white" />
//             )
//         default:
//             break;
//     }
// }

// fa- file-contract, tachometer-alt-fast, money-bill-wave, feather-alt, house-damage layer-group, plug, network wired, heart
