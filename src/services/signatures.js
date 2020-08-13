import axios from "axios";

const apiUrl = "https://api.airtable.com/v0/appM0yOdrDaczChMc/Signatures";

export const getSignatures = async () => {
  try {
    const response = await axios.get(`${apiUrl}?view=Grid%20view`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    });
    const signatures = response.data.records;
    return signatures;
  } catch (error) {
    throw error;
  }
};

export const createSignature = async (name, fontType) => {
  try {
    const response = await axios.post(
      apiUrl,
      {
        fields: {
          name: name,
          fontType: fontType,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    const signatures = response.data.records;
    return signatures;
  } catch (error) {
    throw error;
  }
};
