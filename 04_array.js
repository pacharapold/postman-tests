pm.test("Validate workspaces array and required fields", function () {
  const responseData = pm.response.json();

  pm.expect(responseData.result.data.workspaces).to.be.an("array");

  responseData.result.data.workspaces.forEach(function (workspace) {
    pm.expect(workspace).to.have.property("id").that.is.a("string").and.to.not.be.empty;
    pm.expect(workspace).to.have.property("name").that.is.a("string").and.to.not.be.empty;
  });
});

// ========== Refactor ==========

pm.test("Validate workspaces array and required fields", function () {
  const workspaces = pm.response.json().result.data.workspaces;

  pm.expect(workspaces).to.be.an("array");

  workspaces.forEach(function (workspace) {
    pm.expect(workspace.id).to.be.a("string").and.to.not.be.empty;
    pm.expect(workspace.name).to.be.a("string").and.to.not.be.empty;
  });
});
