import InfoField from "./InfoField";

const Contact = ({ employee }) => {
  return (
    <div className="">
      <h3 className="text-2xl pb-3">Contact</h3>
      <div className="flex">
        <div>
          <InfoField
            label={"Corporate Phone: "}
            value={employee.phone.corporate}
          />
          <InfoField
            label={"Personal Phone: "}
            value={employee.phone.personal}
          />
        </div>
        <div className="pl-2">
          <InfoField label={"Email: "} value={employee.email} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
