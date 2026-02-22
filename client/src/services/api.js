import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
  try {
    const result = await axios.get(serverUrl + "/api/v1/user/currentuser", {
      withCredentials: true,
    });
    dispatch(setUserData(result.data));
  } catch (error) {
    console.log(error);
  }
};

export const generateNotes = async (payload) => {
  try {
    const result = await axios.post(
      serverUrl + "/api/v1/notes/generate-notes",
      payload,
      { withCredentials: true },
    );
    // console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const downloadPDF = async (data) => {
  try {
    const response = await axios.post(
      serverUrl + "/api/v1/pdf/generate-pdf",
      { result: data },
      {
        responseType: "blob",
        withCredentials: true,
      },
    );

    const blob = new Blob([response.data], {
      type: "application/pdf",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "ExamNotesAI.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log(error);
    throw new Error("PDF download failed");
  }
};
