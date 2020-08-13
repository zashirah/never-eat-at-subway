import axios from 'axios'

const apiUrl =
  "https://api.airtable.com/v0/appM0yOdrDaczChMc/Signatures?view=Grid%20view";

export const getSignatures = async () => {
  try {
    const response = await axios.get(
      "https://api.airtable.com/v0/appM0yOdrDaczChMc/Signatures?view=Grid%20view",
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    );
    const signatures = response.data
    console.log(signatures)
    return signatures
  } catch (error) {
    throw error
  }
}