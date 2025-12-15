async function loadDeposits() {
  const res = await fetch(`${API}/admin/deposits`, {
    headers: authHeaders()
  });
  const data = await res.json();
  adminData.innerText = JSON.stringify(data, null, 2);
}

async function loadWithdrawals() {
  const res = await fetch(`${API}/admin/withdrawals`, {
    headers: authHeaders()
  });
  const data = await res.json();
  adminData.innerText = JSON.stringify(data, null, 2);
}
