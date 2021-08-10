import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import CheckSvg from "./CheckSvg";

export default function Table() {
  return (
    <div className="hidden md:table w-9/12 my-4">
      <div className="table-row">
        <div className="font-medium table-cell border-b border-r border-graylight"></div>
        <div className="font-medium table-cell align-middle bg-purplelight py-4 border-b border-r border-graylight">
          <img alt="Hack+ Logo" src="/logo.svg" className="mx-auto" />
        </div>
        <div className="font-medium table-cell align-middle py-4 border-b border-graylight">
          <img
            alt="Image"
            src="/logos/traditional.svg"
            className="max-h-20 mx-auto"
          />
        </div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell py-6 border-b border-r border-graylight">
          Program
        </div>
        <div className="font-medium table-cell text-purple text-2xl text-center bg-purplelight border-b border-r border-graylight">
          Events+
        </div>
        <div className="font-medium table-cell text-center align-middle border-b border-graylight">
          Traditional FS
        </div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell align-middle py-5 border-b border-r border-graylight">
          FDIC-backed bank account
        </div>
        <div className="font-medium table-cell align-middle bg-purplelight border-b border-r border-graylight w-52 px-24">
          <CheckSvg color="green" />
        </div>
        <div className="font-medium table-cell text-center align-middle w-52 px-24  border-b border-graylight">
          <CheckSvg color="blue" />
        </div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell py-5 border-b border-r border-graylight">
          501(c)(3) Status
        </div>
        <div className="font-medium table-cell text-center align-middle bg-purplelight border-b border-r border-graylight w-52 px-24">
          <CheckSvg color="green" />
        </div>
        <div className="font-medium table-cell align-middle w-52 px-24 border-b border-graylight">
          <CheckSvg color="blue" />
        </div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell py-5 border-b border-r border-graylight">
          Full org management platform
        </div>
        <div className="font-medium table-cell text-center align-middle bg-purplelight border-b border-r border-graylight w-52 px-24">
          <CheckSvg color="green" />
        </div>
        <div className="font-medium table-cell text-center align-middle border-b border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell py-5 border-b border-r border-graylight">
          Unlimited free Visa credit cards
        </div>
        <div className="font-medium table-cell text-center align-middle bg-purplelight border-b border-r border-graylight w-52 px-24">
          <CheckSvg color="green" />
        </div>
        <div className="font-medium table-cell text-center align-middle border-b border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell py-5 border-b border-r border-graylight">
          Expense reimbursements
        </div>
        <div className="font-medium table-cell text-center align-middle bg-purplelight border-b border-r border-graylight w-52 px-24">
          <CheckSvg color="green" />
        </div>
        <div className="font-medium table-cell text-center align-middle border-b border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell py-5 border-b border-r border-graylight">
          Automated vendor payments <br />
          <span className="text-graymed text-sm">ACH & check</span>
        </div>
        <div className="font-medium table-cell text-center align-middle bg-purplelight border-b border-r border-graylight w-52 px-24">
          <CheckSvg color="green" />
        </div>
        <div className="font-medium table-cell text-center align-middle border-b border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell py-5 border-b border-r border-graylight">
          Complimentary event insurance
        </div>
        <div className="font-medium table-cell text-center align-middle bg-purplelight border-b border-r border-graylight w-52 px-24">
          <CheckSvg color="green" />
        </div>
        <div className="font-medium table-cell text-center align-middle border-b border-graylight"></div>
      </div>

      <div className="table-row">
        <div className="font-medium table-cell py-5 border-b border-r border-graylight">
          Free domain + hosting
        </div>
        <div className="font-medium table-cell text-center align-middle bg-purplelight border-b border-r border-graylight w-52 px-24">
          <CheckSvg color="green" />
        </div>
        <div className="font-medium table-cell text-center align-middle border-b border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell py-5 border-b border-r border-graylight">
          $45,000+ in free equipment/software
        </div>
        <div className="font-medium table-cell text-center align-middle bg-purplelight border-b border-r border-graylight w-52 px-24">
          <CheckSvg color="green" />
        </div>
        <div className="font-medium table-cell text-center align-middle border-b border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="font-medium table-cell py-5 border-b border-r border-graylight">
          Cost <br />
          <span className="text-sm text-graymed">on average</span>
        </div>
        <div className="table-cell text-center font-bold align-middle bg-purplelight border-b border-r border-graylight text-2xl text-purple">
          Free!
        </div>
        <div className="font-medium table-cell align-middle text-center border-b border-graylight">
          Up to 20% of revenue
        </div>
      </div>
    </div>
  );
}
