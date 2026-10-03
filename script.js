let currentCategory = "all";

function scrollToItems() {
    document.getElementById("items").scrollIntoView({ behavior: "smooth" });
}

function scrollToReport() {
    document.getElementById("report").scrollIntoView({ behavior: "smooth" });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

function claimItem(item) {
    showToast(`🎉 Claim request sent for "${item}"! The finder will be contacted.`);
}

function filterCategory(category, button) {
    currentCategory = category;

    document.querySelectorAll(".filter").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
    filterItems();
}

function filterItems() {
    const search = document.getElementById("searchInput").value.toLowerCase();

    document.querySelectorAll(".item-card").forEach(card => {
        const category = card.dataset.category;
        const name = card.dataset.name;

        const categoryMatch =
            currentCategory === "all" || category === currentCategory;

        const searchMatch = name.includes(search);

        card.classList.toggle("hidden", !(categoryMatch && searchMatch));
    });
}

function submitReport(event) {
    event.preventDefault();

    const itemName = document.getElementById("itemName").value;
    const location = document.getElementById("location").value;

    showToast(`✅ "${itemName}" reported successfully from ${location}!`);

    document.getElementById("reportForm").reset();

    const counter = document.getElementById("foundCount");
    counter.textContent = Number(counter.textContent) + 1;
}
