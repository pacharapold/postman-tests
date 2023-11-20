pm.test("autoNVDR is a boolean value", function () {
  const responseData = pm.response.json();

  pm.expect(responseData).to.be.an("object");
  pm.expect(responseData.result.data.autoNVDR).to.be.a("boolean");
});

pm.test("ConfirmPopup is a boolean value", function () {
  const responseData = pm.response.json();

  pm.expect(responseData).to.be.an("object");
  pm.expect(responseData.result.data.confirmPopup).to.be.a("boolean");
});

pm.test("rememberLastOrder should be a boolean value", function () {
  const responseData = pm.response.json();

  pm.expect(responseData).to.be.an("object");
  pm.expect(responseData.result.data.rememberLastOrder).to.be.a("boolean");
});

// ========== Refactor ==========

pm.test("autoNVDR is a boolean value", function () {
  pm.expect(pm.response.json().result.data.autoNVDR).to.be.a("boolean");
});

pm.test("ConfirmPopup is a boolean value", function () {
  pm.expect(pm.response.json().result.data.confirmPopup).to.be.a("boolean");
});

pm.test("rememberLastOrder should be a boolean value", function () {
  pm.expect(pm.response.json().result.data.rememberLastOrder).to.be.a("boolean");
});
