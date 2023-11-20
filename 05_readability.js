pm.test("Validate errorCode, errTitle, and errMsg fields", function () {
  const responseData = pm.response.json();

  pm.expect(responseData.errorCode).to.exist.and.to.be.a("number");
  pm.expect(responseData.errTitle).to.exist.and.to.be.a("string");
  pm.expect(responseData.errMsg).to.exist.and.to.be.a("string");
});

pm.test("Response has the required fields", function () {
  const responseData = pm.response.json().result.data;

  pm.expect(responseData).to.be.an("object");
  pm.expect(responseData.autoNVDR).to.exist;
  pm.expect(responseData.workspaces).to.exist;
  pm.expect(responseData.confirmPopup).to.exist;
  pm.expect(responseData.autoFillPrice).to.exist;
  pm.expect(responseData.limitWorkspaces).to.exist;
  pm.expect(responseData.rememberLastOrder).to.exist;
});

// ========== Refactor ==========

pm.test("Validate errorCode, errTitle, and errMsg fields", function () {
  const responseData = pm.response.json().result.data;

  pm.expect(responseData.errorCode).to.exist.and.to.be.a("number");
  pm.expect(responseData.errTitle).to.exist.and.to.be.a("string");
  pm.expect(responseData.errMsg).to.exist.and.to.be.a("string");
});

pm.test("Response has the required fields", function () {
  const responseData = pm.response.json().result.data;

  pm
    .expect(responseData)
    .to.be.an("object")
    .and.to.have.property("autoNVDR")
    .that.exists.and.to.have.property("workspaces")
    .that.exists.and.to.have.property("confirmPopup")
    .that.exists.and.to.have.property("autoFillPrice")
    .that.exists.and.to.have.property("limitWorkspaces")
    .that.exists.and.to.have.property("rememberLastOrder").that.exists;
  // Add more property checks here as needed
});
