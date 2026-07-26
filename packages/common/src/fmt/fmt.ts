class fmt {
  /**
   * Định dạng số tiền sang VNĐ
   */
  static vnd(input?: number | string): string {
    const val = Number(input);
    const value = Number.isNaN(val) ? 0 : val;

    return value.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  /**
   * Định dạng số tiền sang USD
   */
  static dlr(input?: number | string): string {
    const val = Number(input);
    const value = Number.isNaN(val) ? 0 : val;

    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

export { fmt };
