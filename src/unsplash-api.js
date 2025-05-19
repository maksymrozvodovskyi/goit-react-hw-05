import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchData = async (image, currentPage) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: image,
      client_id: "cZrUXKvs2_3Ih1ZnCPXpAr9jZVD-SOii34Zobyj9hPE",
      page: currentPage,
      per_page: 30,
    },
  });
  return response.data;
};
