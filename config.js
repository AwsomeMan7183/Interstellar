const config = {
  challenge: true, // Set to true if you want to enable password protection.
  users: {
    // You can add multiple users by doing username: 'password'.
    process.env.USER_1: "process.env.PASS_1",
    process.env.USER_2: "process.env.PASS_2"
  },
};

export default config;
