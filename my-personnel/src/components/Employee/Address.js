import InfoField from "./InfoField";

const Address = ({ employee }) => {
  return (
    <div className="">
      <h3 className="text-2xl pb-3">Address</h3>
      <InfoField label={"Street Address: "} value={employee.address.street1} />
      <InfoField label={"Apt/Suite/Other: "} value={employee.address.street2} />
      <div className="flex">
        <InfoField label={"City: "} value={employee.address.city} />
        <InfoField
          label={"State: "}
          value={employee.address.state}
          labelOptions={"ml-2"}
        />
        <InfoField
          label={"ZIP Code: "}
          value={employee.address.zip}
          labelOptions={"ml-2"}
        />
        <InfoField
          label={"Country: "}
          value={employee.address.country}
          labelOptions={"ml-2"}
        />
      </div>
    </div>
  );
};

export default Address;
