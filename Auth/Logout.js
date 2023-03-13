const Logout = (req, res) => {
  console.log("Done");
  res.clearCookie("jwt", { SameSite: "none", secure: true }).send("Done");
};
module.exports = Logout;
