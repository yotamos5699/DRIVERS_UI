let hi = "45px";
export const colorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white", height: hi }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return { ...styles, height: hi };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      height: hi,
      color: "black",
    };
  },
  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      height: hi,
      // color: "#fff",
    };
  },
  multiValueRemove: (styles, { data }) => {
    return {
      ...styles,
      color: "#fff",
      height: hi,
      cursor: "pointer",
      ":hover": {
        color: "#fff",
      },
    };
  },
};

export const Freelancers = [
  {
    isAvailable: false,
    DocNumber: 3276,
    AccountKey: "6107",
    DocumentDetails: "0505455699",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },
  {
    isAvailable: false,
    DocNumber: 4530,
    AccountKey: "6900",
    DocumentDetails: "05066558764",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },
  {
    isAvailable: false,
    DocNumber: 2312,
    AccountKey: "6207",
    DocumentDetails: "0506612313",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },
  {
    isAvailable: false,
    DocNumber: 3320,
    AccountKey: "6707",
    DocumentDetails: "0506655632",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },
  {
    isAvailable: false,
    DocNumber: 3530,
    AccountKey: "6531",
    Phone: "0501231231",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },
  {
    isAvailable: false,
    DocNumber: 3230,
    AccountKey: "6051",
    Phone: "0506655698",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },
  {
    isAvailable: false,
    DocNumber: 4230,
    AccountKey: "6031",
    Phone: "0509980680",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },
  {
    isAvailable: false,
    DocNumber: 3230,
    AccountKey: "6031",
    Phone: "0509980680",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },
  {
    isAvailable: false,
    DocNumber: 3254,
    AccountKey: "6051",

    Phone: "0506655699",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },

  {
    isAvailable: false,
    DocNumber: 3342,
    AccountKey: "6107",
    Phone: "0506655699",
    geoLocation: {
      lan: 1211,
      lat: 2222,
    },
  },
];
export const payTypes = [
  { value: 1, label: "שקל" },
  { value: 2, label: "שנקל" },
  { value: 5, label: "חמש שקל" },
  { value: 10, label: "עשר שקל" },
  { value: 20, label: "עשרים שקל" },
  { value: 50, label: "חמישים שקל" },
  { value: 100, label: "מאה שקל" },
  { value: 200, label: "מאתיים שקל" },
];

export const drivers = [
  { value: "6107", label: "רמי" },
  { value: "6900", label: "איציק" },
  { value: "6031", label: "משה" },
  { value: "6051", label: "טל" },
  { value: "6531", label: "רמי" },
  { value: "6707", label: "דותן לוי" },
  { value: "6061", label: "סמי הכבאי" },
  { value: "6207", label: "ילד הומו" },
];
export const devState = [
  { value: "6107", label: "פרילנס" },
  { value: "6207", label: "לקוח" },
];
export const mockSignersList = [
  {
    signerData: { value: "7001", label: "דנה" },
    relatedAccounts: ["6107", "6900"],
  },
  {
    signerData: { value: "7002", label: "אופק" },
    relatedAccounts: ["6031", "6051", "6531", "6707"],
  },

  { signerData: { value: "7003", label: "יפית" }, relatedAccounts: ["6061"] },
  {
    signerData: { value: "7004", label: "נהג מונית" },
    relatedAccounts: ["6207"],
  },
];
