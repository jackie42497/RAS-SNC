const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(cb => {
  cb.addEventListener('change', updateTotals);
});

function sumGroup(group) {
  let sum = 0;
  document.querySelectorAll(`input[data-group="${group}"]:checked`)
    .forEach(cb => sum += Number(cb.dataset.value));
  return sum;
}

function updateTotals() {
  const proposedGroups = ['sb-p'];
  const completedGroups = ['sb-c'];

  let proposedTotal = proposedGroups.reduce((a, g) => a + sumGroup(g), 0);
  let completedTotal = completedGroups.reduce((a, g) => a + sumGroup(g), 0);

  document.getElementById('totalProposed').textContent = proposedTotal;
  document.getElementById('totalCompleted').textContent = completedTotal;
  document.getElementById('totalChange').textContent =
    completedTotal - proposedTotal;
}
