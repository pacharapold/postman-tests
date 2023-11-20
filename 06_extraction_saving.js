pm.test("workspace id saved", function () {
  var ws = pm.response.json().result.data.workspaces[0];
  pm.environment.set("workspaceId", ws.id);
});

// ========== Refactor ========== var > const

pm.test("workspace id saved", function () {
  const ws = pm.response.json().result.data.workspaces[0];
  pm.environment.set("workspaceId", ws.id);
});
