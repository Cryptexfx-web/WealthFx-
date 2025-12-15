async function invest() {
  await fetch(`${API}/invest`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      planId: planId.value,
      amount: amount.value
    })
  });
  alert("Investment started");
}

async function deposit() {
  await fetch(`${API}/deposit`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      crypto: crypto.value,
      amount: amount.value
    })
  });
  alert("Deposit submitted");
}

async function withdraw() {
  await fetch(`${API}/withdraw`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      amount: amount.value,
      wallet: wallet.value,
      crypto: crypto.value
    })
  });
  alert("Withdrawal requested");
}
