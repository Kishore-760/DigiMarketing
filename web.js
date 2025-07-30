// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Page switcher
function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

// Dashboard stats
document.getElementById("clicks").textContent = Math.floor(Math.random() * 1000);
document.getElementById("conversions").textContent = Math.floor(Math.random() * 300);
document.getElementById("reach").textContent = Math.floor(Math.random() * 5000);

// Chart.js setup
const ctx = document.getElementById("engagementChart");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [{
      label: "Engagement",
      data: [800, 950, 1100, 1300, 1600],
      backgroundColor: "#0078d7"
    }]
  },
  options: { responsive: true }
});

// Form submissions
document.getElementById("campaignForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "✅ Campaign launched!";
});
document.getElementById("leadForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("leadMessage").textContent = "🎉 Subscribed successfully!";
});

// Export PDF
function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Campaign Report", 20, 20);
  doc.text(Clicks: ${document.getElementById("clicks").textContent}, 20, 30);
  doc.text(Conversions: ${document.getElementById("conversions").textContent}, 20, 40);
  doc.text(Reach: ${document.getElementById("reach").textContent}, 20, 50);
  doc.save("report.pdf");
}

// Export CSV
function exportCSV() {
  const csv = Clicks,Conversions,Reach\n${document.getElementById("clicks").textContent},${document.getElementById("conversions").textContent},${document.getElementById("reach").textContent};
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "report.csv";
  link.click();
}
