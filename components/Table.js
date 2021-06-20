import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";

export default function Table() {
  return (
    <div className="hidden md:table w-9/12">
      <div className="table-row">
        <div className="table-cell"></div>
        <div className="table-cell bg-purplelight py-4">
          <img alt="Hack+ Logo" src="/logo.svg" className="mx-auto" />
        </div>
        <div className="table-cell py-4">
          <img alt="Image" src="/logos/traditional.svg" className="max-h-20" />
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell py-6">Program</div>
        <div className="table-cell text-purple text-2xl font-medium text-center bg-purplelight">
          Events+
        </div>
        <div className="table-cell text-center">Traditional FS</div>
      </div>
      {/** reusable stuff starts here */}
      <div className="table-row">
        <div className="table-cell py-5">FDIC-backed bank account</div>
        <div className="table-cell  bg-purplelight w-52 px-24">
          <AiFillCheckCircle
            size={35}
            color="#28a745"
            className="text-center"
          />
        </div>
        <div className="table-cell text-center w-52 px-24">
          <AiOutlineCheckCircle size={35} color="#1ac9e7" />
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5">501(c)(3) Status</div>
        <div className="table-cell text-center bg-purplelight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell w-52 px-24">
          <AiOutlineCheckCircle size={35} color="#1ac9e7" />
        </div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5">Full org management platform</div>
        <div className="table-cell text-center bg-purplelight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5">Unlimited free Visa credit cards</div>
        <div className="table-cell text-center bg-purplelight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5">Expense reimbursements</div>
        <div className="table-cell text-center bg-purplelight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5">
          Automated vendor payments <br />
          <span className="text-graymed text-sm">ACH & check</span>
        </div>
        <div className="table-cell text-center bg-purplelight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5">Complimentary event insurance</div>
        <div className="table-cell text-center bg-purplelight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center"></div>
      </div>

      <div className="table-row">
        <div className="table-cell py-5">Free domain + hosting</div>
        <div className="table-cell text-center bg-purplelight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5">
          $45,000+ in free equipment/software
        </div>
        <div className="table-cell text-center bg-purplelight w-52 px-24">
          <AiFillCheckCircle size={35} color="#28a745" />
        </div>
        <div className="table-cell text-center"></div>
      </div>
      <div className="table-row">
        <div className="table-cell py-5">
          Cost <br />
          <span className="text-sm text-graymed">on average</span>
        </div>
        <div className="table-cell text-center bg-purplelight text-2xl font-medium text-purple">
          Free!
        </div>
        <div className="table-cell w- text-center">Up to 20% of revenue</div>
      </div>
    </div>
  );
}
