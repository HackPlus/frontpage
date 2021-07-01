import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

export default function Table() {
  return (
    <div className="hidden md:table w-9/12 my-4">
      <div className="table-row">
        <div className="table-cell  border-b-2 border-r-2 border-graylight"></div>
        <div className="table-cell bg-purplelight py-4 border-b-2 border-r-2 border-graylight">
          <img alt="Hack+ Logo" src="/logo.svg" className="mx-auto" />
        </div>
        <div className="table-cell py-4 border-b-2 border-graylight">
          <img alt="Image" src="/logos/traditional.svg" className="max-h-20" />
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell py-6 border-b-2 border-r-2 border-graylight">
          Program
        </div>
        <div className="table-cell text-purple text-2xl font-medium text-center bg-purplelight border-b-2 border-r-2 border-graylight">
          Events+
        </div>
        <div className="table-cell text-center border-b-2 border-graylight">
          Traditional FS
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          FDIC-backed bank account
        </div>
        <div className="table-cell  bg-purplelight border-b-2 border-r-2 border-graylight w-52 px-24">
          <AiFillCheckCircle
            size={35}
            color="#28a745"
            className="text-center"
          />
        </div>
        <div className="table-cell text-center w-52 px-24  border-b-2 border-graylight">
          <AiOutlineCheckCircle size={35} color="#1ac9e7" />
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          501(c)(3) Status
        </div>
        <div className="table-cell text-center bg-purplelight border-b-2 border-r-2 border-graylight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell w-52 px-24 border-b-2 border-graylight">
          <AiOutlineCheckCircle size={35} color="#1ac9e7" />
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          Full org management platform
        </div>
        <div className="table-cell text-center bg-purplelight border-b-2 border-r-2 border-graylight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center border-b-2 border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          Unlimited free Visa credit cards
        </div>
        <div className="table-cell text-center bg-purplelight border-b-2 border-r-2 border-graylight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center border-b-2 border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          Expense reimbursements
        </div>
        <div className="table-cell text-center bg-purplelight border-b-2 border-r-2 border-graylight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center border-b-2 border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          Automated vendor payments <br />
          <span className="text-graymed text-sm">ACH & check</span>
        </div>
        <div className="table-cell text-center bg-purplelight border-b-2 border-r-2 border-graylight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center border-b-2 border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          Complimentary event insurance
        </div>
        <div className="table-cell text-center bg-purplelight border-b-2 border-r-2 border-graylight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center border-b-2 border-graylight"></div>
      </div>

      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          Free domain + hosting
        </div>
        <div className="table-cell text-center bg-purplelight border-b-2 border-r-2 border-graylight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center border-b-2 border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          $45,000+ in free equipment/software
        </div>
        <div className="table-cell text-center bg-purplelight border-b-2 border-r-2 border-graylight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center border-b-2 border-graylight"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5 border-b-2 border-r-2 border-graylight">
          Cost <br />
          <span className="text-sm text-graymed">on average</span>
        </div>
        <div className="table-cell text-center bg-purplelight border-b-2 border-r-2 border-graylight text-2xl font-medium text-purple">
          Free!
        </div>
        <div className="table-cell w- text-center border-b-2 border-graylight">
          Up to 20% of revenue
        </div>
      </div>
    </div>
  );
}
