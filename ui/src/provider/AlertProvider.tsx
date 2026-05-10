// AlertProvider.js
import { useState, useCallback, useEffect } from "react";
import { message } from "antd";

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [alertState, setAlertState] = useState<{
    open: boolean;
    message: string;
    title: string;
    severity: "info" | "warning" | "error" | "success";
  }>({
    open: false,
    message: "",
    title: "",
    severity: "info",
  });

  const info = useCallback((message: string, title = "") => {
    setAlertState({
      open: true,
      message,
      title,
      severity: "info",
    });
  }, []);

  const warning = useCallback((message: string, title = "") => {
    setAlertState({
      open: true,
      message,
      title,
      severity: "warning",
    });
  }, []);

  const error = useCallback((message: string, title: "") => {
    setAlertState({
      open: true,
      message,
      title,
      severity: "error",
    });
  }, []);

  const success = useCallback((message: string, title = "") => {
    setAlertState({
      open: true,
      message,
      title,
      severity: "success",
    });
  }, []);

   const alert = {
    success: success,
    error: error,
    warning: warning,
    info: info
  };

  useEffect(() => {
    if (alertState.open) {
      messageApi.open({
        type: alertState.severity,
        content: alertState.message,
        duration: 3,
      });
      setAlertState((prev) => ({ ...prev, open: false })); // Reset trạng thái sau khi hiển thị
    }
  }, [alertState, messageApi]);

  return (
    <>
      {children}
      {contextHolder}
    </>
  );
};
