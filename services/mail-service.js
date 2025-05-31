async function sendMail(name, email, message) {
  try {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    let data = await response.json();

    // Throw error if request is not successful.
    if (!data.success) {
      throw data.message;
    }

    return data.data;
  } catch (ex) {
    console.error(ex);
    return [];
  }
}

module.exports = { sendMail };
