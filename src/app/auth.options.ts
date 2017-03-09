export const options = {
  additionalSignUpFields: [{
    name: "address",
    placeholder: "enter your address",
    // The following properties are optional
    icon: "https://example.com/assests/address_icon.png",
    prefill: "street 123",
    validator: function(address) {
      return {
        valid: address.length >= 10,
        hint: "Must have 10 or more chars" // optional
      };
    }
  },
    {
      name: "full_name",
      placeholder: "Enter your full name"
    }, {
      type: "select",
      name: "location",
      placeholder: "choose your location",
      options: [
        {value: "us", label: "United States"},
        {value: "fr", label: "France"},
        {value: "ar", label: "Argentina"}
      ],
      // The following properties are optional
      icon: "https://example.com/assests/location_icon.png",
      prefill: "us"
    }]
}
