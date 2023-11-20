pm.test("limitWorkspaces is a non-negative integer", function () {
  const responseData = pm.response.json();

  pm.expect(responseData.result.data.limitWorkspaces).to.be.a("number");
  pm.expect(responseData.result.data.limitWorkspaces).to.be.at.least(0);
});

// ========== Refactor ==========

pm.test("limitWorkspaces is a non-negative integer", function () {
  const limitWorkspaces = pm.response.json().result.data.limitWorkspaces;
  pm.expect(limitWorkspaces).to.be.a("number").and.to.be.at.least(0);
});
