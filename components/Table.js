import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";

export default function Table() {
  return (
    <div className="hiddenonsmallscreens">
      <table className="">
        <thead>
          <tr>
            <th scope="col" />
            <th className="bg-purplelight" scope="col">
              <img alt="Hack+ Logo" src="/logo.svg" />
            </th>
            <th scope="col">
              <img
                alt="Image"
                src="/logos/traditional.svg"
                className="max-h-20"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="font-normal text-lg">Program</span>
              <span />
            </th>
            <td className="bg-purplelight text-center">
              <span className="text-purple font-semibold text-xl">Events+</span>
              <span />
            </td>
            <td>
              <span>Traditional FS</span>
              <span />
            </td>
          </tr>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                FDIC-backed bank account
              </span>
              <span />
            </th>
            <td className="bg-purplelight">
              <div className="flex justify-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </td>
            <td>
              <div className="flex justify-center">
                <AiOutlineCheckCircle color="#1AC9E7" size={30} />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                501(c)(3) Status
              </span>
              <span />
            </th>
            <td className="bg-purplelight">
              <div className="flex justify-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </td>
            <td>
              <div className="flex justify-center">
                <AiOutlineCheckCircle color="#1AC9E7" size={30} />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                Full org management platform
              </span>
              <span />
            </th>
            <td className="bg-purplelight">
              <div className="flex justify-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                Unlimited free Visa credit cards
              </span>
              <span />
            </th>
            <td className="bg-purplelight">
              <div className="flex justify-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                Expense reimbursements
              </span>
              <span />
            </th>
            <td className="bg-purplelight">
              <div className="flex justify-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                Automated vendor payments
              </span>
              <span>ACH &amp; check</span>
            </th>
            <td className="bg-purplelight">
              <div className="flex justify-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                Complimentary event insurance
              </span>
              <span />
            </th>
            <td className="bg-purplelight">
              <div className="flex justify-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                Free domain + hosting
              </span>
              <span />
            </th>
            <td className="bg-purplelight">
              <div className="flex justify-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                $45,000+ in free equipment/software
              </span>
              <span />
            </th>
            <td className="bg-purplelight">
              <div className="flex justify-center">
                <AiFillCheckCircle color="green" size={30} />
              </div>
            </td>
            <td />
          </tr>
          <tr className="text-center ">
            <th scope="row" className="py-4 px-14">
              <span className="text-lg font-normal flex justify-start">
                Cost
              </span>
              <br />
              <span className="text-graymed font-medium text-sm">
                on average
              </span>
            </th>
            <td className="bg-purplelight">
              <h4 className="text-purple font-semibold">Free!</h4>
            </td>
            <td>
              <p className="">Up to 20% of revenue</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
