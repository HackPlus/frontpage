import CheckSvg from "./CheckSvg";

function Row({ perk, events, traditional }) {
  return (
    <div className="table-row">
      <div className="font-medium table-cell py-5 border-b border-r border-graylight">
        {perk}
      </div>
      <div className="font-medium table-cell text-center align-middle bg-purplelight border-b border-r border-graylight">
        {events}
      </div>
      <div className="font-medium table-cell text-center align-middle border-b border-graylight">
        {traditional ?? ""}
      </div>
    </div>
  );
}
export default function Table() {
  return (
    <div className="hidden md:table w-9/12 my-4">
      <div className="table-row">
        <div className="font-medium table-cell border-b border-r border-graylight"></div>
        <div style={{ width: '180px' }} className="font-medium table-cell align-middle bg-purplelight py-4 px-3 border-b border-r border-graylight">
          <img alt="Hack+ Logo" src="/img/logos/logo.svg" className="mx-auto" />
        </div>
        <div style={{ width: '180px' }} className="font-medium table-cell align-middle py-4 border-b border-graylight">
          <img
            alt="Image"
            src="/img/traditional.svg"
            className="max-h-20 mx-auto"
          />
        </div>
      </div>
      <Row
        perk="Program"
        events={<span className="text-purple text-2xl">Events+</span>}
        traditional="Traditional FS"
      />
      <Row
        perk="FDIC-backed bank account"
        events={<CheckSvg color="green" />}
        traditional={<CheckSvg color="blue" />}
      />
      <Row
        perk="501(c)(3) Status"
        events={<CheckSvg color="green" />}
        traditional={<CheckSvg color="blue" />}
      />
      <Row
        perk="Full org management platform"
        events={<CheckSvg color="green" />}
      />
      <Row
        perk="Unlimited free Visa credit cards"
        events={<CheckSvg color="green" />}
      />
      <Row perk="Expense reimbursements" events={<CheckSvg color="green" />} />
      <Row
        perk={
          <>
            {" "}
            Automated vendor payments <br />
            <span className="text-graymed text-sm">ACH & check</span>
          </>
        }
        events={<CheckSvg color="green" />}
      />
      <Row
        perk="Complimentary event insurance"
        events={<CheckSvg color="green" />}
      />
      <Row perk="Free domain + hosting" events={<CheckSvg color="green" />} />
      <Row
        perk="$45,000+ in free equipment/software"
        events={<CheckSvg color="green" />}
      />
      <Row
        perk={
          <>
            {" "}
            Cost <br />
            <span className="text-sm text-graymed">on average</span>
          </>
        }
        events={<span className="text-2xl text-purple font-bold">Free!</span>}
        traditional="Up to 20% of revenue"
      />
    </div>
  );
}
