import axios from "axios";

class ApiService {
  public async getData() {
    const res = await axios.get(
      "https://saurav.tech/NewsAPI/everything/cnn.json"
    );
    return res.data;
  }
}

export default new ApiService();
