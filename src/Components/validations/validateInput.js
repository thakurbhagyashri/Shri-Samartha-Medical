export const validationRules = {
  quantity: {
    regex: /^[1-9]\d*$/,
    errorMessage: "Quantity must be a positive number.",
  },

  companyName: {
    // regex: /^[A-Za-z][A-Za-z0-9&',.-\s]{1,98}[A-Za-z0-9]$/,
    regex: /^[1-9]\d*$/,
    errorMessage: "Please Enter a Valid Company Name.",
  },
  

  price: {
    regex: /^[1-9]\d*(\.\d{1,2})?$/,
    errorMessage: "Price must be a positive number.",
  },
  discount: {
    regex: /^(100|[1-9]?\d)$/,
    errorMessage: "Discount must be between 0 and 100.",
  },
  medicineName: {
    regex: /^[a-zA-Z\s]+$/,
    errorMessage: "Medicine Name must contain only letters and spaces.",
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address.",
  },
  phone: {
    regex: /^\d{10}$/,
    errorMessage: "Phone number must be 10 digits.",
  },
};

export const validateInput = (name, value, customValidation = null) => {
  const rule = validationRules[name];

  if (customValidation && typeof customValidation === "function") {
    return customValidation(value) || "";
  }

  if (rule && !rule.regex.test(value)) {
    return rule.errorMessage;
  }

  return ""; // No error
};
