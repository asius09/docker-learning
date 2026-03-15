export const getData = async (req, res) => {
  try {
    const data = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    ];
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get users" });
  }
};
