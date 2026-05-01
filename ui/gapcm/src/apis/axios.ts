import axios from "axios";
import { getAlertHandler } from "../provider/AlertService";

const axiosRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 120000,
});

const alert = getAlertHandler();

export interface Query {
  page: number;
  limit: number;
  [key: string]: any;
}

// Interceptor: Thêm token vào header trước khi gửi request
axiosRequest.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const userId = window.localStorage.getItem("user_id");
    console.log("userId in axiosInstance:", userId);
    if (userId) {
      config.headers["x-user-id"] = userId;
    }

    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const ignoreStatuses = [200];

// ✅ Response Interceptor
axiosRequest.interceptors.response.use(
  (response) => {
    if (!ignoreStatuses.includes(response.status)) {
      console.log("API Response:", response);
      //   alert(response.data?.message, '', 'success');
      alert.success(response.data?.message || "Successfully!", "");
    }
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401 || status === 403) {
        // handle continue here
        alert.error(data?.message, "Unauthorized");
      } else {
        console.error(`Error ${status}:`, data?.message || "Unknown error");
        // Có thể dùng toast hoặc alert ở đây nếu muốn
        alert.error(data?.message || "Có lỗi xảy ra.", `Error ${status}`);
      }
    } else {
      console.error("Network error:", error.message);
      //   alert('Lỗi mạng hoặc máy chủ không phản hồi.', '', 'error');
      alert.error("Lỗi mạng hoặc máy chủ");
    }

    return Promise.reject(error);
  },
);

export default axiosRequest;
